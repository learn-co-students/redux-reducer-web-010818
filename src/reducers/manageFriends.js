export function manageFriends(state, action){
  switch(action.type){
    case "ADD_FRIEND":
      return {...state, friends:[...state.friends,action.friend] }
    case "REMOVE_FRIEND":
      const newArray=[]
      const makeArray=state.friends.forEach((friend)=>{
        if(friend.id !== action.id){
          newArray.push(friend)
        }
      })
      return {...state, friends:newArray}
    default:
      return state
  }
}
