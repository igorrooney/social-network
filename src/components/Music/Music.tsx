import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// Connect
import { useAuthConnect } from 'modules/auth/auth.connect'

const Music = () => {
  const { isAuth } = useAuthConnect()  
  const history = useHistory()

  useEffect(() => {
    if (!isAuth) {
      return history.push('/login')
    }
  }, [isAuth, history])

  return <div>Music</div>
}

export default Music
