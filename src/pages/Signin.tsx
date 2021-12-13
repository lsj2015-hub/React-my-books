import { Redirect } from 'react-router';
import SigninContainer from '../containers/SigninContainer';
import useToken from '../hooks/useToken';

function Signin() {
  const token = useToken();
  if (token !== null) {
    return <Redirect to="/" />;
  }
  return <SigninContainer />;
}

export default Signin;
