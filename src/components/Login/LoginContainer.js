import { compose } from 'redux';
import Login from './login';
import { connect } from 'react-redux';
import { auth } from '../../redux/auth-reducer';

const mapStateToProps = state => {
  return {};
};

export default compose(
  connect(
    mapStateToProps,
    { auth }
  )
)(Login);
