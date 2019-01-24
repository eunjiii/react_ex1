import React, {Component} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

class TodoComponent extends Component{

    state = {
        todos:['AAA','BBB','CCC']
    }
    addTodo = (newTodo) => {
        console.log("add Todo ..........."+newTodo)
        console.log(this.state)
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    removeTodo = (idx) => {
        console.log("TodoComponent removeTodo..."+idx)
        this.state.todos.splice(idx,1)
        console.log(this.state.todos)

        this.setState({
            todos: this.state.todos
        })
    }
    render(){
        return(
            <div>
                <TodoInput add={this.addTodo}></TodoInput>
                <TodoList arr={this.state.todos} remove={this.removeTodo}></TodoList>
            </div>
        )
    }
}
export default TodoComponent