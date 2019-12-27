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
            state.viewsComList.push({_id:11,comType:action.comType,text:'我是按钮',class:'default'}) ;
            return {...state}
        //显示组件树
        case 'showComTree':
            return {...state,isShowComTree:action.isShowComTree}
        case 'setComItem':
            return {...state,comType:action.value}
        case 'setContentItem':
            return {...state,contentType:action.value}
        case 'setDecoration':
            return {...state,decorationType:action.value}
        
        case 'setNowComId':
            console.log(action.value)
            return {...state,nowIndex:action.value}
        case 'changeDecoration':
            state.viewsComList[state.nowIndex].decoration.text = action.value;
                return {...state}
        default:
            return state;
    }
}
