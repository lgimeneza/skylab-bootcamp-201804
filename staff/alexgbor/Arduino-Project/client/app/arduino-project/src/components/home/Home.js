import React, { Component } from "react"
import logic from '../../logic'
import swal from 'sweetalert2'
import { Link, withRouter } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'

class Home extends Component {

    state = {
        ip: '',
        port: '',
        selectedArduino: '',
        arduData:[]
    }

    componentDidMount() {
        let userId = localStorage.getItem('id-app')
        let token = localStorage.getItem('token-app')
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

    _handleKeepIp = (e) => {
        let ip = e.target.value;
        this.setState({ ip })
    }

    _handleKeepPort = (e) => {
        let port = e.target.value;
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
        const arduId = this.state.data.find(function (ele) {
            return ele.ip === targetArduino
        })
        logic.retrieveArduinoData(userId, arduId.id, token)
            .then(data => {
                let Yaxis = data.map(({timestamp}) => timestamp.toLocaleTimeString())
                let Xaxis = data.map(ele => ele.value)
                let arduData = {
                    labels: Yaxis,
                    datasets: {
                        label: `Data from arduino ${this.state.selectedArduino}`,
                        data: Xaxis
                    }
                }
                this.setState({ arduData })
            })
    }

    _dummyAddData = () => {
        const userId = localStorage.getItem('id-app')
        const token = localStorage.getItem('token-app')
        const targetArduino = this.state.selectedArduino
        const arduId = this.state.data.find(function (ele) {
            return ele.ip === targetArduino
        })
        logic.addArduinoData(userId, arduId.id, 123123123, token)
    }

    render() {

        if (this.props.isLogged()) {
            return <div className="text-center">
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
                <button onClick={this.listArduinos}>Retrieve arduinos</button>

                <select value={this.state.selectedArduino} onChange={this.arduHandler}>
                    <option>Select an arduino:</option>
                    {this.state.options}
                </select>

                <button onClick={this._handleRemoveArdu}>Remove Arduino</button>

                <button onClick={this._dummyAddData}>add dummy data to selected</button>



                <button onClick={this._handleData}>Retrieve data from arduino</button>

                <Bar data={this.state.arduData} width={100} height={50} options={{ maintainAspectRatio: false }} />
            </div>

        } else {
            return <h2>You are not allowed</h2>
        }
    }
}

export default withRouter(Home);