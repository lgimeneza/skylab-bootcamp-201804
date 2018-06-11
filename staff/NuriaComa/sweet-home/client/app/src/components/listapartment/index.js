import React, { Component } from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'
import './index.css'
import swal from 'sweetalert'

class ListApartment extends Component {
    state = {
        apartmentInfo:[]
    }
    componentDidMount(){
        Promise.resolve()
        .then(()=>{
            const apartmentId = localStorage.getItem('apartmentId')
            logic.listApartment(apartmentId).then(res => { 
                console.log('res',res)
                this.setState({
                    apartmentInfo: res
                })
            })
            console.log('apartmentInfo',this.state.apartmentInfo)
        })
    }
    
    
    render() {
        return (
            <div >
                <div>
                    <section>
                       
                        <h2 className="ap">APARTMENT</h2>
                        <ul className="text">
                            {this.state.apartmentInfo ? 
                                <div className="listApartment"><li><span className="info">Name:</span> {this.state.apartmentInfo.name}</li>
                                
                                <li><span className="info">Address:</span> {this.state.apartmentInfo.address}</li>
                                <li><span className="info">Phone:</span> {this.state.apartmentInfo.phone}</li></div>
                            : undefined
                            }
                        </ul>
                        <Link to="/home">
                             <button className="backb">Back</button>
                        </Link>
                       
                    </section>
                </div>
            </div>
        )
    }
}
export default ListApartment