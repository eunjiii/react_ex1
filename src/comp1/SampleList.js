import React, {Component} from 'react'

class SampleList extends Component{
    state = {
        arr: ["AAA","BBB","CCC","DDD"]
    }
    render (){
        const fragment =
            this.state.arr.map((value, index)=> <li key={index}>{value}</li>)
        return(
            <div>
                <h3>SAMPLE LIST</h3>
                <ul>
                    {fragment}
                </ul>
            </div>
        )
    }
}
export default SampleList