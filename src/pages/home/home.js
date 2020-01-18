import React,{ useState , useEffect} from 'react';
import  { withRouter } from "react-router-dom";
import api from "@/api/index.js";
import './home.scss';
import 

function HomePage(props) {
    const { match, location, history } = props;
    const [viewsId,setViewsId] = useState(match.params.viewsId);
    const [viewsObj,setViewsObj] = useState({nodeTree:[]});
    useEffect(()=>{
        //异步，每次加载或者更新都会执行
        getViews();
    },[viewsId])
    const getViews = async ()=> {
        let data = await api.get("/views/getViewsInfo",{viewsId:viewsId});
        if(data.code===0&&data.state===1) {
            setViewsObj(data.data);
        }
    }
    return (
        <div className="views">
            {
                viewsObj.nodeTree.map((item,index)=>
                    <div key={index}>{item.text}</div>
                )
            }
        </div>
    )
    
}
export default withRouter(HomePage);