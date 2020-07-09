import React, { FC } from 'react'
// Types
import { MessageType } from 'types/types'
//Styles
import classes from './Dialogs.module.scss'

const Message: React.FC<MessageType> = ({ message }): JSX.Element => {
  return <div className={classes.message}>{message}</div>
}

export default Message
