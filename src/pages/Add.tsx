import { Redirect } from 'react-router';
import AddContainer from '../containers/AddContainer';
import useToken from '../hooks/useToken';

function Add() {
  const token = useToken();

  if (token === null) {
    return <Redirect to="/signin" />;
  }
  return <AddContainer />;
}

export default Add;
