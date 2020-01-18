
import config from "@/api/config";
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
            //删除节点
        case 'doDeleteNode':
            state.content.child = state.content.child.filter((item,index)=>{
                return action.id!==item.id;
            })
            console.log(state)
            return {...state}
        case 'setViewsSettingInfo':
            Object.keys(action.data).map((key,index)=>{
                if(key==='link'||key==='minlink') {
                    state[key] = config.linkApi + '/home/' + state.projectId
                    return false;
                }
                state[key]=action.data[key]
            })
            return {...state}
            //设置节点信息
        case 'changeNodeInfo':
            console.log(action)
            state.content.child.map((item)=>{
                if(action.nodeObj.id===item.id) {
                    Object.keys(action.nodeObj).map((key,index)=>{
                        if(key==='props') {
                            Object.assign(item[key],action.nodeObj[key]);
                            console.log(item[key])
                            return false;
                        }
                        item[key]=action.nodeObj[key]
                    })
                } 
            })
            console.log(state)
            return {...state}
        default:
            return state;
    }
}
