import React, { Component } from 'react'
import logic from '../../logic'
import './index.css'
import {Link} from 'react-router-dom'


class Tasks extends Component {

    state ={
        name:'',
        tasks:[],
        taskId:'',
    }
    componentDidMount() {
        const apartId = localStorage.getItem('apartmentId')
        logic.listTasks(apartId)
        .then((tasks)=>{
            this.setState(prevState => ({tasks}))
})
    }
    nameTask =(e) => {
        const name = e.target.value
        this.setState({name})
    }
    checkInput = ()=>{

        if(this.state.name === '')
        {alert("task cannot be empty")}
       
    }

    addTask = (e) =>{

        e.preventDefault()

        const apartId = localStorage.getItem('apartmentId')
        Promise.resolve()

        .then(() => this.checkInput())
        .then(()=>{
            logic.addTasks(this.state.name, apartId)
            .then(()=>{
                this.state.name=''
                logic.listTasks(apartId)
                .then((tasks)=>{
                    this.setState(prevState => ({tasks}))
                })
            })
        })

    }
    deleteTask = id =>{
        const apartId = localStorage.getItem('apartmentId')

        Promise.resolve()
        .then(()=>{
           logic.deleteTask(id)
           .then(() => {
            logic.listTasks(apartId)
                .then((tasks) => {
                    this.setState(prevState => ({tasks}))
                })
           })

        })
    }



    render() {
        return (
            <div>
                <div className="general">
                    <section>
                        <h2 className="us">TASKS</h2>
                         <form onSubmit={this.addTask}>
                            <p className="words1"> Add task: </p>
                            <input autocomplete="off" className="formularior" type="text" value={this.state.name}onChange={this.nameTask} name="name" ></input>
                            <button type='submit' >ADD</button>
                         </form>
                         <ul className="text">
                         {this.state.tasks ? this.state.tasks.map(tasks => {
                                return(
                                <div key={tasks.name} className="listTasks"><li> {tasks.name}</li><button onClick={() => this.deleteTask(tasks._id)}>✘</button></div>)
                                
                            }) : undefined
                        }
                        </ul>
                        <Link to="/home">
                             <button className="backt">Back</button>
                        </Link>
                        
                    </section>
                </div>
            </div>
        )
    }
}
export default Tasks