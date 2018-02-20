export default function bookReducer(state = [], action){
  switch (action.type){
    case 'TOGGLE_FILTER':
      return state.map(book => book.tags.includes(action.filterName) ? 
        {...book, displayed: action.enable} : book);
    default:
      return state;
  }
}