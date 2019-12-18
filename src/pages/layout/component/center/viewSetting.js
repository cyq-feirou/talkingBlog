import React,{useContext} from "react";
import { LayoutContext } from '@/pages/layout';

function  Coms() {
const {state,dispatch}= useContext(LayoutContext);
    return (
        <div>
            <div>我是{state.contentType}</div>
        </div>
    )
}
export default Coms;