import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result: 0,
      num1: '',
      num2: '',
    }
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
  }

  //your code here
  setNum1(e){
    e.preventDefault();
    this.setState({ num1: e.target.value });
  }

  setNum2(e){
    e.preventDefault();
    this.setState({ num2: e.target.value });
  }

  render(){
    console.log(this.state.num2)
    return (
      <div>
        <label>Number 1:
          <input 
            value={this.state.num1}
            onChange={this.setNum1} />
        </label>
        <br />
        <label>Number 2:
          <input 
            value={this.state.num2}
            onChange={this.setNum2} />
        </label>
        <br />
        <button onClick={() => this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2)})}>+</button>
        <button onClick={() => this.setState({ result: parseInt(this.state.num1) - parseInt(this.state.num2)})}>-</button>
        <button onClick={() => this.setState({ result: parseInt(this.state.num1) * parseInt(this.state.num2)})}>*</button>
        <button onClick={() => this.setState({ result: parseInt(this.state.num1) / parseInt(this.state.num2)})}>/</button>
        <br />
        <h3>Result: {this.state.result}</h3>
      </div>
    );
  }
}

export default Calculator;
