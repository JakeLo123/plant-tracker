import React from 'react';
import { Day, Week } from './components';
import { makeScheduleFromPlants, getNextDay, stringifyDate, getWeekFromDay } from '../utils';
import axios from 'axios';

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            plants: [],
            schedule: {},
            selectedDate: stringifyDate(new Date()),
            selectedWeek: getWeekFromDay(stringifyDate(new Date())),
            visabilityFilter: 'day'
        }
        this.selectToday = this.selectToday.bind(this);
        this.nextDay = this.nextDay.bind(this);
        this.selectDay = this.selectDay.bind(this);
        this.togglePlantWaterStatus = this. togglePlantWaterStatus.bind(this);
        this.backToThisWeek = this.backToThisWeek.bind(this);
    }

    componentDidMount(){
        axios.get('/api/plants')
            .then(res => {
                let plants = res.data;
                this.setState({
                    plants: plants,
                    schedule: makeScheduleFromPlants(plants)
                })
            })
            .catch(e => {
                console.log('error fetching plants...', e)
            })
    }

    selectToday(){
        this.setState({
            visabilityFilter: 'day',
            selectedDate: stringifyDate(new Date())
        })
    }

    nextDay(){
        const selectedDate = this.state.selectedDate;
        this.setState({
            visabilityFilter: 'day',
            selectedDate: getNextDay(selectedDate)
        })
    }

    selectDay(event){
        let selectedDate = event.target.value;
        if (selectedDate === 'Today') {
            selectedDate = stringifyDate(new Date())
        }
        this.setState({
            visabilityFilter: 'day',
            selectedDate: selectedDate
        })
    }

    backToThisWeek(){
        this.setState({
            visabilityFilter: 'week'
        })
    }
    
    togglePlantWaterStatus(plantId, dateToToggle){
        const plants = this.state.plants
        axios.put(`/api/plants/${plantId}`, { dateToToggle })
            .then(res => {
                const updatedPlants = plants.map(plant => {
                    if(plant.name === res.data.name) return res.data
                    else return plant
                })
                this.setState({
                    plants: updatedPlants,
                    schedule: makeScheduleFromPlants(updatedPlants)
                })
            })
            .catch(e => console.log('error: ', e))
    }

    render(){
        console.log(this.state.plants)
        const {schedule, selectedDate, selectedWeek, visabilityFilter} = this.state
        return (
            <div>
                <header>
                    <h1>we grow in tandem</h1>
                    <div onClick={this.selectToday} className="pagination" >today</div>
                    <div onClick={this.nextDay} className="pagination" >next day</div>
                    <div onClick={this.backToThisWeek} className="pagination" >this week</div>
                </header>
                {
                    visabilityFilter === 'day'
                    ? (<Day selectDay={this.selectDay} togglePlantWaterStatus={this.togglePlantWaterStatus} schedule={schedule} selectedDate={selectedDate} />)
                    : (<Week togglePlantWaterStatus={this.togglePlantWaterStatus} schedule={schedule} selectedWeek={selectedWeek} />)
                }
            </div>
        )
    }
}

export default Main;
