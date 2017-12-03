/**
 * Copyright 2017-present, Company Name, Inc
 *
 * This source code is licensed under the GNU GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

import './Form.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = props.children.reduce((pre, c) => {
      if (c.props && c.props.name) {
        return Object.assign(pre, {
          [c.props.name]: {
            value: '',
            errMsg: '',
            title: c.props.title
          }
        })
      }
      return pre
    }, {})
  }

  onChange = (name, value) => {
    this.setState(state => ({
      [name]: Object.assign({}, state[name], { value, errMsg: '' })
    }))
  }

  onSubmit = () => {
    const errFields = Object.keys(this.state).reduce((pre, name) => {
      const field = this.state[name]
      if (!field.value) {
        return Object.assign(pre || {}, {
          [name]: Object.assign({}, field, { errMsg: `请输入${field.title}` })
        })
      }
      return pre
    }, null)

    if (errFields) {
      this.setState(Object.assign({}, this.state, errFields))
      return
    }

    this.props.onSubmit(this.state)
  }

  onBlur = () => {}

  onFocus = name => {
    if (!this.state[name].errMsg) {
      return
    }
    this.setState({
      [name]: Object.assign({}, this.state[name], { errMsg: '' })
    })
  }

  attachEvent(children) {
    return React.Children.map(children, child => {
      switch (child.type) {
        case 'input':
          return React.cloneElement(child, {
            ...this.state[child.props.name],
            onChange: this.onChange,
            onBlur: this.onBlur
          })
        case 'checkbox':
          return React.cloneElement(child, {
            onClick: this.onSubmit
          })
        default:
          if (child.props && typeof child.props.children === 'object') {
            return React.cloneElement(
              child,
              null,
              this.attachEvent(child.props.children)
            )
          } else {
            return child
          }
      }
    })
  }

  render = () => (
    <div className="Form">{this.attachEvent(this.props.children)}</div>
  )
}

export default Form
