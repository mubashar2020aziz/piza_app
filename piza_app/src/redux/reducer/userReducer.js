export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_REGISTER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_REGISTER_SUCCESS':
      return {
        loading: false,
        success: true,
      };
    case 'USER_REGISTER_ERROR':
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return { state };
  }
};

export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN_REQUEST':
      return {
        loading: true,
        ...state,
      };
    case 'USER_LOGIN_SUCCESS':
      return {
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    case 'USER_LOGIN_FAIL':
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getAllUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case 'GET_USER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_USER_SUCCESS':
      return {
        loading: false,
        users: action.payload,
      };
    case 'GET_USER-FAIL':
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
