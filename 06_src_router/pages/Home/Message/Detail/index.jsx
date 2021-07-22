import React, { Component } from 'react'
import qs from 'querystring'

const detailData = [
    {id:'1',content:'北京'},
    {id:'2',content:'上海'},
    {id:'3',content:'深圳'},
]
export default class Detail extends Component {
    render() {

        // 接收params参数
        // const {id} = this.props.match.params


        // 接收search参数
        // const search = this.props.location.search
        // const {id} = qs.parse(search.slice(1))


        // 接收state参数
        const {id} = this.props.location.state || {}

        console.log(id);

        const findResout = detailData.find(detailObj => detailObj.id===id) || {}
        
        return (
            <ul>
                <li>ID:{id}</li>
                <li>content:{findResout.content}</li>
            </ul>
        )
    }
}
