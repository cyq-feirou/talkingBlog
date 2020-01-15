
export const initialState = {

    comType: 'comList',
    contentType:'views',
    decorationType:'attribute',
    viewsComList: [],
    isShowComTree: true
};
export const initialView = {
    projectId:'',//项目id
    viewsObj:{},//页面数据
    content:{},
    link:'',
    minlink:'',
    title:'',
    viewsKey:''
};
export const myreducer = (state,action)=> {
    console.log(action)
    switch (action.type) {
        
        //显示组件树
        case 'showComTree':
            return {...state,isShowComTree:action.isShowComTree}
        
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
        //保存页面projectId
        case 'setProjectId':
            state.projectId = action.projectId;
            return {...state};
        //获取接口数据
        case 'setSortViewsInfo':
            state.viewsObj = action.data;
            state.content = JSON.parse(action.data.content);
            return {...state}
        //页面添加节点
        case 'addBanCom':
            state.content.child.push(action.comObj);
            return {...state}
            //改变当前选中节点的active
        case 'changeNodeActive':
            state.content.child.map((item)=>{
                item.active = false;
                if(action.id===item.id) {
                    item.active = true
                } 
                return false;
            })
            return {...state}
        case 'setViewsSettingInfo':
            Object.keys(action.data).map((key,index)=>{
                state[key]=action.data[key]
            })
            return {...state}
        default:
            return state;
    }
}
