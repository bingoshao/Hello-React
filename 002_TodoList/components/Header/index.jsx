import React, {Component} from 'react';
import {nanoid} from 'nanoid'
import "./index.css"

export default class Header extends Component {
    handleKeyUp = (event) => {
        //结构赋值获取keyCode,target
        const {keyCode,target} = event
        //判断是否是回车
        if(keyCode===13){
            //添加的todo名字不能为空
            if(target.value.trim() === ""){
                alert("输入不能为空")
                return
            }
            //准备好一个todo对象
            const todoObj = {
                id:nanoid(),
                name:target.value,
                done:false
            }
            //将todoObj传递给App
            this.props.addTodo(todoObj)
            //清空Input
            target.value = ''
        }
    }
    render() {
        return (
            <div className="header">
                <input type="text" placeholder="请输入你的任务名称,按回车键确认" onKeyUp={this.handleKeyUp}/>
            </div>
        );
    }
}
