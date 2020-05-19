import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.scss'
import CreateMessageForm from './CreateMessageForm'
import { DialogType, MessageType } from 'types/types'
import { PropsType } from './DialogsContainer'

const DialogItem: FC<DialogType> = ({ name, id, photo }): JSX.Element => {
  return (
    <div className={classes.dialog}>
      <NavLink to={'/dialogs/' + id} className={classes.user}>
        <img src={String(photo)} alt="avatar" />
        <div className={classes.name}>{name}</div>
      </NavLink>
    </div>
  )
}

const Message: React.FC<MessageType> = ({ message }): JSX.Element => {
  return <div className={classes.message}>{message}</div>
}

const Dialogs: FC<PropsType> = ({ dialogsPage, addMessage }): JSX.Element => {
  const dialogItems = dialogsPage.dialogs.map(item => {
    return (
      <DialogItem
        key={item.id}
        name={item.name}
        id={item.id}
        photo={item.photo}
      />
    )
  })

  const messageItems = dialogsPage.messages.map(item => {
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
