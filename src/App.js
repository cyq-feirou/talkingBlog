import React,  {  useEffect } from 'react';
import  { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/home/home.js";
import LoginPage from "./pages/login/login.js";
import RegisterPage from "./pages/login/register.js";
import RegisterSuccessPage from "./pages/success/registerSuccess.js";

function AppPage() {
    //当传空数组[]时，就是当组件将被销毁时才进行解绑，这也就实现了componentWillUnmount的生命周期函数
    useEffect(()=>{
        //异步，每次加载或者更新都会执行
        console.log(new Date().getTime());
    },[])
    return (
        <div>
            <Router>
                <Route exact path="/loginPage" component={LoginPage}/>
                <Route exact path="/registerPage" component={RegisterPage}/>
                <Route exact path="/registerSuccess" component={RegisterSuccessPage}/>
                <Route path="/homePage/:projectId" exact component={HomePage}/>
            </Router>
        </div>
    )
}
export default AppPage;