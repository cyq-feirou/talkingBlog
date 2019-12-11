import React,  { useState, useEffect, createContext,useContext,useRef } from 'react';
import  { Link } from "react-router-dom";
const LoginContext = createContext();
function User() {
    const userName = useContext(LoginContext);
    return (
        <h5>{userName}</h5>
    )
}
function LoginPage() {
    const [loginName, setLoginName ] = useState('admin');
    // const loginNameRef = useRef(null);
    // const getInput = ()=>{
    //     console.log(loginNameRef.current.value)
    //     loginNameRef.current.value ="cyq";
    //     console.log(loginNameRef.current.value)

    // }
    useEffect(()=>{
        //异步，每次加载或者更新都会执行
        console.log(new Date().getTime());
    })
    return (
        <div>
            <div>
                {/* <span>姓名：</span><input placeholder="请输入姓名" defaultValue={loginName}/> */}
                <span>姓名：</span><input placeholder="请输入姓名" value={loginName} type="text" onChange={(e)=>{setLoginName(e.target.value)}}/>
            </div>
            <div>
                <span>密码：</span><input placeholder="请输入登录密码" type="password"/>
            </div>
            {/* <button onClick={getInput}>登录</button> */}
            <button><Link to="/homePage/index">登录</Link></button>
            <LoginContext.Provider value={loginName}>
                <User/>
            </LoginContext.Provider>
        </div>
    )
}
export default LoginPage;