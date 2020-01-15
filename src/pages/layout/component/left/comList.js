import React,{ useContext } from "react";
import { LayoutContext } from '@/pages/layout';
import BanCom from '@/components/com.js';
import iconBtn from '@/images/icon/iconBtn.png';

function  ComList() {
    const {viewsAction}= useContext(LayoutContext);
    let comList = [{
        type:'button',
        text:'按钮',
        label:'默认按钮',
        comIcon:iconBtn,
    },{
        type:'text',
        text:'文本',
        label:'默认文本',
        comIcon:'',
    },{
        type:'img',
        text:'图片',
        label:'默认图片',
        src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2138007670,4235597768&fm=26&gp=0.jpg',
        comIcon:'',
    }]
    const addBanCom = (item)=>{
        console.log(item)
        let randId = parseInt(Math.random() * 1000);
        let style = {
            "position":"absolute",
            "width":"100px",
            "height":"40px",
            "left":"0px",
            "top":"0px"
        };
        let comObj = {
            "id":item.type+randId,
            "type":"truck/"+item.type,
            "label":item.label+randId,
            "url":"",
            "visible":true,
            "style":style,
            "animate":[],
            "props":{
                "text":item.text,
                "type":"default",
                "click":[]
            },
            "path":"",
            "script":[],
            "stack":true,
            "childLimit":9999,
            "leaf":false,
            "events":[],
            "active":false
        }
        switch (item.type) {
            case 'button':
                
                break;
            case 'img':
                comObj.props.src = item.src;
                console.log(item.src)
                console.log(comObj.props.src)
                break;
            default:
                break;
        }
        viewsAction({type:'addBanCom',comObj:comObj});
    }
    return (
        <div className="comList">
            <ul className="comList-list" style={{'padding':'10px'}}>
                {
                    comList.map((item,index)=> 
                        <li style={{'float':'left','cursor':'pointer'}} onClick={()=>addBanCom(item)} key={index}>
                            <BanCom comObj={item}/>
                        </li>
                )}    
            </ul>
        </div>
    )
}
export default ComList;