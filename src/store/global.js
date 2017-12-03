/**
 * Copyright 2017-present, Company Name, Inc
 * 
 * This source code is licensed under the GNU GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 */

// ────────────────────────────────────────────────────────────────────────────────
// The action name starts with a GLOBAL
// ────────────────────────────────────────────────────────────────────────────────
export const GLOBAL_LOADING = 'GLOBAL_LOADING'
export const GLOBAL_LOGIN = 'GLOBAL_LOGIN'
export const GLOBAL_LOGOUT = 'GLOBAL_LOGOUT'

// ────────────────────────────────────────────────────────────────────────────────
// Initial State
// ────────────────────────────────────────────────────────────────────────────────
const initialState = {
  loading: false
}

// ────────────────────────────────────────────────────────────────────────────────
// Actions handles
// ────────────────────────────────────────────────────────────────────────────────
const ActionHandles = {
  [GLOBAL_LOADING]: (state, action) => Object.assign({}, state, { loading: action.data }),
  [GLOBAL_LOGIN]: (state, action) => Object.assign({}, state, { authUser: action.data }),
  [GLOBAL_LOGOUT]: (state, action) => Object.assign({}, state, { authUser: null })
}

// ────────────────────────────────────────────────────────────────────────────────
// Reducer
// ────────────────────────────────────────────────────────────────────────────────
export default (state = initialState, action) => {
  const handler = ActionHandles[action.type]
  return handler ? handler(state, action) : state
}