export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return Object.assign({}, state, {
        friends: [
          ...state.friends,
          action.friend
        ]
      })

      break;
    case "REMOVE_FRIEND":

      var filterArr = state.friends.filter(friend => {
        return friend.id !== action.id

      })
      return Object.assign({}, state, {friends: filterArr})
      break;

    default:
      return state;
  }
}
