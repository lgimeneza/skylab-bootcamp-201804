import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logic from '../../logic'
import './home.css'
import Calendar from "react-big-calendar";
import moment from "moment";
import swal from 'sweetalert2'
import "react-big-calendar/lib/css/react-big-calendar.css";
import Toggle from 'react-toggle'


moment.locale('ko', {
    week: {
        dow: 1,
        doy: 1,
    }
})
Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class Home extends Component {

    state = {
        nurse: '',
        id: '',
        disp: false,
        dispUpdated: false,
        admin: false,
        events: []
    }

    componentWillMount() {
        logic.retrieveNurse()
            .then(info => {
                this.setState({
                    nurse: info.data.name,
                    id: info.data.id,
                    disp: info.data.disp,
                    admin: info.data.admin,
                    events: info.data.events
                })
                if (info.data.admin) this.props.history.push('/home-admin')
            })
            .catch(error => swal(
                error.message
            )
            )
    }

    showDisp = (e) => {
        this.setState({
            disp: e.target.checked,
            dispUpdated: true
        })
    }
    handleDisp = () => {
        const disp = this.state.disp
        logic.changeDisp(disp)
    }

    render() {

        return (
            <div className="main-s">

                <nav>
                <div className="header-logo"><Link className="header-logo-link" to="/">Nursefy</Link></div>
                </nav>

                <main>
                    <h2 className="login-title">{this.state.nurse}'s calendar</h2>
                    <Calendar
                        defaultDate={new Date()}
                        defaultView="month"
                        events={this.state.events}
                        toolbar={false}
                        style={{ height: "45vh", margin: "2vh" }}
                    />
                    <div>
                        <span className="set-aval-text">Set your availability</span>
                        <Toggle
                            checked={this.state.disp}
                            onChange={this.showDisp} />
                    </div>

                    {this.state.dispUpdated && <button onClick={this.handleDisp}>Save</button>}

                </main>

            </div>
        )
    }

}


export default Home