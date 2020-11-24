const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    message: '',
    chatList : false
}
  
export default (state=initialState, action)=>{
    switch(action.type){
      case 'CHAT_LIST_PENDING' : {
        return {
          ...state,
          isLoading: true
        }
      }
      case 'CHAT_LIST_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          message: 'There is an error at request data'
        }
      }
      case 'CHAT_LIST_FULFILLED': {
        return {
          ...state,
          chatList: true,
          isLoading: false,
          isError: false,
          data: action.payload.data.results
        }
      }
      default : {
        return state
      }
    }
  }