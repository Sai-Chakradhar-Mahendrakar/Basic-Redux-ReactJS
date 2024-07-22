import { Fragment } from 'react';
import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header'
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile'


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
      <Header/>
      {!isAuth && <Auth/>}
      {isAuth && <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
