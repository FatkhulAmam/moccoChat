const initialState = {
  dataList: [],
  dataDetail: [],
  isLoading: false,
  isChat: false,
  isError: false,
  message: '',
  chatList: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // get list all chat
    case 'CHAT_LIST_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CHAT_LIST_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'There is an error at request data',
      };
    }
    case 'CHAT_LIST_FULFILLED': {
      return {
        ...state,
        chatList: true,
        isLoading: false,
        isError: false,
        dataList: action.payload.data,
      };
    }
    // get chat detail
    case 'GET_CHAT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_CHAT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'There is an error at request data',
      };
    }
    case 'GET_CHAT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataDetail: action.payload.data.results,
      };
    }
    //send chat
    case 'SEND_CHAT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SEND_CHAT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'cannot send chat',
      };
    }
    case 'SEND_CHAT_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isChat: true,
        message: 'send chat success',
      };
    }
    case 'DESTROY': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
