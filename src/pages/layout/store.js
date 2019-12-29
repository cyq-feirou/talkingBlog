export const initialState = {
    nowIndex:'',
    comType: 'comList',
    contentType:'views',
    decorationType:'attribute',
    viewsComList: [],
    isShowComTree:true
};
export const myreducer = (state,action)=> {
    console.log(action)
    switch (action.type) {
        //添加组件
        case 'addBanCom':
            let randId = parseInt(Math.random() * 1000);
            state.viewsComList.push({
                _id:randId,
                comType:action.comType,
                active:false,
                text:action.text,
                comName:action.comType+randId,
                class:'default'
            }) ;
            return {...state}
        //显示组件树
        case 'showComTree':
            return {...state,isShowComTree:action.isShowComTree}
        //改变当前选中节点的active
        case 'changeNodeActive':
            console.log(action)
            state.viewsComList.map((item,index)=>{
                item.active = false;
                if(action._id===item._id) {
                    item.active = true
                } 
            })
            return {...state}
        //设置当前选中节点的属性
        case 'changeDecoration':
            console.log(action)
            state.viewsComList.map((node,nodeIndex)=>{
                if(action.nodeObj&&node._id===action.nodeObj._id) {
                    Object.keys(action.nodeObj.attr).map((item,index)=>{
                        node[item] = action.nodeObj.attr[item];
                    })
                }
            })
            return {...state}
        //切换右边属性的设置类型
        case 'setDecoration':
            return {...state,decorationType:action.value}
        case 'setComItem':
            return {...state,comType:action.value}
        case 'setContentItem':
            return {...state,contentType:action.value}
        
        
        case 'setNowComId':
            console.log(action.value)
            return {...state,nowIndex:action.value}
        default:
            return state;
    }
}
