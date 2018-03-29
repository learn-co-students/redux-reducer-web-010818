export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      let newFriends = state.friends.filter(f => f.id !== action.id);
      return { ...state, friends: newFriends };
    default:
      return state;
  }
}
