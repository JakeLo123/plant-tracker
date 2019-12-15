import React, {useEffect, useState} from 'react';
import {Header, Today} from './components';
import axios from 'axios';

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            schedule: {},
            plants: []
        }
    }

    componentDidMount(){
        axios.get('/api/plants')
                    .then(res => {
                        let d = res.data;
                        this.setState({
                            plants: d
                        })
                    })
                    .catch(e => {
                        console.log('error fetching plants...', e)
                    })
    }
    render(){
        return (
            <div>
                <Header />
                <Today plants={this.state.plants}/>
            </div>
        )
    }
}

export default Main;