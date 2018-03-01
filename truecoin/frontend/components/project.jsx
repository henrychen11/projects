import React from 'react';

export default class Project extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: "",
            result: 0,
            error: "",
            cache: {}
        }
    }
    
    fibs(n){
        let num = parseInt(n);
        if (this.state.cache[num]) {
            return this.state.cache[num];
        } 
        
        if (num <= 1){
            this.state.cache[num] = num;
        } else {
            this.state.cache[num] = this.fibs(num - 1) + this.fibs(num - 2);
        }
        
        return this.state.cache[num];
    }
    
    updateValue(event){
        this.setState({ input: event.target.value, error: "", result: 0 });
        if (Number.isInteger(parseInt(event.target.value))) {
            let answer = this.fibs(event.target.value);
            this.setState({ result: answer });
        } else {
            this.setState({ error: "Please enter valid number"});
        }
    }

    render(){
        return(
            <div className="">
                <label>Input
                    <input
                    type="text"
                    value={this.state.input}
                    onChange={this.updateValue.bind(this)} />
                    </label>
                    <div>Result: {this.state.result}</div>
                    <div>{this.state.error}</div>
            </div>
        )
    }
}