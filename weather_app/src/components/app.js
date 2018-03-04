import React from 'react';
import SearchBar from './search_bar_container';
import WeatherList from './weather_list_container';

export default class App extends React.Component {
    render(){
        return (
            <div className="main-container">
                <h1 className="title">5-Day Weather Forecast</h1>
                <SearchBar />
                <WeatherList />
            </div>
        )
    }
}