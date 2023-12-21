
import { Outlet, useParams } from 'react-router-dom';
import BusinessDetailsComponent from '../businessDetails/BusinessDetailsComponent';
import BusinessStore from '../../stores/businessDetails';
import './DesignWorksConstruction.css'; // Import the CSS file
import SingleService from '../singleService/SingleService';

const DesignWorksConstruction = () => {
  const { id } = useParams();

  return (
    <>
    <header className='header'>
      <BusinessDetailsComponent></BusinessDetailsComponent>
      </header>
      <div className="container">
        <div className="sidebar">
          {BusinessStore.businessServices.map((c, i) => (
            <a href={i} key={i}>
              <div>{c.name}</div>
            </a>
          ))}
        </div>
        <div className="content">
          
          {id?  <Outlet context={[id]} />:<SingleService context={[0]}></SingleService>}
        
        </div>
      </div>
      
    </>
  );
};

export default DesignWorksConstruction;
