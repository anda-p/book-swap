export default function filterReducer(state = {}, action){
    switch (action.type){
        case 'TOGGLE_FILTER':
            const updatedFilters = state.all.map(filter => filter.name !== action.filterName ? filter : 
                {...filter, enabled: action.enable});
            
            return {
                ...state,
                all: updatedFilters
            }
      default:
        return state;
    }
  }