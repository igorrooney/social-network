import React from 'react';

import Friend from './friend';
import classes from './friends.module.scss';

const Friends = ({friends}) => {
  return (
    <ul className={classes.friends}>
      {friends.map((friend) => <Friend friend={friend} key={friend.id}/>)}
    </ul>
  );
}
export default Friends;