import { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
  const { setAuth } = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();
    setAuth(true);
    localStorage.setItem('auth', true)
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Sign in</h1>
      <form onSubmit={onSubmit}>
        <MyInput type="text" placeholder="Login" />
        <MyInput type="text" placeholder="Password" />
        <MyButton type="submit">Just click =)</MyButton>
      </form>
    </div>
  );
};

export default Login;
