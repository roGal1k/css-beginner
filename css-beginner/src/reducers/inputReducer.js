const initialState = {
    inputValue: ''
  };
  
  const inputReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_INPUT':
        return { ...state, inputValue: action.payload };
      default:
        return state;
    }
  };
  
  export default inputReducer;