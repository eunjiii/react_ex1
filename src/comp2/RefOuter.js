import React, {Component} from 'react'
import RefInner from './RefInner'

class RefOuter extends Component {
    changeHandler = (e)=>{
        console.log("outer change click........")
        this.inner.setState({
            title:"Outer call inner component"
        })
    }
    render() {
        return (
            <div>
                <h2>바깥쪽 부모 컴포넌트</h2>
                <button onClick={this.changeHandler}>CHANGE</button>
                <RefInner ref={(ref)=>this.inner=ref}></RefInner>
            </div>
        )
    }
}
export default RefOuter