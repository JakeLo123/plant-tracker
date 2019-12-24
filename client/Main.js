import React from 'react';
import { Day, Week } from './components';
import {
  makeScheduleFromPlants,
  getNextDay,
  stringifyDate,
  getWeekFromDay,
} from '../utils';
import axios from 'axios';

export const selectToday = () => ({
  visabilityFilter: 'day',
  selectedDate: stringifyDate(new Date()),
});

export const selectNextDay = prevState => ({
  visabilityFilter: 'day',
  selectedDate: getNextDay(prevState.selectedDate),
});

export const selectDay = dateString => {
  let selectedDate = dateString;
  return {
    visabilityFilter: 'day',
    selectedDate: selectedDate,
  };
};

export const selectWeek = () => ({
  visabilityFilter: 'week',
});

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      plants: [],
      schedule: {},
      selectedDate: stringifyDate(new Date()),
      selectedWeek: getWeekFromDay(stringifyDate(new Date())),
      visabilityFilter: 'day',
    };
    this.selectToday = this.selectToday.bind(this);
    this.nextDay = this.nextDay.bind(this);
    this.selectDay = this.selectDay.bind(this);
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

  selectToday() {
    this.setState(selectToday);
  }

  nextDay() {
    this.setState(selectNextDay);
  }

  selectDay(event) {
    const dateString = event.target.value;
    this.setState(selectDay(dateString));
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
      visabilityFilter,
    } = this.state;
    return (
      <div>
        <header>
          <h1>we grow in tandem</h1>
          <div onClick={this.selectToday} className="pagination">
            today
          </div>
          <div onClick={this.nextDay} className="pagination">
            next day
          </div>
          <div onClick={this.selectWeek} className="pagination">
            this week
          </div>
        </header>
        {visabilityFilter === 'day' ? (
          <Day
            selectDay={this.selectDay}
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
