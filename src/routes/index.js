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

import CommunityLayout from '../layouts/CommunityLayout'
import MainLayout from '../layouts/MainLayout'
import login from './Login'
import home from './Home'
import about from './About'

const comunityRoutes = [
  about
]

const mainRoutes = [
  home
]

export default (
  <Switch>
    <Route {...login} />
    <Route path="/comunity" render={props => (
      <CommunityLayout {...props}>
      {comunityRoutes.map(r => <Route {...r} />)}
      </CommunityLayout>
    )}/>
    <Route path="/" render={props => (
      <MainLayout {...props}>
      {mainRoutes.map(r => <Route {...r} />)}
      </MainLayout>
    )}/>
  </Switch>
)