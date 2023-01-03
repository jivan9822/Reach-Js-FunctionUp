import '../src/style.css';
import { useState } from 'react';

const InputForm = (props) => {
  const [text, setText] = useState({});
  const [img, setImg] = useState();
  const onClickHandler = (e) => {
    e.preventDefault();
    const { fname, lname, gender, country, age, userImage } = text;
    if (!fname || !lname || !gender || !country || !age || !userImage) {
      alert('All Field mandatory!');
    } else {
      props.getData(text);
      props.setDisplay(true);
    }
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name == 'userImage') {
      const image = e.target.files[0];
      const url = URL.createObjectURL(image);
      setImg(url);
      setText((e) => {
        return {
          ...e,
          [name]: url,
        };
      });
    } else {
      setText((e) => {
        return {
          ...e,
          [name]: value,
        };
      });
    }
  };
  return (
    <form>
      <input
        type='text'
        className='input'
        onChange={onChangeHandler}
        name='fname'
        placeholder='First Name'
        required
      />
      <input
        type='text'
        className='input'
        onChange={onChangeHandler}
        name='lname'
        placeholder='Last Name'
        required
      />
      {/* <img src={img} /> */}
      <select name='gender' className='select' onChange={onChangeHandler}>
        <option>Select Gender</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </select>
      <input
        type='text'
        className='input'
        onChange={onChangeHandler}
        name='country'
        placeholder='Country'
        required
      />
      <input
        type='number'
        className='input'
        onChange={onChangeHandler}
        name='age'
        placeholder='age'
        required
      />
      <div className='receive'>
        <label>Receive marketing email</label>
        <input
          type='checkbox'
          className='checkbox'
          onChange={onChangeHandler}
          name='mail'
        />
      </div>
      <div className='file'>
        <label className='file-label'>Upload your Photo</label>
        <input
          type='file'
          className='custom-file-upload'
          onChange={onChangeHandler}
          name='userImage'
          required
        />
      </div>
      <input
        className='btn'
        type='submit'
        onClick={onClickHandler}
        value='Submit'
      />
    </form>
  );
};

export default InputForm;
