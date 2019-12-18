export const initialState = {nowIndex:'',comType: 'comList',contentType:'views',decorationType:'attribute',viewsComList: []};
export const myreducer = (state,action)=> {
    console.log(action)
    switch (action.type) {
        case 'setComItem':
            return {...state,comType:action.value}
        case 'setContentItem':
            return {...state,contentType:action.value}
        case 'setDecoration':
            return {...state,decorationType:action.value}
        case 'addBtn':
            state.viewsComList.push({id:11,type:"CyqBtn",decoration:{text:'我是按钮'}}) ;
            return {...state}
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
