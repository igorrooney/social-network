import { compose } from 'redux';
import Login from './login';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';

const mapStateToProps = state => {
  return { isAuth: state.auth.isAuth };
};

export default compose(
  connect(
    mapStateToProps,
    { login }
  )
)(Login);
