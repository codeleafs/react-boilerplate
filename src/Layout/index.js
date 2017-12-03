/**
 * Copyright 2017-present, Company Name, Inc
 * 
 * This source code is licensed under the GNU GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 */

import Layout from './Layout'
import { connect } from 'react-redux'
import { mapStateToProps, mapActionsToProps } from './reducer'

export default connect(mapStateToProps, mapActionsToProps)(Layout)