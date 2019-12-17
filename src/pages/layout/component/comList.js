import React,{ useState, useContext} from "react";
import { LayoutContext } from '@/pages/layout';

function  ComList() {
const {state,dispatch}= useContext(LayoutContext);
const [comListArr,setComListArr] = useState(["1",'2']);

    return (
        <div>
            <ul>
                <li onClick={()=>dispatch({type:'addBtn'})}>添加按钮</li>
                <li onClick={()=>dispatch({type:'text'})}>添加文本</li>
            </ul>
        </div>
    )
}
export default ComList;