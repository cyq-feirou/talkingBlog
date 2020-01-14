import React,{useContext} from "react";
import "./center.scss";
import BanBtn from "@/components/btn";
import BanText from "@/components/text";
import BanPicture from "@/components/picture";
import api from "@/api/index.js";
import { message } from 'antd';

import { LayoutContext } from '@/pages/layout';

//单个组件选择
function SingleCom(props) {
    console.log(props)
    return(
        <div>
            {(() => {
                switch (props.item.comType) {
                case 'BanBtn':
                    return <BanBtn comObj={props.item}/>
                case 'BanText':
                    return <BanText comObj={props.item}/>
                case 'BanPicture':
                    return <BanPicture comObj={props.item}/>
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
    const {state,dispatch}= useContext(LayoutContext);
    
    const changeNodeActive = (_id)=> {
        dispatch({type:'changeNodeActive',_id:_id})
    }
    const handleViewsAction = async (type)=> {
        switch (type) {
            case 'save':
                let params = {
                    projectId:222
                }
            let data = await api.postJson("/views/saveViews",params);
            if(data.code===0&&data.state===1) {
                message.success('保存成功!')
                dispatch({type:'setSortViewsInfo',data:data})
            } else {
                message.warning(data.message);
            }
                break;
            default:
                break;
        }
    }
    // const getShortViewsInfo = async ()=>{
    //     let data = await api.get("/views/getShortViewsInfo",{projectId:projectId}).then((data)=>{
    //         if(data.code===0&&data.state===1) {
    //             dispatch({type:'setSortViewsInfo',data:data.data});
    //         }
    //     });
        
    // }
    // useEffect(()=>{
    //     getShortViewsInfo();
    //    },[])
    return (
        <div className="root">
            <div className="root-box">
                {state.viewsComList.map((item,index) =>
                    <div key={index} className={item.active?'ban-active':null} onClick={(e)=>changeNodeActive(item._id)}>
                        <span>{item.active}</span>
                        <SingleCom item={item} />
                    </div>
                )}
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