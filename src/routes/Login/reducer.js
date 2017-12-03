/**
 * Copyright 2017-present, Company Name, Inc
 * 
 * This source code is licensed under the GNU GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 */

import { injectReducer } from '../../store'
import user from '../../api/user'

// ────────────────────────────────────────────────────────────────────────────────
// module name and default path name
// ────────────────────────────────────────────────────────────────────────────────
export const MODULE_NAME = 'login'

// ────────────────────────────────────────────────────────────────────────────────
// The action name starts with a Login
// ────────────────────────────────────────────────────────────────────────────────
const LoginNAME = 'LoginNAME'

// ────────────────────────────────────────────────────────────────────────────────
// Initial State
// ────────────────────────────────────────────────────────────────────────────────
const initialState = {}

// ────────────────────────────────────────────────────────────────────────────────
// Actions handles
// ────────────────────────────────────────────────────────────────────────────────
const ActionHandles = {
  [LoginNAME]: (state, action) => Object.assign({}, state)
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
    type: LoginNAME,
    data: value
  }),
  login: () => {
    return (dispatch) => {
      user.login(() =>{
        dispatch({
          type: LoginNAME,
          data: ''
        })
      })
    }
  }
}