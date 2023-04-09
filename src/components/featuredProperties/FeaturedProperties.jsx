import './featuredProperties.css';
import useFetch from '../../hooks/useFetch';
import { REACT_APP_BASE_URL } from "../../URLData";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    `${REACT_APP_BASE_URL}/home?featured=true&limit=4`
  );

  return (
    <div className='fp'>
      {loading ? (
        'Loading'
      ) : (
        <>
          {data.map((item) => (
            <div className='fpItem' key={item._id}>
              <img src={item.photos[0]} alt='' className='fpImg' />
              <span className='fpName'>{item.name}</span>
              <span className='fpCity'>{item.city}</span>
              <span className='fpPrice'>
                Starting from ₹{item.cheapestPrice}
              </span>
              {item.rating && (
                <div className='fpRating'>
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
