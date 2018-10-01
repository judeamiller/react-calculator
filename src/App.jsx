import React, { Component } from 'react';
import './App.css';
import { Button } from './components/button';
import { Input } from './components/input';
import { ClearButton } from './components/clearButton';
import * as math from 'mathjs';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      input: ""
    };
  }

  concatenateInput = val => {
    this.setState({input: this.state.input + val});
  };

  handleEqual = () => {
    this.setState({input: math.eval(this.state.input)});
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
        <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.concatenateInput}>7</Button>
            <Button handleClick={this.concatenateInput}>8</Button>
            <Button handleClick={this.concatenateInput}>9</Button>
            <Button handleClick={this.concatenateInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.concatenateInput}>4</Button>
            <Button handleClick={this.concatenateInput}>5</Button>
            <Button handleClick={this.concatenateInput}>6</Button>
            <Button handleClick={this.concatenateInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.concatenateInput}>1</Button>
            <Button handleClick={this.concatenateInput}>2</Button>
            <Button handleClick={this.concatenateInput}>3</Button>
            <Button handleClick={this.concatenateInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.concatenateInput}>.</Button>
            <Button handleClick={this.concatenateInput}>0</Button>
            <ClearButton handleClear={()=> this.setState({input: ""})}>C</ClearButton>
            
            <Button handleClick={this.concatenateInput}>-</Button>
          </div>
          <div className="row">
          <Button handleClick={this.handleEqual}>=</Button>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
