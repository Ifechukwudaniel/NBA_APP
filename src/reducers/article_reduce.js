export default function (state={}, action) {
      switch (action.type) {
          case "GET_ARTICLE":
                 return{ ...state, posts:action.payload}
          default:
                return state
      }
}