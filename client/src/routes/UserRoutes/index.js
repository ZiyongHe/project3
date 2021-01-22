import React from 'react'
import { PostProvider } from '../../utils/PostContext'
import { Switch } from 'react-router-dom'
import ProtectedRoute from '../../components/ProtectedRoute'
import Dashboard from '../../pages/Dashboard'
import Profile from '../../pages/Profile'
import PostRoutes from '../PostRoutes'

function UserRoutes({ match }) {
  console.log(match.path)
  return (
    <PostProvider>
      <Switch>
        <ProtectedRoute
          exact
          path={`${match.path}/dashboard`}
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path={`${match.path}/profile`}
          component={Profile}
        />
        <ProtectedRoute path={`${match.path}/post`} component={PostRoutes} />
      </Switch>
    </PostProvider>
  )
}

export default UserRoutes
