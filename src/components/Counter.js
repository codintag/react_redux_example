import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-1">{this.props.counter}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { counter: state.counterReducer }
}


export default connect(mapStateToProps)(Counter);