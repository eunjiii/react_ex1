import React, {Component} from 'react'

class TodoInput extends Component{

    clickHandle = () => {
        console.log("Todo Input click handle")
        const input = this.input
        console.log(input.value)
        this.props.add(input.value)
        input.value=''
    }

    render(){
        return(
            <div>
                <small>TODO INPUT</small>
                <input type='text' ref={(ref)=>this.input=ref}/>
                <button onClick={this.clickHandle}>ADD</button>
            </div>
        )
    }
}
export default TodoInput