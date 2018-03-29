export function manageFriends(state, action) {

  switch (action.type) {

    case "ADD_FRIEND":
      return Object.assign({}, state, {
        friends: [
          ...state.friends,
          action.friend
        ]
      });

    case "REMOVE_FRIEND":
      const friendIndex = state.friends.findIndex(
        friend => friend.id === action.id);
      return Object.assign({}, state, {
        friends: [
          ...state.friends.slice(0, friendIndex),
          ...state.friends.slice(friendIndex + 1)
        ]
      });
    default:
      return state;
  }
}
