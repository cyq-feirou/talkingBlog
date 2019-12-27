import React,{useContext} from "react";
import { LayoutContext } from '@/pages/layout';
import { Collapse } from 'antd';
const { Panel } = Collapse;

function  ComTree() {
    const {state,dispatch}= useContext(LayoutContext);
    const callback = (key)=> {
        console.log(key);
    }
    return (
        <div>
           <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="root" key="1">
                    {state.viewsComList}
                    {
                        state.viewsComList.map((item,index) =>
                        <Panel header="" key={index}>
                            <p>{item.comType}</p>
                        </Panel>
                    )}
                    <Panel header="" key="1">
                        <p></p>
                    </Panel>
                </Panel>
           </Collapse>
        </div>
    )
}
export default ComTree;