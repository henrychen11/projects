import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }
    
    componentWillMount(){
        this.props.fetchWeather('San Francisco');
        this.props.fetchWeather('Los Angeles');
        this.props.fetchWeather('New York');
    }

    onInputChange (event){
        event.preventDefault();
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }
    render(){
        
        return (
            <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
                <input
                    className="form-control"
                    placeholder="Get a five-day forecast in your faviorite cities"
                    onChange={this.onInputChange.bind(this)}
                    value={this.state.term} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}