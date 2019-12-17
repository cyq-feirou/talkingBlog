export const initialState = {comType: 'comList',contentType:'views',viewsComList: []};
export const initialViewsState = {viewsComList: []};
export const myreducer = (state,action)=> {
    console.log(action)
    switch (action.type) {
        case 'setComItem':
            return {...state,comType:action.value}
        case 'setContentItem':
            return {...state,contentType:action.value}
        case 'addBtn':
            let viewsComList = state.viewsComList.push('btnCom');
            console.log({...state,viewsComList:viewsComList});
            return {...state,viewsComList:viewsComList}
        default:
            return state;
    }
}
export const comListReducer = (state,action) => {
    switch (action.type) {
        case 'addBtn':
            return state.viewsComList.push('btnCom')
        default:
            return state;
    }
}