import React,{Component} from "react";//Component不属于解构赋值 因为react里Component也被暴露了  export Component {}
import Hello from "./components/Hello/Hello";
import Welcome from "./components/Welcome/Welcome";

//创建并暴露App
export default class App extends Component{
    render() {
        return (
            <div>
                <Welcome></Welcome>
                <Hello></Hello>
            </div>
        )
    }
}

