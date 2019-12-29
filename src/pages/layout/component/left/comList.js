import React,{ useState, useContext,useEffect} from "react";
import { LayoutContext } from '@/pages/layout';
import BanCom from '@/components/com.js';
import iconBtn from '@/images/icon/iconBtn.png';

function  ComList() {
    const {state,dispatch}= useContext(LayoutContext);
    let comList = [{
        _id:123,
        comType:'BanBtn',
        text:'按钮',
        comIcon:iconBtn,
    },{
        _id:345,
        comType:'BanText',
        text:'文本',
        comIcon:'',
    },{
        _id:456,
        comType:'BanPicture',
        text:'图片',
        comIcon:'',
    }]
    return (
        <div className="comList">
            <ul className="comList-list" style={{'padding':'10px'}}>
                {
                    comList.map((item,index)=> 
                        <li style={{'float':'left','cursor':'pointer'}} onClick={()=>dispatch({type:'addBanCom',comType:item.comType,text:item.text})} key={index}>
                            <BanCom comObj={item}/>
                        </li>
                )}    
                {/* <li onClick={()=>dispatch({type:'text'})}>添加文本</li> */}
            </ul>
        </div>
    )
}
export default ComList;