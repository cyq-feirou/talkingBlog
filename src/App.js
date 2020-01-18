import React,  { useEffect } from 'react';
import  { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import HomePage from "./pages/home/home.js";
import './App.scss';
function AppPage() {
   
    //当传空数组[]时，就是当组件将被销毁时才进行解绑，这也就实现了componentWillUnmount的生命周期函数
    useEffect(()=>{
        //异步，每次加载或者更新都会执行
        console.log(new Date().getTime());
    },[])
    return (
<<<<<<< HEAD
        <div>
            <Router>
                <Route exact path="/loginPage" component={LoginPage}/>
                <Route exact path="/registerPage" component={RegisterPage}/>
                <Route exact path="/registerSuccess" component={RegisterSuccessPage}/>
                <Route path="/homePage/:projectId" exact component={HomePage}/>
            </Router>
=======
        <div className="banApp">
            <div className="banApp-wrapper">
                <Router>
                    <Route path="/home/:viewsId" exact component={HomePage}/>
                </Router>
            </div>
>>>>>>> 5c7f59bcb4f7e65cf8c187812807962bae8f9ccf
        </div>
    )
}
export default AppPage;