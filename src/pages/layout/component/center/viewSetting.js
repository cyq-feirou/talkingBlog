import React,{useState} from "react";
import { Button, Input } from 'antd';

function  Coms() {
const [viewsInfo] = useState({link:'baidu.com',minlink:'baidu.com',codeImg:''});
    return (
        <div className="viewSetting">
            <h5 className="viewSetting-title">发布地址</h5>
            <div className="viewSetting-codeImg">
                <img src={viewsInfo.codeImg}/>
            </div>
            <div className="viewSetting-link">
                <span>链接：</span><a herf={viewsInfo.link} className="viewSetting-link-a">{viewsInfo.link}</a><Button>拷贝</Button>
            </div>
            <div className="viewSetting-link">
                <span>短链：</span><a herf={viewsInfo.minlink} className="viewSetting-link-a">{viewsInfo.minlink}</a><Button>拷贝</Button>
            </div>
            <div className="viewSetting-link">
                <span>页面名称：</span>
                <Input value={viewsInfo.viewsName}/>
            </div>
            <div className="viewSetting-link">
                <span>页面key：</span>
                <Input value={viewsInfo.viewsKey}/>
            </div>
        </div>
    )
}
export default Coms;