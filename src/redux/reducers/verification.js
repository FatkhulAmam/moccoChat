const initialState = {
    isError: false,
    isCode: false,
    moccoCode: '',
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'VERIV_CODE': {
            return {
                ...state,
                moccoCode: action.payload,
                isError: false,
                isCode: true,
                message: 'code is verify'
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                isCode: false,
                message: 'LOGOUT Succefully'
            }
        }
        default:{
            return state
        }
    }
}
