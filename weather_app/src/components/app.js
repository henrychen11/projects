import React from 'react';
import SearchBar from './search_bar_container';
import WeatherList from './weather_list_container';

export default class App extends React.Component {
    render(){
        return (
            <div>
                <SearchBar />
                <WeatherList />
            </div>
        )
    }
}