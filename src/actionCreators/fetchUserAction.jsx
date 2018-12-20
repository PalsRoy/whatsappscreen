import * as dataTypes from '../constants/users';
import * as actionTypes from '../constants/globalConstants';

export function fetchUsers(){
  return {
   type: actionTypes.FETCH_USERS,
   payload:dataTypes.USERS
  };
}

export function deleteUser(key){
  return {
    type: actionTypes.DELETE_USER,
    payload: key
  };
}
