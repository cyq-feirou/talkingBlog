import React from 'react';
import '@/style/common.css';
function BanBtn(props) {
    console.log(props,'btn组件')
    const handleAction = (type)=> {
        console.log('onclick btn')
    }
    return (
        <div className="ban" onClick={handleAction}>
            <button className="ban-btn">{props.comObj.text}</button>
        </div>
    )
}
export default BanBtn;