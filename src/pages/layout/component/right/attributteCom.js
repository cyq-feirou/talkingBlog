import React,{ useState, useContext, useEffect} from "react";
import { LayoutContext } from '@/pages/layout';
import "./right.scss";
import { Input, Select } from "antd";
const { Option } = Select;
const AttributteCom = ()=> {
    const {state,dispatch,viewsInfo,viewsAction}= useContext(LayoutContext);
    const [nowNode,setNowNode] = useState({});
    useEffect(()=>{
        if(viewsInfo.content.child) {
            viewsInfo.content.child.map((item)=>{
                if(item.active) {
                    console.log(nowNode)
                    setNowNode(item);
                }
                return false;
            })
        }
    })
    const changeNodeInfo = (obj)=> {
        console.log(obj.value.type)
        viewsAction({type:'changeNodeInfo',nodeObj:{id:nowNode.id,[obj.type]:obj.value}})
    }
    return (
        <div className="attr">
            <div className="attr-setting basicInfo">
                <h5>基础信息</h5>
                <div className={'attr-setting-item'}>
                    <span className="label">唯一id</span>
                    <Input addonAfter="复制" value={nowNode.id} onChange={(e)=>changeNodeInfo({type:'id',value:e.target.value})}/>
                </div>
                <div className={'attr-setting-item'}>
                    <span className="label">名称</span>
                    <Input value={nowNode.label} onChange={(e)=>changeNodeInfo({type:'label',value:e.target.value})}/>
                </div>
            </div>
            <div className={'attr-setting attrSetting'}>
                <h5>属性设置</h5>
                <div className={'attr-setting-item'}>
                    <span className="label">按钮文字</span>
                    <Input value={nowNode.props?nowNode.props.text:""} onChange={(e)=>changeNodeInfo({type:'props',value:{text:e.target.value}})}/>
                </div>
                <div className={'attr-setting-item'}>
                    <span style={{ width: '70px'}} >type</span>
                    <Select value={nowNode.props?nowNode.props.type:""} style={{ width: 120 }} onChange={(e)=>changeNodeInfo({type:'props',value:{type:e}})}>
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