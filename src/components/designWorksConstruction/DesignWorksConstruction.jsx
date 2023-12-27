
import { Outlet, useParams } from 'react-router-dom';
import BusinessDetailsComponent from '../businessDetails/BusinessDetailsComponent';
import BusinessStore from '../../stores/businessDetails';
import './DesignWorksConstruction.css';
import SingleService from '../singleService/SingleService';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import Footer from '../footer/Footer';


const DesignWorksConstruction = observer(() => {
  useEffect(() => {
    localStorage.removeItem('isLogin');
    BusinessStore.initialBusinessDetails();
     console.log("log",BusinessStore.businessServices.length);

  }, []);

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

          {id ? <Outlet context={[id]} /> : <SingleService context={[0]}></SingleService>}

        </div>
      </div>
      <footer className='footer'>
        <Footer></Footer>
      </footer>

    </>
  );
});

export default DesignWorksConstruction;
