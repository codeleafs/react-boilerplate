/**
 * Copyright 2017-present, Company Name, Inc
 * 
 * This source code is licensed under the GNU GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 */

import './Modal.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const modalRoot = document.createElement('div')
modalRoot.className = 'Modal'
document.body.appendChild(modalRoot)

class Modal extends Component {

  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  static propTypes = {

  }

  render = () => ReactDOM.createPortal(this.props.children, this.el)

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

}

export default Modal