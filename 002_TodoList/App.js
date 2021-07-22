import React,{Component} from "react";//Component不属于解构赋值 因为react里Component也被暴露了  export Component {}
import './App.css'
import Header from "./components/Header";
import List from "./components/List";
import Item from "./components/Item";
import Footer from "./components/Footer";

//创建并暴露App
export default class App extends Component{
    //状态在哪里,操作状态的方法就在哪里



    state = {
        todos:[{
            id:"001",
            name:"吃饭",
            done:true
        },
        {
            id:"002",
            name:"睡觉",
            done:true
        },
        {
            id:"003",
            name:"打代码",
            done:false
        },
        {
            id:"004",
            name:"逛街",
            done:false
        },]

    }

    //addTodo用于添加一个todo,接受的参数是todo对象
    addTodo = (todoObj) => {
        //获取源todos
        const {todos} = this.state
        //追加一个todo
        const newTodos = [todoObj,...todos]

        this.setState({
            todos:newTodos
        })
    }
    deleteTodo = (todoId) => {
        console.log(todoId,'app')
        //获取源todos
        const {todos} = this.state
        //删除一个todo
        const newTodos = todos.filter(item => item.id!==todoId)

        this.setState({
            todos:newTodos
        })
    }

    //勾选
    updateTodo=(id,done)=> {
        //获取状态中的todos
        const {todos} = this.state

        //匹配处理数据
        const newTodos = todos.map(todo => {
            if(todo.id===id){
                return {...todo,done}
            }else {
                return todo
            }

        })

        this.setState({
            todos:newTodos
        })
    }
    render() {
        const {todos} = this.state

        return (
            <div className="app">
                <Header addTodo={this.addTodo}/>
                <List todos={todos} deleteTodo={this.deleteTodo} updateTodo={ this.updateTodo}/>
                <Footer/>
            </div>
        )
    }
}

