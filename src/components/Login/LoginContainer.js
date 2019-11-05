import { compose } from 'redux';
import Login from './login';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { getCaptcha } from '../../redux/selectors';

const mapStateToProps = state => {
  return { isAuth: state.auth.isAuth, captcha: getCaptcha(state) };
};

export default compose(
  connect(
    mapStateToProps,
    { login }
  )
)(Login);
