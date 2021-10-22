const initialState = {
  data: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MAKE_DATA':
      return {
        ...state,
        data: action.payload,
      };

    case 'ON_LIKE':
      return {
        ...state,
        data: state.data.map(item => {
          if (item.id === action.payload) {
            item.liked = !item.liked
          }
          return item
        })
      };



    default:
      return state;
  }
} 

export default reducer;