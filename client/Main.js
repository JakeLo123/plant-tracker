import React from 'react';
import { Day, Week, AddPlant } from './components';
import {
  makeScheduleFromPlants,
  getNextDay,
  stringifyDate,
  getWeekFromDay,
} from '../utils';
import axios from 'axios';

export const selectDate = event => {
  let dateToSelect;
  if (event.target) {
    dateToSelect = event.target.value;
  } else {
    dateToSelect = event;
  }
  return {
    visibilityFilter: 'day',
    selectedDate: dateToSelect,
  };
};

export const selectWeek = () => ({
  visibilityFilter: 'week',
});

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      plants: [],
      schedule: {},
      selectedDate: stringifyDate(new Date()),
      selectedWeek: getWeekFromDay(stringifyDate(new Date())),
      visibilityFilter: 'day',
      showAddPlantForm: false,
    };
    this.changeSelectedDate = this.changeSelectedDate.bind(this);
    this.togglePlantWaterStatus = this.togglePlantWaterStatus.bind(this);
    this.selectWeek = this.selectWeek.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/plants')
      .then(res => {
        let plants = res.data;
        this.setState({
          plants: plants,
          schedule: makeScheduleFromPlants(plants),
        });
      })
      .catch(e => {
        console.error('error fetching plants...', e);
      });
  }

  changeSelectedDate(dateString) {
    this.setState(selectDate(dateString));
  }

  selectWeek() {
    this.setState(selectWeek);
  }

  togglePlantWaterStatus(plantId, dateToToggle) {
    const plants = this.state.plants;
    axios
      .put(`/api/plants/${plantId}`, { dateToToggle })
      .then(res => {
        const updatedPlants = plants.map(plant => {
          if (plant.name === res.data.name) return res.data;
          else return plant;
        });
        this.setState({
          plants: updatedPlants,
          schedule: makeScheduleFromPlants(updatedPlants),
        });
      })
      .catch(e => console.log('error: ', e));
  }

  render() {
    const {
      schedule,
      selectedDate,
      selectedWeek,
      visibilityFilter,
    } = this.state;
    return (
      <div>
        <header>
          <h1>we grow in tandem</h1>
          <div
            onClick={() => {
              const today = stringifyDate(new Date());
              this.changeSelectedDate(today);
            }}
            id="today-btn"
            className="pagination"
          >
            🌱today
          </div>
          <div
            onClick={() => {
              const nextDay = getNextDay(selectedDate);
              this.changeSelectedDate(nextDay);
            }}
            id="next-day-btn"
            className="pagination"
          >
            🌱next day
          </div>
          <div
            onClick={this.selectWeek}
            id="this-week-btn"
            className="pagination"
          >
            🌱this week
          </div>
          <div
            onClick={() => this.setState({ showAddPlantForm: true })}
            className="pagination"
          >
            new plant
          </div>
        </header>
        {this.state.showAddPlantForm && <AddPlant />}
        {visibilityFilter === 'day' ? (
          <Day
            changeSelectedDate={this.changeSelectedDate}
            togglePlantWaterStatus={this.togglePlantWaterStatus}
            schedule={schedule}
            selectedDate={selectedDate}
          />
        ) : (
          <Week
            togglePlantWaterStatus={this.togglePlantWaterStatus}
            schedule={schedule}
            selectedWeek={selectedWeek}
          />
        )}
      </div>
    );
  }
}

export default Main;
