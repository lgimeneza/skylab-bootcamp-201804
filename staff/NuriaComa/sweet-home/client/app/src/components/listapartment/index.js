import React, { Component } from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'
import './index.css'
import swal from 'sweetalert2'

class ListApartment extends Component {
   
    state = {
        apartmentInfo:[],
        apartmentId:''
    }
    
    componentDidMount(){
        Promise.resolve()
        .then(()=>{
            const apartmentId = localStorage.getItem('apartmentId')
            logic.listApartment(apartmentId).then(res => { 
                
                this.setState({
                    apartmentInfo: res
                })
                this.setState({
                    apartmentId: res.id
                })
            })
        })
    }
    deleteApartment = apartmentId =>{
        const apartId = localStorage.getItem('apartmentId')

        Promise.resolve()
        .then(()=>{
            swal({
                title: 'Are you sure?',
                text: "All users will be removed",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              })
              .then((result) => {
                if (result.value) {
                  swal(
                    'Deleted!',
                    'Your apartment has been deleted.',
                    'success'
                    )
                    logic.deleteApartment(apartId)
                    .then(this.props.history.push('/'))     
                    
                }
            })
            .then(localStorage.clear())     
                       
        })
    }
    
    
    render() {
        return (
            <div >
                <div>
                    <section>
                       
                        <h2 className="ap">APARTMENT</h2><button onClick={() => this.deleteApartment(this.state.apartmentId)}>DELETE</button>
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