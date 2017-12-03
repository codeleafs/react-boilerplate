/**
 * Copyright 2017-present, Company Name, Inc
 * 
 * This source code is licensed under the GNU GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 */

import React from 'react'
import { Switch, Route } from 'react-router'

import Layout from '../Layout'
import login from './Login'
import home from './Home'
import about from './About'

const insetRoutes = [
  about,
  home
]

export default (
  <Switch>
    <Route {...login} />
    <Route render={props => (<Layout {...props}>{insetRoutes.map(r => <Route {...r} />)}</Layout>)} />
  </Switch>
)