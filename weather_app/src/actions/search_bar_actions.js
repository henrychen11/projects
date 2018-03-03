const FETCH_WEATHER = 'FETCH_WEATHER';
const API_KEY = '214b015c675c795513e0c7ebd3c9d242';
const URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather = () => ({
    type: FETCH_WEATHER,

});
    