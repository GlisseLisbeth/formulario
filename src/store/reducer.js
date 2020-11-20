const initState = {
  list: []
}

const reducer = (state = initState, action) => {
  let newList = [];
  switch (action.type) {
    case 'ADD_CITA': 
      newList = state.list.concat(action.cita);
      return {
        ...state,
        list: newList
      }
    case 'REMOVE_CITA':
      newList = state.list.filter((result) => result.id !== action.citaId);
      return {
        ...state,
        list: newList
      }
    default:
      return state;
  }
  
}

export default reducer;