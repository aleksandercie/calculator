import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Clear from '../Clear//Clear'
import {create, all} from 'mathjs'

const math = create(all)
class Calculator extends React.Component {
    state = {
        input: ''
    }


    addToInput = val => {
        this.setState({
            input: this.state.input + val
        })
    }
    handleEqual = () => {
        this.setState({
            input: math.evaluate(this.state.input)
        })
    }
    handleClear = () => {
        this.setState({
            input: ""
        })
    }
    
    render(){
        return(
            <div className="container">
            <Input input={this.state.input}></Input>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
            <Clear handleClick={() => this.handleClear()}>Clear</Clear>
        </div>
        )
    }
}

export default Calculator