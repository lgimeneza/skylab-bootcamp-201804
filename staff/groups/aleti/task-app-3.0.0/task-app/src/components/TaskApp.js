import React, { Component } from 'react'

class TaskApp extends Component {
<<<<<<< HEAD
  constructor() {
    super()

    this.state = {
      value: '',
      todos: [],
      dones: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const todo = this.state.value

    this.setState(prevState => {
      return {
        value: '',
        todos: [...prevState.todos, todo],
      }
    })
  }

  handleDeleted = (index) => {
    console.log(index);
    this.setState(prevState => {
      //console.log(prevState)
      return [prevState.dones.splice(index, 1)]

    })

  }

  handleDone = (index, done) => {
    this.setState(prevState => {
      return {

        asdf: [prevState.todos.splice(index, 1)],
        dones: [...prevState.dones, done]
      }
    })
  }


  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    return <div>
      <form>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" onClick={this.handleSubmit} value="add" />
      </form>
      <ul>
        {
          this.state.todos.map((todo, index) =>
            <li key={index}>{todo} <button value={todo} onClick={() => {
              this.handleDone(index, todo)
            }}>V</button> </li>
          )

        }
      </ul>
      <ul>
        {this.state.dones.map((done, index) => <li key={index}>{done}
          <button onClick={() => {
            this.handleDeleted(index)
          }} >X</button>
        </li>)}

      </ul>
    </div>

  }
=======
    constructor() {
        super()
        this.state = {
            value: '',
            todos: [],
            dones: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const todo = this.state.value
        this.setState(prevState => {
            return {
                value: '',
                todos: [...prevState.todos, todo],
            }
        })
    }

    handleDeleted = (index) => {
        console.log(index); // No es el indice de los todos, sino de los dones
        this.setState(prevState => {
            return [prevState.dones.splice(index, 1)]
        })
    }

    handleDone = (index, done) => { //  
        this.setState(prevState => {
            return {
                asdf: [prevState.todos.splice(index, 1)],
                dones: [...prevState.dones, done]
            }
        })
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    render() {
        return <div>
            <form>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" onClick={this.handleSubmit} value="add" />
            </form>
            <ul>
                {
                    this.state.todos.map((todo, index) =>
                        <li key={index}>{todo} <button value={todo} onClick={() => {
                            this.handleDone(index, todo)
                        }}>V</button> </li>
                    )
                }
            </ul>
            <ul>
                {this.state.dones.map((done, index) => <li key={index}>{done}
                    <button onClick={() => {
                        this.handleDeleted(index)
                    }} >X</button>
                </li>)}
            </ul>
        </div>
    }
>>>>>>> c2a8679179bcf19bf344e9bf5e189e609a601257
}

export default TaskApp