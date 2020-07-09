import React, { useState, useRef, useEffect } from 'react'
import { useDebounce } from 'react-use'
// Connect
import { useUsersConnect } from 'modules/users/users.connect'

const Search = () => {
  const { 
    // Selectors
    currentPage,
    pageSize,
    // Actions
    requestUsers,
    setCurrentPage,
    setSearchTerm,
  } = useUsersConnect()
  const mountedRef = useRef(false)
  const [val, setVal] = useState('')

  const [,] = useDebounce(() => {  
    if (mountedRef.current) {
      setCurrentPage(1)
      requestUsers(currentPage, pageSize, val)
      setSearchTerm(val)
    }
    mountedRef.current = true
  }, 1000,
  [val])

  useEffect(() => {
    return () => {
      setSearchTerm('')
      setCurrentPage(1)
    }
  }, [setSearchTerm, setCurrentPage])

  return (
    <input 
      type="text"
      onChange={e => {
        setVal(e.target.value)
      }}
    />
  )
}

export default Search