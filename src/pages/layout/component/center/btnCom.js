import React ,{createContext,useContext, useReducer}from "react";
import { LayoutContext } from '@/pages/layout';

function CyqBtn(props) {
    console.log(props,'ddddd')
    const {state,dispatch}= useContext(LayoutContext);
    console.log(state)
    return (
        <button className={state.nowIndex!==''&&props.item.id===state.viewsComList[state.nowIndex].id?"selecActive":null} onClick={()=>dispatch({type:'setNowComId',value:props.item.index})}>{props.item.decoration.text}</button>
    )
}
export default CyqBtn;