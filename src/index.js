// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import rootReducer from './reducers'
// import App from './components/App'

import React from 'react'
import { render } from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import App from './components/App'

const initialState = []
const store = createStore(
 rootReducer,
 initialState,
 compose(
   applyMiddleware(thunk),
   window.devToolsExtension ? window.devToolsExtension() : f => f
 )
)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


