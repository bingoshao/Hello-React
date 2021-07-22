import React, {Component} from 'react';
import {Route,Redirect} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink';
import News from './News';
import Message from './Message';

export default class Home extends Component {

    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <ul className="nav nav-tabs">
                    <MyNavLink to="/home/news">News</MyNavLink>
                    <MyNavLink to="/home/message">Message</MyNavLink>
                </ul>
                <Route path="/home/news" component={News}/>
                <Route path="/home/message" component={Message}/>
                <Redirect to="/home/news"/>
            </div>
        );
    }
}
