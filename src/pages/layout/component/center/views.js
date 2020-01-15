import React,{useContext} from "react";
import "./center.scss";
import api from "@/api/index.js";
import { message } from 'antd';

import { LayoutContext } from '@/pages/layout';

//单个组件选择
function SingleCom(props) {
    let item = props.item;
    let type = item.type.split("/")[1];
    return(
        <div className="singleCom">
            {(() => {
                switch (type) {
                case 'button':
                    return <button className="default-btn">{item.props.text}</button>
                case 'text':
                    return <span className="default-text">{item.props.text}</span>
                case 'img':
                    return <img src={item.props.src} className="default-img"/>
                default:
                    return ''
                }
            }
            )()}
        </div>
    )
}
//整个页面
export const Views = ()=> {
    const {viewsInfo,viewsAction}= useContext(LayoutContext);
    const changeNodeActive = (_id)=> {
        viewsAction({type:'changeNodeActive',_id:_id})
    }
    const handleViewsAction = async (type)=> {
        switch (type) {
            case 'save':
                let params = {
                    projectId:viewsInfo.projectId,
                    content:JSON.stringify(viewsInfo.content)
                }
            let data = await api.postJson("/views/saveViews",params);
            if(data.code===0&&data.state===1) {
                message.success('保存成功!')
            } else {
                message.warning(data.message);
            }
                break;
            default:
                break;
        }
    }
    return (
        <div className="root">
            <div className="root-box">
                {viewsInfo.content.child?viewsInfo.content.child.map((item,index) =>
                    <div 
                    key={index} 
                    className={item.active?'ban-active':null} 
                    onClick={(e)=>changeNodeActive(item._id)}>
                        <SingleCom item={item} />
                    </div>
                ):""}
            </div>
            <div className="root-action">
                <ul>
                    <li onClick={()=>handleViewsAction('pre')}>pre</li>
                    <li onClick={()=>handleViewsAction('next')}>next</li>
                    <li onClick={()=>handleViewsAction('save')}>save</li>
                    <li onClick={()=>handleViewsAction('review')}>review</li>
                </ul>
            </div>
        </div>
    )
}