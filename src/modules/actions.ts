import * as app from './app/app.actions'
import * as auth from './auth/auth.actions'
import * as profile from './profile/profile.actions'

export default Object.assign({},
  { 
    app, 
    auth,
    profile,
 },
)
