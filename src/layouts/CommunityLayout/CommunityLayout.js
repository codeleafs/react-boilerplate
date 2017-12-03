/**
 * Copyright 2017-present, wecash, Inc
 * 
 * This source code is licensed under the GNU GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 */

import './CommunityLayout.css'
import React, { Component } from 'react'

class CommunityLayout extends Component {
  static propTypes = {

  }
  render() {
    return (
      <div className="CommunityLayout">
        CommunityLayout
        {this.props.children}
      </div>
    )
  }
}

export default CommunityLayout