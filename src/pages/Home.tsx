import { Redirect } from 'react-router-dom';
import ListContainer from '../containers/ListContainer';
import useToken from '../hooks/useToken';

function Home() {
  const token = useToken();
  if (token === null) {
    return <Redirect to="/signin" />;
  }
  return <ListContainer />;
}

export default Home;
