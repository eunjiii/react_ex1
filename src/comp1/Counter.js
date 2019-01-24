import React, {Component} from 'react'

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            amount: props.amount
        }
    }
    clinkHandle = () => {
        console.log("clicked..........." + this.props.amount)
        this.setState({
            count: this.state.count + this.state.amount
        })
    }
    render(){
        return(
            <div>
                <h3>{ this.state.count }</h3>
                <button onClick={ this.clinkHandle }>CLICK</button>
            </div>
        )
    }
}
export default Counter