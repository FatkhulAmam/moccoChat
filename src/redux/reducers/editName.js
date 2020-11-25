const initialState = {
    isLoading: false,
    isError: false,
    message: '',
    editName: false
}

export default (state = initialState, action) => {
    switch (action.type){
        case 'EDIT_NAME_PENDING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'EDIT_NAME_REJECTED': {
            return{
                ...state,
                isLoading: false,
                isError: true,
                message: 'cannot edit name'
            }
        }
        case 'EDIT_NAME_FULFILLED':{
            return{
                ...state,
                isError: false,
                isLoading:false,
                editName: true,
                message: 'edit name success'
            }
        }
        default:{
            return state
        }
    }
}