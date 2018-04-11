import React, {Component} from 'react';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import TodayHighAndLow from '../TodayHighAndLow/TodayHighAndLow';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast';
import TodayForecastSummary from '../TodayForecastSummary/TodayForecastSummary';
import TodayWeatherStats from '../TodayWeatherStats/TodayWeatherStats';
import './Weather.css';

class Weather extends Component {
    render() {
        return (
            <div className="Weather">
                <CurrentWeather />
                <TodayHighAndLow />
                <HourlyForecast />
                <WeeklyForecast />
                <TodayForecastSummary />
                <TodayWeatherStats />
            </div>
        )
    }
}

export default Weather;
