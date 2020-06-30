import { AppStateType } from '../../modules/redux-store'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { getFriendsBlock } from '../../modules/selectors'
import { FriendType } from '../../types/types'


type MapStatePropsType = {
  friendsBlock: Array<FriendType>
}

export type NavbarPropsType = MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return { 
    friendsBlock: getFriendsBlock(state)
  }
}

const NavbarContainer = connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps)(Navbar)

export default NavbarContainer
