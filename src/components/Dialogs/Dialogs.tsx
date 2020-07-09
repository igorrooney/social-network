import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import classes from './Dialogs.module.scss'
import CreateMessageForm from './CreateMessageForm'
// Components
import DialogItem from './DialogItem'
import Message from './Message'
// Connect
import { useDialogsConnect } from 'modules/dialogs/dialogs.connect'
import { useAuthConnect } from 'modules/auth/auth.connect'

const Dialogs: FC = (): JSX.Element => {
  const {
    // Selectors
    dialogs,
    messages,
    // Actions
    addMessage,
  } = useDialogsConnect()
  const { isAuth } = useAuthConnect()  
  const history = useHistory()

  useEffect(() => {
    if (!isAuth) {
      return history.push('/login')
    }
  }, [isAuth, history])

  const dialogItems = dialogs.map(item => {
    return (
      <DialogItem
        key={item.id}
        name={item.name}
        id={item.id}
        photo={item.photo}
      />
    )
  })

  const messageItems = messages.map(item => {
    return <Message key={item.id} message={item.message} id={item.id} />
  })

  const addNewMessage = (formData: NewMessageFormType) => {
    addMessage(formData.message)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogItems}</div>
      <div className={classes.messages}>
        {messageItems}
        <CreateMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  )
}

export default Dialogs

export type NewMessageFormType = {
  message: string
} 
