import React, { Component } from "react"
import logic from '../../logic'
import swal from 'sweetalert2'
import { withRouter } from 'react-router-dom'
import { Line } from 'react-chartjs-2'
import { Col, Row, Container } from 'reactstrap';

class Home extends Component {


    state = {
        dropdownOpen: false,
        ip: '',
        port: '',
        selectedArduino: '',
        chartData: {},
        timer: null,
        counter: 0
    }

    componentDidMount() {

        let timer = setInterval(this._handleData, 3000)
        this.setState({ timer })

    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }

    arduHandler = e => {
        let selectedArduino = e.target.value
        this.setState({ selectedArduino })
    }

    listArduinos = () => {
        let userId = localStorage.getItem('id-app')
        let token = localStorage.getItem('token-app')

        logic.listArduinos(userId, token).then(data => {
            const options = data.map(function (ele, i) {
                return <option key={i} value={ele.ip}>{ele.ip}</option>
            })
            this.setState({
                data,
                options
            })
        })
    }

    _handleKeepIp = ({target:{value:ip}}) => {
        this.setState({ ip })
    }

    _handleKeepPort = ({target:{value:port}}) => {
        this.setState({ port })
    }

    _handleRemoveArdu = () => {
        const userId = localStorage.getItem('id-app')
        const token = localStorage.getItem('token-app')
        const targetArduino = this.state.selectedArduino
        const arduId = this.state.data.find(function (ele) {
            return ele.ip === targetArduino
        })
        logic.removeArduino(userId, arduId.id, token)
    }

    _handleAddArduino = (e) => {
        e.preventDefault()
        const userId = localStorage.getItem('id-app')
        logic.addArduino(userId, this.state.ip, this.state.port)
            .then(() => {
                this.setState({ ip: '', port: '' })
            })
    }

    _handleData = () => {
        const userId = localStorage.getItem('id-app')
        const token = localStorage.getItem('token-app')
        const targetArduino = this.state.selectedArduino
        if (this.state.data && this.state.selectedArduino) {
            const arduId = this.state.data.find(function (ele) {
                return ele.ip === targetArduino
            })

            logic.retrieveArduinoData(userId, arduId.id, token)
                .then(data => {
                    let Yaxis = data.map(({ timestamp }) => {
                        let parsedTime = new Date(timestamp).toLocaleTimeString()
                        return parsedTime
                    })
                    let Xaxis = data.map(ele => ele.value)
                    let chartData = {
                        labels: Yaxis,
                        datasets: [{
                            label: `Data from arduino ${this.state.selectedArduino}`,
                            data: Xaxis
                        }]
                    }
                    this.setState({ chartData, counter: this.state.counter + 1 })
                })
        }
    }
    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    controlArduino = (state) => {
        const userId = localStorage.getItem('id-app')
        const targetArduino = this.state.selectedArduino
        const arduId = this.state.data.find(function (ele) {
            return ele.ip === targetArduino
        })
        logic.controlArduino(userId, arduId.id, state)
    }

    removeArduinoData = () => {
        const userId = localStorage.getItem('id-app')
        const targetArduino = this.state.selectedArduino
        const arduId = this.state.data.find(function (ele) {
            return ele.ip === targetArduino
        })
        logic.removeArduinoData(userId, arduId.id)
    }

    render() {

        if (this.props.isLogged()) {
            return <Container>
                <Row>
                    <Col xs="12" md="6">
                        <h3>Add arduino:</h3>
                        <form onSubmit={this._handleAddArduino}>
                            <div className="row justify-content-center ">
                                <input className="form-group col-xs-4 mt-4 border pl-3" autoFocus value={this.state.ip} onChange={this._handleKeepIp} type="text" placeholder="Ip" />
                            </div>
                            <div className="row justify-content-center ">
                                <input className="form-group col-xs-4 mt-4 border pl-3" value={this.state.port} onChange={this._handleKeepPort} type="text" placeholder="Port" />
                            </div>

                            <div className="row justify-content-center ">

                                <div className="form-group justify-content-center ">
                                    <input className="btn bg-darkcyan mt-4" type="submit" value="Add Arduino" />
                                </div>
                            </div>

                        </form>

                        <h3>Lista de Arduinos:</h3>

                        <select value={this.state.selectedArduino} onChange={this.arduHandler}>
                            <option>Select an arduino:</option>
                            {this.state.options}
                        </select>

                        <button onClick={this.listArduinos}>Retrieve arduinos</button>
                        <h3>Arduino Controls:</h3>
                        {/* <button onClick={this._handleData}>Retrieve data from arduino</button> */}
                        <button onClick={() => this.controlArduino('on')}>ON</button>
                        <button onClick={() => this.controlArduino('off')}>OFF</button>
                        <button onClick={this.removeArduinoData}>Remove Arduino Data</button>
                        <button onClick={this._handleRemoveArdu}>Remove Arduino</button>
                    </Col>

                    <Col xs="12" md="6">
                        <Line
                            data={this.state.chartData}
                            options={{ maintainAspectRatio: false }}
                        />
                    </Col>
                </Row>
            </Container>


        } else {
            return <h2>You are not allowed</h2>
        }
    }
}

export default withRouter(Home);