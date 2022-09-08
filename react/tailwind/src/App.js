import { useState } from 'react';
import styles from './app.module.scss';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Hello it's practice with Tailwind</h1>
      <input
        className={styles.input}
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.input}
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.button}>Login</button>
    </div>
  );
};

export default App;
