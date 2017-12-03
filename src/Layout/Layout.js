/**
 * Copyright 2017-present, Company Name, Inc
 * 
 * This source code is licensed under the GNU GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 */

import './Layout.css'
import React, { Component } from 'react'

class Layout extends Component {
  static propTypes = {

  }
  render() {
    return (
      <div className="Layout">
      layout
      {this.props.children}
      </div>
    )
  }
}

export default Layout