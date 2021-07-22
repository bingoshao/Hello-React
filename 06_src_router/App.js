import React, {Component} from 'react';
import { Route,Redirect} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生 */}
                            {/*<a className="list-group-item" href="./about.html">About</a>*/}
                            {/*<a className="list-group-item active" href="./home.html">Home</a>*/}
                            
                            {/* NavLink */}
                            {/*<NavLink activeClassName="demo" className="list-group-item" to="/about">About</NavLink>*/}
                            {/*<NavLink activeClassName="demo" className="list-group-item" to="/home">Home</NavLink>*/}

                            {/* 封装的NavLink */}
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*注册路由*/}
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home} />
                                <Redirect to="/about" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
