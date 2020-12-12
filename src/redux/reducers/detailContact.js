const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACT_DETAIL_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CONTACT_DETAIL_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'There is an error at request data',
      };
    }
    case 'CONTACT_DETAIL_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.results,
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
