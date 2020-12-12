const initialState = {
  isRegistry: false,
  isError: false,
  isLoading: false,
  token: '',
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MAKE_ACCOUNT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'MAKE_ACCOUNT_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: 'register denied',
      };
    }
    case 'MAKE_ACCOUNT_FULFILLED': {
      return {
        ...state,
        isRegistry: true,
        isError: false,
        isLoading: false,
        message: 'welcome mocco',
        token: action.payload.data.token,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isRegistry: false,
        token: '',
      };
    }
    default: {
      return state;
    }
  }
};
