import React, { useState, createContext, useReducer, useEffect } from 'react';
import { Layout, Menu, message } from 'antd';
import "./index.css"
import "./css/common.css";
import Coms from './component/left/coms.js';
import ComList from './component/left/comList.js';
import {Views} from "./component/center/views.js";
import ComDetails from "./component/center/comDetails.js";
import ViewSetting from "./component/center/viewSetting.js";
import AttributteCom from "./component/right/attributteCom.js";
import api from "@/api/index.js";
import  { withRouter } from "react-router-dom";

//组件树组件
import ComTree from "./component/left/comTree";

import {initialState , myreducer, initialView, viewsReducer } from './store';
const { Header, Content, Sider } = Layout;
export const LayoutContext = createContext();
function Layouts (props) {
    const { match, location, history } = props;
    const [state, dispatch] = useReducer(myreducer, initialState);
    const [viewsInfo, viewsAction] = useReducer(viewsReducer, initialView);
    const doSaveViews = ()=>{
        // let data = await api.post("/views/publishViews",{projectId:viewsInfo.projectId})
        // if(data.code===0&&data.state===1) {
        //     message.success('发布成功！')
        // }
    }
    const doPublish = async ()=>{
        let data = await api.post("/views/publishViews",{projectId:viewsInfo.projectId})
        if(data.code===0&&data.state===1) {
            message.success('发布成功！')
        }
    }
    let ContentMenuItem = null
    if (state.contentType==='views') {
        ContentMenuItem = <Views/>
    } else if(state.contentType==='comDetails') {
        ContentMenuItem = <ComDetails/>
    } else if(state.contentType==='viewSetting') {
        ContentMenuItem = <ViewSetting/>
    }
    //获取页面信息
    const getShortViewsInfo = async ()=>{
        let data = await api.get("/views/getShortViewsInfo",{projectId:viewsInfo.projectId})
        if(data.code===0&&data.state===1) {
            viewsAction({type:'setSortViewsInfo',data:data.data});
        } else {
            message.warning(data.message)
        }
    }
    //存储页面信息
    useEffect(()=>{
        viewsAction({type:'setProjectId',projectId:match.params.projectId});
        getShortViewsInfo();
       },[])
    return (
        <div className="layoutPage">
            <Layout className="layout" style={{ height: '100%'}}>
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px',flex:1 }}
                    >
                        <Menu.Item key="1">布局</Menu.Item>
                        <Menu.Item key="2">部件</Menu.Item>
                        <Menu.Item key="3">撤销</Menu.Item>
                        <Menu.Item key="4">恢复</Menu.Item>
                    </Menu>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1" onClick={doSaveViews}>保存</Menu.Item>
                        <Menu.Item key="2" onClick={doPublish}>发布</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px'}}>
                    <Layout>
                        <Sider width={300}>
                            <Layout style={{ padding:'0 0 20px 0' }}>
                                <Header style={{ padding: 0}}>
                                    <Menu
                                    mode="horizontal"
                                    defaultSelectedKeys={['comList']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%', borderRight: '1px solid #e8e8e8'}}
                                    >
                                        <Menu.Item key="comList" onClick={()=>dispatch({type:'setComItem',value:"comList"})}>组件列表</Menu.Item>
                                        <Menu.Item key="coms" onClick={()=>dispatch({type:"setComItem",value:"coms"})}>组合组件</Menu.Item>
                                    </Menu>
                                </Header>
                                <Content>
                                    <LayoutContext.Provider value={{ state, dispatch,viewsInfo, viewsAction }}>
                                        {state.comType==='comList' ? <ComList/> : <Coms />}
                                    </LayoutContext.Provider >
                                </Content>
                            </Layout>
                            <Layout>
                                <Header style={{ padding: 0}}>
                                    <Menu
                                    mode="horizontal"
                                    defaultSelectedKeys={['comTree']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%', borderRight: '1px solid #e8e8e8'}}
                                    >
                                        <Menu.Item key="comTree" onClick={()=>dispatch({type:'showComTree',value:true})}>组件树</Menu.Item>
                                        <Menu.Item key="pageModel">页面模板</Menu.Item>
                                    </Menu>
                                </Header>
                                <Content>
                                    <LayoutContext.Provider value={{ state, dispatch, viewsInfo, viewsAction }}>
                                        {state.isShowComTree ? <ComTree/> : '我是页面组件'}
                                    </LayoutContext.Provider >
                                </Content>
                            </Layout>
                        </Sider>
                        <Content>
                            <Menu
                            mode="horizontal"
                            defaultSelectedKeys={['views']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '48px', borderRight: 0 }}
                            >
                                <Menu.Item key="views" onClick={()=>dispatch({type:"setContentItem",value:"views"})}>场景</Menu.Item>
                                <Menu.Item key="comDetails" onClick={()=>dispatch({type:"setContentItem",value:"comDetails"})}>组件详情</Menu.Item>
                                <Menu.Item key="viewSetting" onClick={()=>dispatch({type:"setContentItem",value:"viewSetting"})}>页面设置</Menu.Item>
                            </Menu>
                            <LayoutContext.Provider value={{ state, dispatch, viewsInfo, viewsAction }}>
                                {ContentMenuItem}
                            </LayoutContext.Provider >
                        </Content>
                        <Sider width={300}>
                            <Layout style={{borderLeft:'1px solid #f5f5f5',background:'#fff'}}>
                                <Header style={{ padding: 0}}>
                                    <Menu
                                    mode="horizontal"
                                    defaultSelectedKeys={['attribute']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%'}}
                                    >
                                        <Menu.Item key="attribute" onClick={()=>dispatch({type:'setDecoration',value:"attribute"})}>属性</Menu.Item>
                                        <Menu.Item key="style" onClick={()=>dispatch({type:"setDecoration",value:"style"})}>样式</Menu.Item>
                                        <Menu.Item key="cartoon" onClick={()=>dispatch({type:"setDecoration",value:"cartoon"})}>动画</Menu.Item>
                                        <Menu.Item key="viewsSetting" onClick={()=>dispatch({type:"setDecoration",value:"viewsSetting"})}>页面设置</Menu.Item>
                                    </Menu>
                                </Header>
                                <Content>
                                    <LayoutContext.Provider value={{ state, dispatch, viewsInfo, viewsAction }}>
                                        <AttributteCom/>
                                    </LayoutContext.Provider >
                                </Content>
                            </Layout>
                        </Sider>
                    </Layout>
                    
                </Content>
            </Layout>,
        </div>
    )
    
}
export const LayoutPage = withRouter(Layouts) ;
