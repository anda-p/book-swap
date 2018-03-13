import { toggleFilter } from "../actions/filterActions";

export function toggleFilters(state, { filterName, enable }) {
  const result = state.map(book => {
    const bookHasTag = book.tags.includes(filterName);

    if (enable){
      return bookHasTag ? { ...book, displayed: true } : book;
    } else {
      return bookHasTag && book.tags.length === 1 ? { ...book, displayed: false } : book;
    }
  });

  return result;
}

export default function bookReducer(state = [], action){
  switch (action.type){
    case 'TOGGLE_FILTER':
      return toggleFilters(state, action);
    default:
      return state;
  }
}