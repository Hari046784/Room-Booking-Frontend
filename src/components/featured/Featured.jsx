import './featured.css';
import useFetch from '../../hooks/useFetch';
import { REACT_APP_BASE_URL } from "../../URLData";


const Featured = () => {
  const { data, loading } = useFetch(
    `${REACT_APP_BASE_URL}/home/countByCity?cities=chennai,bangalore,mysore`
  );

  return (
    <div className='featured'>
      {loading ? (
        'Loading Please Wait'
      ) : (
        <>
          <div className='featuredItem'>
            <img
              src="https://www.hlimg.com/images/stories/738X538/1_1548670349-784e.jpg"
              alt=''
              className='featuredImg'
            />
            <div className='featuredTitles'>
              <h1>Chennai</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className='featuredItem'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/e/ef/MysorePalace1.JPG'
              alt=''
              className='featuredImg'
            />
            <div className='featuredTitles'>
              <h1>Mysore</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className='featuredItem'>
            <img
              src="https://yometro.com/images/places/bengaluru.jpg"
              alt=''
              className='featuredImg'
            />
            <div className='featuredTitles'>
              <h1>Bangalore</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;