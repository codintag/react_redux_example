import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { increaseByTwoCounter } from '../redux/actions/counterActions';
import { connect } from 'react-redux';

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                <button className=" w-50 btn btn-success" onClick={e => {
                    this.props.dispatch(increaseByTwoCounter())
                }}>
                    Ajoute 2
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(increaseByTwoCounter, dispatch) }
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);