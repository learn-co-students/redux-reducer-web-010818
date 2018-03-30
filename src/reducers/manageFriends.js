export function manageFriends(state, action){

// should be able to add a person
// remove people we no longer Unlike
// should return to us a new state

  switch(action.type){
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
      break;

    case "REMOVE_FRIEND":
      let friends = [...state.friends]

      let friend = friends.find((friend)=>{return friend.id === action.id})
      let index = friends.indexOf(friend)

      friends.splice(index, 1)

      return {friends: friends}
      break;

    default:
      return state;
  }


}
