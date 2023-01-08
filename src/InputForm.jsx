import '../src/style.css';
import { useState } from 'react';
import axios from 'axios';

const InputForm = () => {
  const [num, setNum] = useState('');
  const [currency, setCurrency] = useState({});
  const onChangeHandler = (e) => {
    setNum(e.target.value);
  };
  const onClickHandler = async (e) => {
    e.preventDefault();
    const data = await axios.get('https://api.coincap.io/v2/rates');
    const curr = data.data.data.filter((each) => each.symbol === num);
    setCurrency(curr[0]);
  };
  console.log(currency);
  return (
    <div>
      <select onChange={onChangeHandler}>
        <option>Select Bit Coin</option>
        <option value='INR'>INR</option>
        <option value='USD'>USD</option>
        <option value='BTC'>BTC</option>
        <option value='ETH'>ETH</option>
        <option value='SGD'>SGD</option>
      </select>
      <button onClick={onClickHandler}>Show</button>
      <div>
        <div>
          currencySymbol: <span>{currency.currencySymbol}</span>
        </div>
        <div>
          id: <span>{currency.id}</span>
        </div>
        <div>
          rateUsd: <span>{currency.rateUsd}</span>
        </div>
        <div>
          symbol: <span>{currency.symbol}</span>
        </div>
        <div>
          type: <span>{currency.type}</span>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
