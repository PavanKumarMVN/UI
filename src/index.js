import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './login';
import './style.css'
import Registration from './registration';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer,applyMiddleware(thunk))
store.subscribe(()=>{
  console.log(store.getState())
})

root.render(
  <Provider store = {store}>
      <BrowserRouter>
          <Routes>
              <Route path='/' element = {<Login/>}/>
              <Route path = '/Registration' element = {<Registration/>}/>

              <Route path = "/home" element = {<App/>}>              
              </Route>
          </Routes>
      </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
