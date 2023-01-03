import DisplayData from './DisplayData';
import InputForm from './InputForm';
import { useState } from 'react';
function App() {
  const [display, setDisplay] = useState(false);
  const [data, getData] = useState();
  console.log('In App', data);
  return (
    <div className='container'>
      {display ? (
        <DisplayData data={data} />
      ) : (
        <InputForm getData={getData} setDisplay={setDisplay} />
      )}
    </div>
  );
}
export default App;
