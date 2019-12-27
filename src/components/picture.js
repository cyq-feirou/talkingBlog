import React from 'react';
import '@/style/common.css';
function BanPicture(props) {
    console.log(props,'BanPicture组件')
    const handleAction = (type)=> {
        console.log('onclick btn')
    }
    return (
        <div className="ban" onClick={handleAction}>
           我是图片
        </div>
    )
}
export default BanPicture;