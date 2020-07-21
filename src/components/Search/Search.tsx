import React, { useState, useRef, useEffect } from 'react'
import { useDebounce } from 'react-use'
// Connect
import { useUsersConnect } from 'modules/users/users.connect'

const Search = () => {
  const { 
    // Actions
    requestUsers,
    changeQuery,
    resetQuery,
  } = useUsersConnect()
  const mountedRef = useRef(false)
  const [val, setVal] = useState('')

  const [,] = useDebounce(() => {  
    if (mountedRef.current) {
      const nextQuery = {
        page: 1,
        term: val,
      }
      changeQuery(nextQuery)
      requestUsers()
    }
    mountedRef.current = true
  }, 1000,
  [val])

  useEffect(() => {
    return () => {
      resetQuery()
    }
  }, [resetQuery])

  return (
    <input 
      type="text"
      onChange={e => setVal(e.target.value)}
    />
  )
}

export default Search