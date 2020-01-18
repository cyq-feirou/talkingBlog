import React,{useContext} from "react";
import { LayoutContext } from '@/pages/layout';
import { Collapse } from 'antd';
import "./left.scss";
const { Panel } = Collapse;

function  ComTree() {
    // const {state,dispatch}= useContext(LayoutContext);
    const {viewsInfo,viewsAction}= useContext(LayoutContext);
    const callback = (key)=> {
    }
    const changeNodeActive = (id)=> {
        viewsAction({type:'changeNodeActive',id:id})
    }
    const doDeleteNode = (id)=>{
        viewsAction({type:'doDeleteNode',id:id})
    }
    return (
        <div className={'comTree'}>
           <Collapse defaultActiveKey={'1'} onChange={callback}>
                <Panel header="root" key={'1'}>
                    {
                        viewsInfo.content.child?viewsInfo.content.child.map((item,index) =>
                                <div onClick={(e)=>changeNodeActive(item.id)} 
                                    key={index} 
                                    className={`comTree-node ${item.active?'activeNode':''}`}>
                                        {item.label}
                                    <div className="comTree-node-action">
                                        <img className="delete" onClick={(e)=>doDeleteNode(item.id)} src="../../../images/icon/delete.png"/>
                                    </div>
                                </div>
                    ):""}
                </Panel>
           </Collapse>
        </div>
    )
}
export default ComTree;