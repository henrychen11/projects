import axios from 'axios';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const API_KEY = '214b015c675c795513e0c7ebd3c9d242';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log("here", request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
    