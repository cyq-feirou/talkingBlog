import React,{ useState, useContext} from "react";
import { LayoutContext } from '@/pages/layout';
import { Input, Select } from "antd";
const { Option } = Select;
const AttributteCom = (props)=> {
    const {state,dispatch}= useContext(LayoutContext);
    let nowSelectItem = state.viewsComList[state.nowIndex]||{decoration:{}};
    const [inputValue,setInputValue] = useState(nowSelectItem.decoration.text)
    // state.viewsComList.map((item,index)=>{
    //      if(item.id===state.nowComSelectId) {
    //         nowSelectItem = item;
    //         return false;
    //      };
    // })
    const handleChange = (e)=> {
        console.log(e.target.value)
        setInputValue(e.target.value)
        dispatch({type:'changeDecoration',value:e.target.value})
    }
    const handleChangeType = (value)=> {
        console.log(`selected ${value}`);
      }
    console.log(nowSelectItem)
    return (
        <div>
            <div>
                <h5>基础信息</h5>
            </div>
            <div>
                <h5>属性设置</h5>
                <div>
                    <h6>按钮文字</h6>
                    <Input placeholder={nowSelectItem.decoration.text} value={inputValue} type="text" onChange={handleChange}/>
                </div>
                <div>
                    <span>type</span>
                    <Select defaultValue="default" style={{ width: 120 }} onChange={handleChangeType}>
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