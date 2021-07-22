import React, {Component} from 'react';
import { Button } from 'antd'
import {WechatOutlined,PicLeftOutlined} from '@ant-design/icons'//图标
import 'antd/dist/antd.css'

export default class About extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <h3>我是About的内容</h3>
                <Button type="primary">Primary Button</Button>
                <WechatOutlined />
                <PicLeftOutlined />
            </div>
        );
    }
}
