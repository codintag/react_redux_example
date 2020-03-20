import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { decreaseCounter } from '../redux/actions/counterActions';
import { connect } from 'react-redux';

class DecreaseCounter extends Component {
    render() {
        return (
            <div className="float-none">
                <button className="w-50 btn btn-danger" onClick={e => {
                    this.props.dispatch(decreaseCounter())
                }}>
                    Enleve 1
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(decreaseCounter, dispatch) }
}

export default connect(mapDispatchToProps)(DecreaseCounter);