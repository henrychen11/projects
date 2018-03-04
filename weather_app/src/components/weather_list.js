import React from 'react';

export default class WeatherList extends React.Component {
    render(){
        console.log(this.props.weather);
        return (
            <table className="table table-hover">
                <tbody>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </tbody>
            </table>
        )
    }
}