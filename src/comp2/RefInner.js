import React, {Component} from 'react'

class RefInner extends Component{

    state = {
        title:'AAAAAAAAAAAA'
    }
    render(){
        return(
            <div>
                <h3>안쪽 컴포넌트</h3>
            <div>{this.state.title}</div>
            </div>
        )
    }
}
export default RefInner