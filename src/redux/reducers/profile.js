const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    //edit avatar
    case 'EDIT_AVA_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'EDIT_AVA_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'cannot edit avatar',
      };
    }
    case 'EDIT_AVA_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: 'edit avatar success',
      };
    }
    // get my profile
    case 'GET_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'There is an error at request data',
      };
    }
    case 'GET_PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.results,
      };
    }
    // edit name
    case 'EDIT_NAME_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'EDIT_NAME_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'cannot edit name',
      };
    }
    case 'EDIT_NAME_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        editName: true,
        message: 'edit name success',
      };
    }
    // edit my bio
    case 'EDIT_BIO_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'EDIT_BIO_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'cannot edit bio',
      };
    }
    case 'DESTROY': {
      return initialState;
    }
    case 'EDIT_BIO_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: 'edit bio success',
      };
    }
    // add device token
    case 'DEVICE_TOKEN_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'DEVICE_TOKEN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'cannot edit avatar',
      };
    }
    case 'DEVICE_TOKEN_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: 'edit avatar success',
      };
    }
    // add socket id
    case 'SOCKET_ID_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SOCKET_ID_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'cannot add socket',
      };
    }
    case 'SOCKET_ID_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: 'add socket',
      };
    }
    default: {
      return state;
    }
  }
};
