import React, { FC } from 'react';

import Friend from './friend';
import classes from './friends.module.scss';
import { FriendType } from '../../types/types';


type PropTypes = {
  friends: Array<FriendType>
}

const Friends: FC<PropTypes> = ({friends}) => {
  return (
    <ul className={classes.friends}>
      {friends.map((friend) => <Friend friend={friend} key={friend.id}/>)}
    </ul>
  );
}
export default Friends;