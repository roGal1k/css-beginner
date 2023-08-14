import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux"
import { Provider } from 'react';
import { BrowserRouter } from 'react-router-dom';

const defaultState = {
  save:true,
}

const reducer =(state = defaultState, action)=>{
  switch(action.type)
  {
    case "SAVE":
      return {...state, save: action.save};
    case "CLOSE":
      return {...state, page: action.save};
    default: return state;
  }
}

const addProject = createStore(reducer)

ReactDOM.render(
  //<Provider addProject={addProject}>
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  //</Provider>,
  document.getElementById('root')
);