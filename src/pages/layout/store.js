
export const initialState = {
    comType: 'comList',
    contentType:'views',
    decorationType:'attribute',
    viewsComList: [],
    isShowComTree: true
};
export const initialView = {
    viewsObj:{}
};
export const myreducer = (state,action)=> {
    console.log(action)
    switch (action.type) {
        //获取接口数据
        case 'setSortViewsInfo':
            state.viewsObj = action.data;
            return {...state}
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
            state.viewsComList.map((item)=>{
                item.active = false;
                if(action._id===item._id) {
                    item.active = true
                } 
                return false;
            })
            return {...state}
        //设置当前选中节点的属性
        case 'changeDecoration':
            console.log(action)
            state.viewsComList.map((node)=>{
                if(action.nodeObj&&node._id===action.nodeObj._id) {
                    Object.keys(action.nodeObj.attr).map((item)=>{
                        node[item] = action.nodeObj.attr[item];
                        return false;
                    })
                }
                return false;
            })
            return {...state}
        //切换右边属性的设置类型
        case 'setDecoration':
            return {...state,decorationType:action.value}
        //切换组件列表和组合组件
        case 'setComItem':
        //切换场景、组件详情、和页面设置
            return {...state,comType:action.value}
        case 'setContentItem':
            return {...state,contentType:action.value};
        default:
            return state;
    }
}
export const viewsReducer = (state,action)=> {
    switch (action.type) {
        //获取接口数据
        case 'setSortViewsInfo':
            console.log(state)

            console.log(action.data)
            state.viewsObj = action.data;
            return {...state}
        default:
            return state;
    }
}
