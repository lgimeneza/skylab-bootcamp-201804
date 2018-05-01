'use strict'

class Calculator extends React.Component { // smart
    constructor() {
        super()

        this.state = {
            operand1: undefined,
            operand2: undefined,
            result: undefined
        }
    }

    changeOperand1 = (e) => {
        const operand1 = parseInt(e.target.value)

        this.setState({
            operand1
        })
    }

    changeOperand2 = (e) => {
        const operand2 = parseInt(e.target.value)

        this.setState({
            operand2
        })
    }

    submit = (e) => {
        e.preventDefault()

        let result

        switch (this.props.operation) {
            case '+':
                result = calculin.sum(this.state.operand1, this.state.operand2)
                break
            case '-':
                result = calculin.sub(this.state.operand1, this.state.operand2)
                break
            case '*':
                result = calculin.mul(this.state.operand1, this.state.operand2)
                break
            case '/':
                result = calculin.div(this.state.operand1, this.state.operand2)
        }

        this.setState({
            result
        })
    }

    render() {
        return <form onSubmit={this.submit}>
            <h2>Calculator</h2>
            <input type="text" onChange={this.changeOperand1} />
            {this.props.operation}
            <input type="text" onChange={this.changeOperand2} />
            <button type="submit">=</button>
            {this.state.result}
        </form>
    }
}