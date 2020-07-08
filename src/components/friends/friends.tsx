import React, { FC } from 'react'

import Friend from './Friend'
import classes from './friends.module.scss'
import { FriendType } from 'types/types'


type PropTypes = {
  friends: Array<FriendType>
}

const Friends: FC<PropTypes> = () => {
  const friends: any[] = []
  return (
    <ul className={classes.friends}>
      {friends.map((friend) => <Friend friend={friend} key={friend.id}/>)}
    </ul>
  );
}
export default Friends