import React, { Component } from 'react'
import Tasktodo from './Tasktodo'
import Taskdone from './Taskdone'


class Taskapp extends Component {
    constructor() {
        super()

        this.state = {
            text: '',
            id: 0,
            tasks: []
        }
    }

    addTask = (e) => {
        let text = e.target.value

        this.setState({
            text
        })
    }

    listTodos = () => {
        return this.state.tasks.filter(function (task) { return !task.done; });
    }

    submit = (e) => {
        e.preventDefault()

        let text = this.state.text
        console.log(text)
        let date = Date.now();
        this.state.id = date;
        this.setState(prevState => {
            return {
                text,
                tasks: [...prevState.tasks, { i: this.state.id, t: text, done: 0 }]
            }
        })
    }

    markTaskDone = (index) => {
        let tasks = this.state.tasks
        for (let n = 0; n < this.state.tasks.length; n++) {
            if (this.state.tasks[n].i === index) this.state.tasks[n].done++
        }
        this.setState({
            tasks
        })
    }
    clear = (e) => {
        e.preventDefault()

        this.setState({
            text =""
        })
    }

    render() {
        return <div className="form"><h1>TASK APP</h1>
            <form onSubmit={this.submit}>
                <input type="text" onChange={this.addTask} value={this.state.text} />
                <button type="submit">Add Task</button>
            </form>
            <form>
                <Tasktodo tasks={this.state.tasks} handler={this.markTaskDone} />

                <Taskdone tasks={this.state.tasks} handler={this.markTaskDone} />
            </form>
        </div>
    }
}

export default Taskapp