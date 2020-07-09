import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
// Types
import { DialogType } from 'types/types'
// Styles
import classes from './Dialogs.module.scss'

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

export default DialogItem