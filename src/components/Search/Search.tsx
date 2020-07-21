import React, { useState, useRef, useEffect } from 'react'
import { useDebounce } from 'react-use'
import { Formik, Form, Field } from 'formik'
// Connect
import { useUsersConnect } from 'modules/users/users.connect'
// Components
import AutoSubmit from 'utils/AutoSubmit'

const Search = () => {
  const { 
    // Actions
    requestUsers,
    changeQuery,
    resetQuery,
  } = useUsersConnect()
  const mountedRef = useRef(false)
  const [val, setVal] = useState({})
  const [,] = useDebounce(() => {  
    if (mountedRef.current) {
      const nextQuery = {
        page: 1,
        ...val,
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
    <Formik
      initialValues={{ 
        term: '',
        friend: ''
      }}
      onSubmit={values => {setVal(values)}}
    >
      {({ handleChange, values, submitForm }) => (
        <Form>
          <Field 
            type="text" 
            name="term" 
            onChange={(e: any) => handleChange(e) }
          />
          <Field name="friend" as="select">
            <option value="">All</option>
            <option value="true">Followed</option>
            <option value="false">Unfollowed</option>
          </Field>
          <AutoSubmit values={values} submitForm={submitForm} />
        </Form>
      )}
    </Formik>
  )
}

export default Search
