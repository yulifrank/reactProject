import React, { useState } from 'react';
import SingleService from '../singleService/SingleService';
import BusinessStore from '../../stores/businessDetails';
import { observer } from 'mobx-react';
import './ServicesList.css';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import FormAddService from '../formAddService/FormAddService';
import { useEffect } from 'react';


const ServicesList = observer(() => {


    useEffect(() => {
       
        // BusinessStore.initialbusinessServices();
    
      }, []);
    const [showEditService, setShowEditService] = useState(false)
    return (
        <>
            <div className='addItem'>
            <FormAddService ></FormAddService>

            </div>
            <div className="hhh">

                {BusinessStore.businessServices.map((c, i) => 
                
                        <div className='singlemeetingtoadmin'>
                            <h3>{c.name}</h3>
                            <div className='des'>{c.describtion}</div>
                            <div className='button1'>
                            </div>
                        </div>
                
                )}

            </div>
        </>

    )
});

export default ServicesList;
