import './propertyList.css';
import useFetch from '../../hooks/useFetch';
import { REACT_APP_BASE_URL } from "../../URLData";

const PropertyList = () => {
  const { data, loading } = useFetch(`${REACT_APP_BASE_URL}/home/countByType`);

  const images = [
    'https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg',
    'https://is1-3.housingcdn.com/4f2250e8/10b912f7ce91c4bce00ab7c904d6b3cf/v0/large/home_green_apartment-ramamurthy_nagar-bengaluru-home_builders.jpeg',
    'https://media.architecturaldigest.com/photos/57e42de0fe422b3e29b7e78f/16:9/w_2560%2Cc_limit/JW_LosCabos_2015_MainExterior.jpg',
    'https://stylesatlife.com/wp-content/uploads/2021/02/Latest-villa-designs15.jpg',
    'https://www.logcabinhomes.com/wp-content/uploads/2015/07/NewHouseonHill.jpg',
  ];

  return (
    <div className='pList'>
      {loading ? (
        'Loading'
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className='pListItem' key={i}>
                <img src={img} alt='' className='pListImg' />
                <div className='pListTitles'>
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;