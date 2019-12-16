import React from 'react';
import {Button} from 'antd';
import { Link } from "react-router-dom";
import { message } from 'antd';

import "./success.css"

function successPage(params) {
    const reactivate = ()=> {
        message.success('发送成功，亲到邮箱去激活哦!')
        return false;
    }
    return (
        <div className="successPage">
            <div>successPage</div>
            <div className="successPage-btn">
                <Button size="large" type="primary" onClick={reactivate} style={{marginRight:"20px"}}>重新激活</Button>
                <Link to="/loginPage"><Button size="large" type="primary">登录</Button></Link>
            </div>
        </div>
    )
    
}
export default successPage;
