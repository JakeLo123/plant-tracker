import React, {useEffect, useState} from 'react';
import {Header, Today} from './components';
import { makeScheduleFromPlants, getNextDay } from '../utils';
import axios from 'axios';

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            schedule: {},
            selectedDate: 'December 16, 2019'
        }
        this.changeDay = this.changeDay.bind(this);
    }

    componentDidMount(){
        axios.get('/api/plants')
            .then(res => {
                let plants = res.data;
                this.setState({
                    schedule: makeScheduleFromPlants(plants)
                })
            })
            .catch(e => {
                console.log('error fetching plants...', e)
            })
    }

    changeDay(){
        const selectedDate = this.state.selectedDate;
        this.setState({
            selectedDate: getNextDay(selectedDate)
        })
    }
    
    render(){
        const {schedule, plants, selectedDate} = this.state
        return (
            <div>
                <header>
                    <h1>we grow in tandem</h1>
                    <div onClick={this.changeDay} className="pagination" >tomorrow</div>
                    <div className="pagination" >this week</div>
                    <div className="pagination" >next week</div>
                </header>
                <Today schedule={schedule} plants={plants} selectedDate={selectedDate} />
            </div>
        )
    }
}

export default Main;
