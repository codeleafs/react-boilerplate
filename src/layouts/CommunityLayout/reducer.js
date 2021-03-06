/**
 * Copyright 2017-present, wecash, Inc
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
export const MODULE_NAME = 'CommunityLayout'

// ────────────────────────────────────────────────────────────────────────────────
// The action name starts with a CommunityLayout
// ────────────────────────────────────────────────────────────────────────────────
const CommunityLayoutNAME = 'CommunityLayoutNAME'

// ────────────────────────────────────────────────────────────────────────────────
// Initial State
// ────────────────────────────────────────────────────────────────────────────────
const initialState = {}

// ────────────────────────────────────────────────────────────────────────────────
// Actions handles
// ────────────────────────────────────────────────────────────────────────────────
const ActionHandles = {
  [CommunityLayoutNAME]: (state, action) => Object.assign({}, state)
}

// ────────────────────────────────────────────────────────────────────────────────
// Reducer
// ────────────────────────────────────────────────────────────────────────────────
injectReducer(MODULE_NAME, initialState, ActionHandles)

// ────────────────────────────────────────────────────────────────────────────────
// The actions will map to component
// ────────────────────────────────────────────────────────────────────────────────

export const mapStateToProps = (state) => {
  return {}
}

export const mapActionsToProps = {
  FuncName: (value) => ({
    type: CommunityLayoutNAME,
    data: value
  }),
  AsyncFuncName: () => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch({
          type: CommunityLayoutNAME,
          data: ''
        })
      }, 50)
    }
  }
}