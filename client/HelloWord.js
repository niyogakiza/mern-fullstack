import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class HelloWord extends Component {
    render() {
        return(
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}
export default hot(module)(HelloWord)
