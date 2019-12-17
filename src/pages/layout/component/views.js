import React,{createContext,useContext, useReducer} from "react";
import "../css/views.css";
import {initialState , myreducer } from '../store';

import CyqBtn from "./btnCom.js";

// export const viewsContext = createContext();

export const Views = ()=> {
    const [state, dispatch] = useReducer(myreducer, initialState);
    console.log(state)
    return (
        <div className="views">
            <div className="views-box">
                {state.viewsComList}
                {state.viewsComList[0]==='btnCom'?<CyqBtn/>:''}
                {/* <ViewsContext.provider>
                </ViewsContext.provider> */}
            </div>
        </div>
    )
}