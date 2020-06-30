import React, { FC } from 'react';
import {NavLink} from 'react-router-dom';

import classes from './friend.module.scss';
import { FriendType } from 'types/types';

type PropsType = {
  friend: FriendType
}


const Friend: FC<PropsType> = ({ friend }) => {
  let status = [classes.onlineDot];

  if (!friend.online) {
    status = [
      ...status,
      classes.offlineDot
    ];
  }

  return (
    <li>
      <NavLink to={"/user/" + friend.id}>
        <img src={friend.photo} alt=""/>
        <span className={status.join(" ")}></span>
      </NavLink>
    </li>
  );
}

export default Friend