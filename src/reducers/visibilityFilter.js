import { VisibilityFilters } from '../actions'

// 默认是 show_all
const visbiilityFilter = (state=VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter
    default:
      return state
  }
}

export default visbiilityFilter
