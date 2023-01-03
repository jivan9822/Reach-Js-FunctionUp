const DisplayData = ({ data }) => {
  console.log('In display', data);
  return (
    <div className='main-div'>
      <div className='displayFields'>
        <h3>
          First Name: <span className='insideData'>{data.fname}</span>
        </h3>
      </div>
      <div className='displayFields'>
        <h3>
          Last Name: <span className='insideData'>{data.lname}</span>
        </h3>
      </div>
      <div className='displayFields'>
        <h3>
          Age: <span className='insideData'>{data.age}</span>
        </h3>
      </div>
      <div className='displayFields'>
        <h3>
          Gender: <span className='insideData'>{data.gender}</span>
        </h3>
      </div>
      <div className='displayFields'>
        <h3>
          Country: <span className='insideData'>{data.country}</span>
        </h3>
      </div>
      <div className='displayFields'>
        <h3>
          Receiving news: <span className='insideData'>{data.mail}</span>
        </h3>
      </div>
      <img className='userImg' src={data.userImage} alt='image' />
    </div>
  );
};

export default DisplayData;
