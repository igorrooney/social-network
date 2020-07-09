import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// Connect
import { useAuthConnect } from 'modules/auth/auth.connect'
// Components
import Friend from './Friend'
// Styles
import classes from './friends.module.scss'

const Friends: FC = () => {
  const friends: any[] = []

  const { isAuth } = useAuthConnect()  
  const history = useHistory()

  useEffect(() => {
    if (!isAuth) {
      return history.push('/login')
    }
  }, [isAuth, history])

  return (
    <ul className={classes.friends}>
      {friends.map((friend) => <Friend friend={friend} key={friend.id}/>)}
    </ul>
  );
}
export default Friends