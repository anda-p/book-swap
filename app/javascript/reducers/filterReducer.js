export function toggleFilter(state, action) {
    const updatedFilters = state.all.map(filter => filter.name !== action.filterName ? filter : 
        {...filter, enabled: action.enable});
    
    return {
        ...state,
        all: updatedFilters
    }
}

export default function filterReducer(state = {}, action){
    switch (action.type){
        case 'TOGGLE_FILTER':
            return toggleFilter(state, action)
      default:
        return state;
    }
  }