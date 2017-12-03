/**
 * Copyright 2017-present, Company Name, Inc
 * 
 * This source code is licensed under the GNU GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 */

import { injectReducer } from '../../store'

// ────────────────────────────────────────────────────────────────────────────────
// module name and default path name
// ────────────────────────────────────────────────────────────────────────────────
export const MODULE_NAME = 'home'

// ────────────────────────────────────────────────────────────────────────────────
// The action name starts with a Home
// ────────────────────────────────────────────────────────────────────────────────
const HomeNAME = 'HomeNAME'

// ────────────────────────────────────────────────────────────────────────────────
// Initial State
// ────────────────────────────────────────────────────────────────────────────────
const initialState = {}

// ────────────────────────────────────────────────────────────────────────────────
// Actions handles
// ────────────────────────────────────────────────────────────────────────────────
const ActionHandles = {
  [HomeNAME]: (state, action) => Object.assign({}, state)
}

// ────────────────────────────────────────────────────────────────────────────────
// Reducer
// ────────────────────────────────────────────────────────────────────────────────
injectReducer(MODULE_NAME, (state = initialState, action) => {
  const handler = ActionHandles[action.type]
  return handler ? handler(state, action) : state
})

// ────────────────────────────────────────────────────────────────────────────────
// The actions will map to component
// ────────────────────────────────────────────────────────────────────────────────

export const mapStateToProps = (state) => {
  return {}
}

export const mapActionsToProps = {
  FuncName: (value) => ({
    type: HomeNAME,
    data: value
  }),
  AsyncFuncName: () => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch({
          type: HomeNAME,
          data: ''
        })
      }, 50)
    }
  }
}