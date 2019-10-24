import { addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = state => {
  return { state: state.dialogsPage, isAuth: state.auth.isAuth };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: message => dispatch(addMessageActionCreator(message))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withAuthRedirect
)(Dialogs);
