import React from 'react';
import '@/style/common.css';
function BanCom(props) {
    console.log(props,'组件列表')
    return (
        <div className="ban-com">
            <img className="btn-com-img"></img>
            <span>{props.comObj.text}</span>
        </div>
    )
}
export default BanCom;