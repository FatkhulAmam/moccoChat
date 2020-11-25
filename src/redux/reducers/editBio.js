const initialState = {
    isLoading: false,
    isError: false,
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type){
        case 'EDIT_BIO_PENDING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'EDIT_BIO_REJECTED': {
            return{
                ...state,
                isLoading: false,
                isError: true,
                message: 'cannot edit bio'
            }
        }
        case 'EDIT_BIO_FULFILLED':{
            return{
                ...state,
                isError: false,
                isLoading:false,
                message: 'edit bio success'
            }
        }
        default:{
            return state
        }
    }
}