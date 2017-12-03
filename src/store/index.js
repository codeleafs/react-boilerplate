/**
 * Copyright 2017-present, Company Name, Inc
 * 
 * This source code is licensed under the GNU GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerReducer, routerMiddleware, LOCATION_CHANGE } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import global, { GLOBAL_LOGOUT } from './global'
import { initInterceptor } from '../api'

const CACHE_NAME = '__INITIAL_STATE__'

const browserHistory = createBrowserHistory()

let reducers = {
  router: routerReducer,
  global
}

let composeEnhancers = compose
if (process.env.NODE_ENV === 'development') {
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
}

const cacheSession = ({ dispatch, getState }) => next => action => {
  if (action.type === LOCATION_CHANGE) {
    sessionStorage.setItem(CACHE_NAME, JSON.stringify(getState()))
  }
  if (action.type === GLOBAL_LOGOUT) {
    sessionStorage.removeItem(CACHE_NAME)
  }
  return next(action)
}

const middleWares = [
  cacheSession,
  thunk,
  routerMiddleware(browserHistory)
]

let initialState = {}
try {
  const stateString = sessionStorage.getItem(CACHE_NAME)
  stateString && (initialState = JSON.parse(stateString))
} catch (err) {
  sessionStorage.removeItem(CACHE_NAME)
}

/**
 * export store and history to sync store with react
 * 
 * @param {any} key 
 * @param {any} reducer 
 */
export default () => {
  const store = createStore(
    combineReducers({ ...reducers }),
    initialState,
    composeEnhancers(applyMiddleware(...middleWares))
  )

  initInterceptor(store)

  return { store, browserHistory }
}

/**
 * inject reducer when start program
 * 
 * @param {any} key 
 * @param {any} reducer 
 */
export const injectReducer = (key, reducer) => {
  Object.assign(reducers, { [key]: reducer })
}
