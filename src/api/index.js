/**
 * Copyright 2017-present, Company Name, Inc
 *
 * This source code is licensed under the GNU GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

import axios from 'axios'
import { GLOBAL_LOGOUT } from '../store/global'

export function initInterceptor(store) {
  axios.interceptors.response.use(
    res => res.data,
    ({ response: { data, status } }) => {
      switch (status) {
        case 307:
          store.dispatch({ type: GLOBAL_LOGOUT, data: null })
          window.location.assign('/login')
          break
        case 401:
          alert(data)
          break
        default:
          break
      }
      return Promise.reject(data)
    }
  )
}
