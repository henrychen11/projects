import { connect } from 'react-redux';
import WeatherList from './weather_list';

const mapStateToProps = (state) => ({
   weather: state.weather 
});

export default connect(mapStateToProps)(WeatherList);