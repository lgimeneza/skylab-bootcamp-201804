import React, { Component } from 'react'
import './Calculator.css'
import calculin from '../logic/calculin'
import Result from './Result'
import Input from './Input'
import History from './History'

class Calculator extends Component { // smart
    constructor() {
        super()

        this.state = {
            operand1: '',
            operand2: '',
            result: '',
            history: []
        }

        this.changeOperand1 = this.changeOperand1.bind(this)
        this.changeOperand2 = this.changeOperand2.bind(this)
        this.submit = this.submit.bind(this)
    }

    changeOperand1(e) {
        let operand1 = e.target.value

        this.setState({
            operand1
        })
    }

    changeOperand2(e) {
        const operand2 = e.target.value

        this.setState({
            operand2
        })
    }

    submit(e) {
        e.preventDefault()

        const operand1 = parseInt(this.state.operand1)
        const operand2 = parseInt(this.state.operand2)
        let result

        switch (this.props.operation) {
            case '+':
                result = calculin.sum(operand1, operand2)
                break
            case '-':
                result = calculin.sub(operand1, operand2)
                break
            case '*':
                result = calculin.mul(operand1, operand2)
                break
            case '/':
                result = calculin.div(operand1, operand2)
        }

        const operation = `${operand1} ${this.props.operation} ${operand2}  = ${result}`

        result = result.toString()
    

        this.setState(prevState => {
            return {
                result,
                history: [...prevState.history, operation]
            }
        })
    }

    clear = (e) => {
        e.preventDefault()

        this.setState({
            operand1: '',
            operand2: '',
            result: ''
        })
    }

    render() {
        return <div className="form">
            <form onSubmit={this.submit}>
                <Input handleChange={this.changeOperand1} value={this.state.operand1} />
                {this.props.operation}
                <Input handleChange={this.changeOperand2} value={this.state.operand2} />
                <button type="submit">=</button>
                <Result value={this.state.result} />
                <button onClick={this.clear}>clear</button>
            </form>
            <History operations={this.state.history} />
        </div>
    }
}

export default Calculator