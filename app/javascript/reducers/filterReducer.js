export default function filterReducer(state = {}, action){
    switch (action.type){
        case 'TOGGLE_FILTER':
            let { active } = state;
            if (action.status && !state.active.indexOf(action.name)) {
                return {
                    // remove from filters
                }
            }
            return state;
            break;
      default:
        return state;
    }
  }