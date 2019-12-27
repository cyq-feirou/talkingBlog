import React from 'react';
import '@/style/common.css';
function BanText(props) {
    console.log(props,'BanText组件')
    const handleAction = (type)=> {
        console.log('onclick btn')
    }
    return (
        <div className="ban" onClick={handleAction}>
           我是文本
        </div>
    )
}
export default BanText;