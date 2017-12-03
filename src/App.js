/**
 * Copyright 2017-present, Company Name, Inc
 * 
 * This source code is licensed under the GNU GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 */

import './App.css'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import routes from './routes'
import createStore from './store'

const { store, browserHistory } = createStore()

class App extends Component {
  render = () => (
    <Provider store={store}>
      <ConnectedRouter history={browserHistory}>
        {routes}
      </ConnectedRouter>
    </Provider>
  )
}

export default App