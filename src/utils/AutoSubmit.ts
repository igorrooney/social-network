import { FC, useEffect } from 'react'

const AutoSubmit: FC<AutoSubmitProps> = ({ values, submitForm }) => {
  useEffect(() => {
    submitForm()
  }, [values, submitForm])

  return null
}

interface AutoSubmitProps {
  values: any
  submitForm: () => void
}

export default AutoSubmit