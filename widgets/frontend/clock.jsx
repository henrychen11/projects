import React from 'react'

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date()
        }
        this.tick = this.tick.bind(this);
    }

    tick(){
        this.setState({ time: new Date() });
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();

        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        return (
            <div className="clock">
                <div className="time-text">Clock</div>
                
                <div className="time-section">
                    <div>Time:</div>
                    <div>{hours}:{minutes}:{seconds} PDT</div>
                </div>
                
                <div className="time-section">
                    <div>Date:</div>
                    <div>{this.state.time.toDateString()}</div>
                </div>

            </div>
        )
    }
}

export default Clock;