import * as actionTypes from '../constants/globalConstants';

export default function(state = [], action) {
  switch(action.type){
    case actionTypes.FETCH_USERS:
    {
      let newUsers = {users: action.payload};
      return {...state,...newUsers};
    }
    case actionTypes.DELETE_USER:
    { console.log(action.payload);
     let newArray = state.users.filter(eachUser => {
        return (eachUser.name !== action.payload)});
     console.log(newArray);
     let newUsers = {users:newArray};
     return {...state,...newUsers};
    }
    default:{
      return state;
    }
  }
}
