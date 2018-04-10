import React, {Component} from 'react';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import TodayHighAndLow from '../TodayHighAndLow/TodayHighAndLow';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import './Weather.css';

class Weather extends Component {
    render() {
        return (
            <div className="Weather">
                <CurrentWeather />
                <TodayHighAndLow />
                <HourlyForecast />
            </div>
        )
    }
}

export default Weather;
