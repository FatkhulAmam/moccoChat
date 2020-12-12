const initialState = {
  isLoading: false,
  isError: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
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
    default: {
      return state;
    }
  }
};
