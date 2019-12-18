import React,{createContext,useContext, useReducer} from "react";
import "@/pages/layout/css/views.css";
import CyqBtn from "./btnCom.js";
import { LayoutContext } from '@/pages/layout';

// 组件列表
function ViewsComList() {
    const {state}= useContext(LayoutContext);
    return(
        <ul>
            {state.viewsComList.map((item,index) =>
               <li key={index}>
                    <SingleCom item={Object.assign({index:index},item)}/>
               </li>
            )}
        </ul>
    )
}
//单个组件选择
function SingleCom(props) {
    console.log(props)
    return(
        <div>
            {(() => {
                switch (props.item.type) {
                case 'CyqBtn':
                    return <CyqBtn item={props.item}/>
                case 1:
                    return '淘宝'
                case 2:
                    return '美团'
                case 3:
                    return '爱奇艺'
                case 4:
                    return '腾讯'
                default:
                    return null
                }
            }
            )()}
        </div>
    )
}
//整个页面
export const Views = ()=> {
    return (
        <div className="views">
            <div className="views-box">
                    <ViewsComList/>
            </div>
        </div>
    )
}