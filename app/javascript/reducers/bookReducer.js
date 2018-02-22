export default function bookReducer(state = [], action){
  switch (action.type){
    case 'TOGGLE_FILTER':
    const result = state.map(book => {
      if (book.tags.includes(action.filterName)) {
        if (!action.enable) {
          if (book.tags.length === 1){
            return {...book, displayed: false}
          } else {
            return book;
          }
        } else {
          return {...book, displayed: true}
        }
      } else {
        return book;
      }});
      
      return result;
    default:
      return state;
  }
}