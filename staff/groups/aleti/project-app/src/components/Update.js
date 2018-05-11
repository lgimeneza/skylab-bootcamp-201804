import React, { Component } from 'react';
import logic from '../logic/userLogic'
import swal from 'sweetalert2'
import InputUser from './InputUser';
import ButtonInput from './ButtonInput';

class Update extends Component {

    state = {
        user: {
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            bio: '',
            location: '',
            password: ''
        },
        submitted: false,
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });

    }

    componentDidMount = () => {
        logic.retrieveUser(localStorage.getItem('id'), localStorage.getItem("token"))
            .then(data => {
                if (data.status === 'OK') {
                    const { name, value } = data;
                    this.setState({
                        user: {
                            ...data.data,
                            [name]: value
                        }
                    })
                } else {
                    //throw Error("wrong token")
                }
            });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        swal({
            title: 'Submit your credentials to confirm',
            input: 'text',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            showLoaderOnConfirm: true,
            preConfirm: (pass) => {
                this.setState({ user: { password: pass } })
                let temp_body = { "username": localStorage.getItem('userName'), "password": pass }
                return logic.loginUser(temp_body)
                    .then(response => response)
                    .catch(error => { swal.showValidationError(`Request failed: ${error}`) })
            },
            allowOutsideClick: () => !swal.isLoading()
        }).then((result) => {
            if (result.value.status === 'OK') {
                logic.updateUser(this.state.user, localStorage.getItem('id'), localStorage.getItem('token'))
                .then(res => res)
                .catch(error => { swal.showValidationError(`Request failed: ${error}`) })
                console.log("paso por aqui")
                
            } else {
                //throw Error("wrong token or body")
                //console.log("wrong way")
            }
        })
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3" >
                <h3>Public Profile</h3>
                <form name="form" onSubmit={this.handleSubmit} >
                    <InputUser type='text' name='firstname' helpText='First Name is required' labelText='First Name'
                        value={user.firstname} submitted={submitted} handleChange={this.handleChange} />
                    <InputUser type='text' name='lastname' helpText='Last Name is required' labelText='Last Name'
                        value={user.lastname} submitted={submitted} handleChange={this.handleChange} />
                    <InputUser type='text' name='email' helpText='' labelText='Email'
                        value={user.email} submitted={submitted} handleChange={this.handleChange} />
                    <InputUser type='text' name='bio' helpText='' labelText='Short biography'
                        value={user.bio} submitted={submitted} handleChange={this.handleChange} />
                    <InputUser type='text' name='location' helpText='' labelText='Location'
                        value={user.location} submitted={submitted} handleChange={this.handleChange} />
                    <ButtonInput name='Update' destination='' nameLink='Go Home' condition={registering} />
                </form>
            </div>

        );
    }
}


export default Update