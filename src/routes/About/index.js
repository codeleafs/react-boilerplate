/**
 * Copyright 2017-present, Company Name, Inc
 * 
 * This source code is licensed under the GNU GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 */

import About from './About'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { MODULE_NAME, mapStateToProps, mapActionsToProps } from './reducer'

export default {
  key: MODULE_NAME,
  path: `/${MODULE_NAME}`,
  component: withRouter(connect(mapStateToProps, mapActionsToProps)(About))
}