import '../src/style.css';
import { useState } from 'react';

const InputForm = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <div className='new-inc'>
        <button
          className='btn'
          onClick={(old) => setNum(num + 1)}
          type='submit'
        >
          +
        </button>
        <h1>{num}</h1>
        <button
          className='btn'
          onClick={(old) => setNum(num - 1)}
          type='submit'
        >
          -
        </button>
      </div>
    </div>
  );
};

export default InputForm;
