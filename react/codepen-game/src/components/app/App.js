import { useState, useEffect } from 'react';

import './App.scss';

const useRenderCounter = () => {
  const [value, setValue] = useState(0);

  const inc = () => {
    return value < 50 ? setValue((value) => value + 1) : null;
  };

  const dec = () => {
    return value > -50 ? setValue((value) => value - 1) : null;
  };

  const rnd = (selector = 0) => {
		setValue(Math.floor(Math.random() * (50 - -50) + -50))
	}

	 useEffect(() => {
     fetch(
       'https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new'
     )
       .then((res) => res.text())
       .then((res) => setValue(res))
       .catch((err) => console.log(err));
   }, []);

  const reset = () => {
    setValue(0);
  };

  return {
    value,
    inc,
    dec,
    rnd,
    reset,
  };
};

const Counter = (props) => {
  const { value, inc, dec, rnd, reset } = useRenderCounter();

  return (
    <div className="component">
      <div className="counter">{value}</div>
      <div className="controls">
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
        <button onClick={() => rnd(1)}>RND</button>
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
};

const RndCounter = (props) => {
  const { value, rnd, reset } = useRenderCounter();

  return (
    <div className="component">
      <div className="counter">{value}</div>
      <div className="controls">
        <button onClick={rnd}>RND</button>
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Counter counter={0} />
      <RndCounter counter={0} />
    </>
  );
};

export default App;
