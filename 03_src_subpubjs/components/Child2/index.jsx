import React, {Component} from 'react';
import PubSub from 'pubsub-js';

export default class Child2 extends Component {
    state = {
        msg:''
    }
    componentDidMount() {
        PubSub.subscribe('PubSubmessag',(topic,data)=>{
            console.log('Child2收到Child1发来的消息了-',topic,data)
            this.setState({
                msg:data
            })
        })
    }

    render() {
        const {msg} = this.state
        return (
            <div>
                Child2
                <div>{msg}</div>
            </div>
        );
    }
}
