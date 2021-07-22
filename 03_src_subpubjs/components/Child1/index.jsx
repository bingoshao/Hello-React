import React, {Component} from 'react';
import PubSub from 'pubsub-js'

export default class Child1 extends Component {
    state = {
        msg:'Child1的msg'
    }
    toBro=()=> {
        PubSub.publish('PubSubmessag',this.state.msg)
    }

    render() {
        return (
            <div>
                Child1
                <button onClick={this.toBro}>向Child2传值</button>
            </div>
        );
    }
}
