import React,  { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"
import {Button, message, Input} from 'antd';
import api from "@/api/index.js";
import './login.css';
function RegisterPage() {
    const [email, setEmail ] = useState('');
    const [loginName, setLoginName ] = useState('');
    const [password, setPassword ] = useState('');
    const [secPassword, setSecPassword ] = useState('');
    // const [checkCode, setCheckCode ] = useState('');


    let history = useHistory();
    const toLogin = (value)=>{
        history.push('/loginPage')
    }
    const checkLogin = async ()=>{
        if(email==="") {
            message.warning('请输入邮箱!')
            return false;
        }
        if(loginName==="") {
            message.warning('请输入姓名!')
            return false;
        }
        if(password==="") {
            message.warning('请输入密码!')
            return false;
        }
        if(secPassword==="") {
            message.warning('请再次输入密码!')
            return false;
        }
        if(password!==secPassword) {
            message.warning('两次密码不一致!')
            return false;
        }
        let data = await api.post("/users/register",{email:email,loginName:loginName,password:password});
        if(data.code===0&&data.state===1) {
            history.push("/registerSuccess")
        } else if(data.code===1&&data.state===1) {
            message.warning('用户已存在!');
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
                    <a className="login-form-forgot" href="javascript:;" onClick={toLogin}>登录→</a>
                </div>
                <div className="login-box-loginName">
                    <Input size="large" placeholder="邮箱" value={email} type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="login-box-loginName">
                    <Input size="large" placeholder="姓名" value={loginName} type="text" onChange={(e)=>{setLoginName(e.target.value)}}/>
                </div>
                <div className="login-box-loginName">
                    <Input size="large" placeholder="密码" value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className="login-box-password">
                    <Input size="large" placeholder="确认密码" value={secPassword} type="password" onChange={(e)=>{setSecPassword(e.target.value)}}/>
                </div>
                <div className="login-box-btn">
                    <Button size="large" type="primary" className="login-box-btn" onClick={checkLogin}>注册</Button>
                </div>
            </div>
        </div>

    )
}
export default RegisterPage;