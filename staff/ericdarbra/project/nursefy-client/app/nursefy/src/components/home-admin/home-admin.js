import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logic from '../../logic'
import './home-admin.css'
import Calendar from "react-big-calendar";
import moment from "moment";
import swal from 'sweetalert2'
import "react-big-calendar/lib/css/react-big-calendar.css";


moment.locale('ko', {
    week: {
        dow: 1,
        doy: 1,
    }
})
Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class HomeAdmin extends Component {

    state = {
        nurses: '',
        name:'',
        id: '',
        admin: false,
        events: [],
        list: []
    }
    componentWillMount() {
        logic.listUsers()
            .then(res => {
                this.setState({
                    list: res.data
                })
            })
    }
    startDate = (e) => {
        this.setState({
            start: e.target.value
        })
    }
    endDate = (e) => {

        this.setState({
            end: e.target.value
        })
    }
    titleHandler = e => {
        this.setState({
            title: e.target.value
        })
    }
    nurseHandler = e => {
        this.setState({
            id: e.target.value
        }, () => {

            logic.retrieveNurseAdmin(this.state.id)
                .then(info => {
                    this.setState({
                        events: info.data.events,
                        id: info.data._id
                    })
                })
        })

    }

    render() {

        return (
            <div className="main-s">

                <nav>
                    <div className="header-logo"><Link className="header-logo-link" to="/">Nursefy</Link></div>
                </nav>

                <main>
                    <h2 className="login-title">Admin panel</h2>
                    <Calendar
                        defaultDate={new Date()}
                        defaultView="month"
                        views={"month"}
                        events={this.state.events}
                        style={{ height: "45vh", margin: "2vh" }}
                    />

                </main>
                <form action="">
                    <input type="date" value={this.start} onChange={this.startDate} />
                    <input type="date" value={this.end} onChange={this.endDate} />
                    <select name="cars" onChange={this.titleHandler}>
                        <option value="HDD">Hospital de día</option>
                        <option value="PT">Planta tardes</option>
                        <option value="PN">Planta noches</option>
                    </select>


                </form>
                <form>
                    <p>Select the nurse</p>
                    <select onChange={this.nurseHandler}>
                        {this.state.list.map(index => {
                            return <option value={index._id}>{index.name}</option>

                        })}
                    </select>
                </form>
            </div>
        )
    }

}


export default HomeAdmin