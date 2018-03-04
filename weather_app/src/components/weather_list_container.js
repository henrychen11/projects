import { connect } from 'react-redux';
import WeatherList from './weather_list';


const mapStateToProps = (state) => ({
   weather: state.weather 
});

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);