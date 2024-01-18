import React, { useState } from 'react';
import SingleService from '../singleService/SingleService';
import BusinessStore from '../../stores/businessDetails';
import { observer } from 'mobx-react';
import './ServicesList.css';

import FormAddService from '../formAddService/FormAddService';


//הצגת הרשימה של פרטי העסק
const ServicesList = observer(() => {

    const [showEditService, setShowEditService] = useState(false)
    return (
        <>
            <div className='addItem'>
            <FormAddService ></FormAddService>

            </div>
            <div className="hhh">

                {BusinessStore.businessServices.map((c, i) => 
                
                        <div className='singlemeetingtoadmin'>
                            <h3 className='nameserv' >{c.name}</h3>
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
