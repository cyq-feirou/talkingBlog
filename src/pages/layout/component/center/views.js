import React,{createContext,useContext, useReducer} from "react";
import "@/pages/layout/css/views.css";
import BanBtn from "@/components/btn";
import BanText from "@/components/text";
import BanPicture from "@/components/picture";

import { LayoutContext } from '@/pages/layout';

//单个组件选择
function SingleCom(props) {
    console.log(props)
    return(
        <div>
            {(() => {
                switch (props.item.comType) {
                case 'BanBtn':
                    return <BanBtn comObj={props.item}/>
                case 'BanText':
                    return <BanText comObj={props.item}/>
                case 'BanPicture':
                    return <BanPicture comObj={props.item}/>
                default:
                    return ''
                }
            }
            )()}
        </div>
    )
}
//整个页面
export const Views = ()=> {
    const {state}= useContext(LayoutContext);
    return (
        <div className="root">
            <div className="root-box">
                {state.viewsComList.map((item,index) =>
                    <div key={index}>
                        <SingleCom item={item}/>
                    </div>
                )}
            </div>
        </div>
    )
}