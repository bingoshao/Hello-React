import React, {Component} from 'react';
import "./index.css"

export default class Item extends Component {
    handleDelete = (id)=>{
        // console.log(id,'item')
        // this.props.deleteTodo(id)
        return () => {
            this.props.deleteTodo(id)
        }
    }
    //勾选或者取消勾选
    handleCheck = (id)=> {
        return (event)=> {
            const {target} = event
            //通知App更新
            this.props.updateTodo(id,target.checked)
        }
    }
    render() {
        const {name,done,id} = this.props
        return (
            <div className="item">
                {/*defaultChecked 只管第一次上来*/}
                <div>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
                    <span className="text">{name}</span>
                </div>
                <button onClick={this.handleDelete(id)}>删除</button>
            </div>
        );
    }
}
