import React from 'react';
import {Day} from './components';
import { makeScheduleFromPlants, getNextDay, stringifyDate } from '../utils';
import axios from 'axios';

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            plants: [],
            schedule: {},
            selectedDate: stringifyDate(new Date())
        }
        this.nextDay = this.nextDay.bind(this);
        this.backToToday = this.backToToday.bind(this);
        this.togglePlantWaterStatus = this. togglePlantWaterStatus.bind(this);
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

    backToToday(){
        this.setState({
            selectedDate: stringifyDate(new Date())
        })
    }

    nextDay(){
        const selectedDate = this.state.selectedDate;
        this.setState({
            selectedDate: getNextDay(selectedDate)
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
        const {schedule, selectedDate} = this.state
        return (
            <div>
                <header>
                    <h1>we grow in tandem</h1>
                    <div onClick={this.backToToday} className="pagination" >today</div>
                    <div onClick={this.nextDay} className="pagination" >next day</div>
                    <div className="pagination" >this week</div>
                    <div className="pagination" >next week</div>
                </header>
                <Day togglePlantWaterStatus={this.togglePlantWaterStatus} schedule={schedule} selectedDate={selectedDate} />
            </div>
        )
    }
}

export default Main;
