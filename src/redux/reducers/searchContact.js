const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_CONTACT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SEARCH_CONTACT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'There is an error at request data',
      };
    }
    case 'SEARCH_CONTACT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.result,
      };
    }
    default: {
      return state;
    }
  }
};
