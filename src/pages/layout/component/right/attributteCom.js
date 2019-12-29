import React,{ useState, useContext, useEffect} from "react";
import { LayoutContext } from '@/pages/layout';
import "./right.scss";
import { Input, Select } from "antd";
const { Option } = Select;
const AttributteCom = (props)=> {
    const {state,dispatch}= useContext(LayoutContext);
    const [nowNode,setNowNode] = useState({});
    useEffect(()=>{
        console.log(state.viewsComList)
        state.viewsComList.map((item,index)=>{
            if(item.active) {
                setNowNode(item);
            }
        })
        console.log(nowNode,'nowNode')
    })
    const handleChange = (obj)=> {
        dispatch({type:'changeDecoration',nodeObj:{_id:nowNode._id,attr:{[obj.type]:obj.value}}})
    }
    return (
        <div className="attr">
            <div className="attr-setting basicInfo">
                <h5>基础信息</h5>
                <div className={'attr-setting-item'}>
                    <span className="label">唯一id</span>
                    <Input addonAfter="复制" value={nowNode._id} onChange={(e)=>handleChange({type:'_id',value:e.target.value})}/>
                </div>
                <div className={'attr-setting-item'}>
                    <span className="label">名称</span>
                    <Input value={nowNode.comName} onChange={(e)=>handleChange({type:'comName',value:e.target.value})}/>
                </div>
            </div>
            <div className={'attr-setting attrSetting'}>
                <h5>属性设置</h5>
                <div className={'attr-setting-item'}>
                    <span className="label">按钮文字</span>
                    <Input value={nowNode.text} onChange={(e)=>handleChange({type:'text',value:e.target.value})}/>
                </div>
                <div className={'attr-setting-item'}>
                    <span style={{ width: '70px'}} >type</span>
                    <Select value={nowNode.class} style={{ width: 120 }} onChange={(e)=>handleChange({type:'className',value:e.target.value})}>
                        <Option value="none">none</Option>
                        <Option value="default">default</Option>
                        <Option value="danger">danger</Option>
                        <Option value="primary">primary</Option>
                    </Select>
                </div>
            </div>
        </div>
    )
}
export default AttributteCom;