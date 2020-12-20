import React, { Component } from 'react';
import {connect} from 'react-redux' //reduxa bağlanmamı sağlayan nesne

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
            </div>
        );
    }
}

//Counter'ın proplarına state'ı bağlayacağız.
function mapStateToPraps(state){
return {counter:state.counterReducer}
}

export default connect(mapStateToPraps)(Counter)