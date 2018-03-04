import React from 'react';
import Chart from './chart';

class WeatherList extends React.Component {

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map( weather => weather.main.temp);
        const pressures = cityData.list.map( weather => weather.main.pressure);
        const humidities = cityData.list.map( weather => weather.main.humidity);
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;
        // const { lon, lat } = cityData.city.coord; //ES6
        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="orange" units="K" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%"/></td>
            </tr>
        )
    }

    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

export default WeatherList;