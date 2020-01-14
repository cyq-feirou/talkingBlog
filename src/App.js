<<<<<<< HEAD
import React,  { useEffect } from 'react';
import  { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
=======
import React,  {  useEffect } from 'react';
import  { BrowserRouter as Router, Route } from "react-router-dom";
>>>>>>> 0d53dbad4c6a64918d2e8d714cb16b8f41272461
import HomePage from "./pages/home/home.js";
import './App.scss';
function AppPage() {
   
    //当传空数组[]时，就是当组件将被销毁时才进行解绑，这也就实现了componentWillUnmount的生命周期函数
    useEffect(()=>{
        //异步，每次加载或者更新都会执行
        console.log(new Date().getTime());
    },[])
    return (
        <div className="banApp">
            <div className="banApp-wrapper">
                <Router>
                    <Route path="/home/:viewsId" exact component={HomePage}/>
                </Router>
            </div>
        </div>
    )
}
export default AppPage;