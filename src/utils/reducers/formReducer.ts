let initialState = {
  isContactFormOpen: true,
};
const formReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "open": {
      return { ...state, isContactFormOpen: true };
    }
    case "close": {
      return { ...state, isContactFormOpen: false };
    }
    default: {
      return state;
    }
  }
};
export default formReducer;
