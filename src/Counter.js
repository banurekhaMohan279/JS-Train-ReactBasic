import {useState, useEffect, useReducer} from 'react';

export default function Counter(){
  const [counter, setCounter] = useState(1);
  const initialState = {users:[], error:null}
  const [initState, dispatch] = useReducer(getUsersReducer, initialState);

  /*Entity*/
  function fetchUsers(counter){
    return fetch(`https://randomuser.me/api?page=${counter}`)
      .then(res => res.json());
  }

  /*Action*/
  function getUsersActions(counter){
      fetchUsers(counter)
      .then(response =>{
        if(response.error){
          dispatch(getUsersFailure('Get users failure'));
        }
        else{
          dispatch(getUsersSuccess(response.results[0]));
      }
    })
  }
  function getUsersFailure(err){
    return {type:'GET_USERS_FAILURE', err};
  }
  function getUsersSuccess(response){
    return {type:'GET_USERS_SUCCESS', response};
  }

  /*Reducer*/
  function getUsersReducer (state = initialState, action){
    switch(action.type){
      case 'GET_USERS_SUCCESS':
        return {...state, users: [...state.users,action.response]};
      case 'GET_USERS_FAILURE':
        return {...state, error: action.error};
      default:
        return state;
    }
  }


  useEffect(()=>{
      getUsersActions(counter);
  },[counter])

  return(
    <div className = "counter">
      <h1> Counter </h1>
      <p onClick = {() => setCounter(prev => prev+1)} >{counter}</p>
      <ul>
      {
        initState.users.map(item=>{
          return(
            <li key = {item.cell.toString()}>
              <img src = {item.picture.thumbnail} alt ={item.name.first}/>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}
