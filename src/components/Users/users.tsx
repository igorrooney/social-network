/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// Connect
import { useUsersConnect } from 'modules/users/users.connect'
import { useAuthConnect } from 'modules/auth/auth.connect'
// Components
import Pagination from 'utils/Pagination'
import User from './user'
import Spinner from 'components/Spinner'
import Search from 'components/Search'


const Users: FC = () => {
  const {
    // Selectors
    users,
    currentPage,
    pageSize,
    isFetching,
    // Actions
    requestUsers,
  } = useUsersConnect()
  const { isAuth } = useAuthConnect()  
  const history = useHistory()

  useEffect(() => {
    requestUsers(currentPage, pageSize)
  }, [requestUsers, currentPage, pageSize])

  useEffect(() => {
    if (!isAuth) {
      return history.push('/login')
    }
  }, [isAuth, history])

  return (
    <div className="container">
      <Pagination />
      <Search />
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          {isFetching ? <Spinner /> : 
            users.map(user => (
              <User 
                key={user.id} 
                user={user} 
              />
          ))}
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  )
}

export default Users
