import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchWeather } from '../actions/search_bar_actions';

const mapStateToProps = (state) => {
    
}

const mapDispatchToProps = (dispatch) => ({
    fetchWeather: (city) => dispatch(fetchWeather(city))
})

export default connect(null, mapDispatchToProps)(SearchBar);