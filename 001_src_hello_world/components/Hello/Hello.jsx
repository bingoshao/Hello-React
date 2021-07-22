import React,{Component} from "react";
import hello from './Hello.module.css'

export default class Hello extends Component {
    render() {
        return (
            <div className='hello'>
                <h2 className={hello.title}>九科-同步-苏科版-初中-物理-九年级-上-13版!!</h2>
            </div>
        )
    }

}