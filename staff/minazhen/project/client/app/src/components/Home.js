import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import World from './World'
import Country from './Country'
import logic from '../logic'


class Home extends Component {
    state = {
        username: "",
        otherUsername: "",
        otherUserId: "NO-ID",
        countries: [],
        state: ""
    }
    otherUsername = (e) => {
        const otherUsername = e.target.value

        this.setState({ otherUsername })

    }
    submit = (e) => {
        e.preventDefault()
        this.props.history.push(`/world/${this.state.otherUsername}`)
        // e.preventDefault()
        // logic.findUser(this.otherUsername)
        //     .then((otherUserId) => {
        //         this.setState({ otherUserId })
        //         this.props.history.push(`/world/${otherUsername}`)
        //     })
        //     .catch(error => {
        //         console.error("show -> "+ error.message)
        //         this.props.history.push(`/world`)
        //     })
    }

    componentWillMount() {
        if (this.state.otherUserId !== "NO-ID") { //comprobacion
            // return logic.world(this.state.otherUserId)
            //     .then((data) => {
            //         data.countries.forEach((v) => {
            //             countries.push(v.url)
            //         })
            //     })
        } else {
            if (logic.userId !== "NO-ID") {
                return logic.world(logic.userId)
                .then(({ countries }) => {
                    countries.forEach((v) => {
                        countries.push(v.url)
                    })
                })
            } else {
                this.props.history.push(`/login`)
            }
        }
    }

    render() {
        const { otherUsername } = this.state
        return (
        <div className="home">
            <form onSubmit={this.submit}>
                <input type="text" onChange={this.otherUsername} value={otherUsername} placeholder="Find a friend" autoComplete="off" />
                <button type="submit">Find a friend</button>
            </form>

            <Switch>
                <Route exact path = "/world/:username?" component={World}/>
                <Route exact path = "/:countryName/:username?" component={Country} />
            </Switch>
        </div>)
    }
}



// function Home(props) {


//     return (
//         <div className="home">
//             <h1>YOU ARE IN HOME</h1>
//             <World />
//         </div>

//     )
// }

export default withRouter(Home)