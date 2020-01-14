import React,  { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"
import {Button, message, Input} from 'antd';
import api from "@/api/index.js";
import './login.css';
function LoginPage() {
    const [loginName, setLoginName ] = useState('admin');
    const [password, setPassword ] = useState('');
    // const [checkCode, setCheckCode ] = useState('');
    // const [actionType, setActionType ] = useState('login');


    let history = useHistory();
    const toRegister = (value)=>{
        history.push('/registerPage')
    }
    const checkLogin = async ()=>{
        if(loginName==="") {
            message.warning('用户名不能为空!')
            return false;
        }
        if(password==="") {
            message.warning('密码不能为空!')
            return false;
        }
        let data = await api.post("/users/checkLogin",{loginName:loginName,password:password});
        if(data.code===0&&data.state===1) {
            history.push("/homePage/index")
        } else if(data.code===1&&data.state===2) {
            message.warning('用户名不存在或者密码不正确!');
        }else{
            message.error(data.msg);
        }
    }
    useEffect(()=>{
        //异步，每次加载或者更新都会执行
        
        console.log(new Date().getTime());
    })
    return (
        <div className="login">
            <div className="login-box">
                <div className="login-box-regist">
                    <a className="login-form-forgot" href="javascript:;" onClick={toRegister}>注册→</a>
                </div>
                <div className="login-box-loginName">
                    <Input size="large" placeholder="请输入用户名" value={loginName} type="text" onChange={(e)=>{setLoginName(e.target.value)}}/>
                </div>
                <div className="login-box-password">
                    <Input size="large" placeholder="请输入登录密码" value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className="login-box-btn">
                    <Button size="large" type="primary" className="login-box-btn" onClick={checkLogin}>登录</Button>
                </div>
                <div className="login-box-btn">
                    <a className="login-form-forgot" href="">忘记密码？</a>
                </div>
            </div>
        </div>

    )
}
export default LoginPage;