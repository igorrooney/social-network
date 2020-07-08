import * as app from './app/app.actions'
import * as auth from './auth/auth.actions'
import * as profile from './profile/profile.actions'
import * as dialogs from './dialogs/dialogs.actions'
import * as users from './users/users.actions'

export default Object.assign({},
  { 
    app, 
    auth,
    profile,
    dialogs,
    users,
 },
)
