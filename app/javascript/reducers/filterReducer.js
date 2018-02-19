export default function filterReducer(state = {}, action){
    switch (action.type){
        case 'TOGGLE_FILTER':
            const activeFilters = action.enable? [...state.active, action.filterName] : 
                            state.active.filter((filterName)=> filterName !== action.filterName);
            return {
                ...state,
                active: activeFilters
            }
      default:
        return state;
    }
  }