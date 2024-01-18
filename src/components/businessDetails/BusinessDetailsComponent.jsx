import businessDetails from "../../stores/businessDetails";
import "./BusinessDetailsComponent.css"; // Add your custom CSS file for styling
import { observer } from 'mobx-react';
import logo from "../../assets/images/logo.png";
import { useObserver } from "mobx-react-lite";
import ServicesList from "../servicesList/ServicesList";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import BusinessStore from "../../stores/businessDetails"




const BusinessDetailsComponent = observer(() => {
  useEffect(() => {
    BusinessStore.initialBusinessDetails()   
  }, []);

  return (

    businessDetails.businessDetails&& 
    <header className="business-header">
          {/* {businessDetails.isLogin?<FormUpdateBusinessData></FormUpdateBusinessData>:<></>} */}
      <div className="business-details">
        <div className="business-info">
          <h1 className="business-name">{businessDetails.businessDetails.name}</h1>
          <div className="business-contact">
            <h2 className="business-address"> כתובת : {businessDetails.businessDetails.address}</h2>
            <h2 className="business-phone"> טלפון : {businessDetails.businessDetails.phone}</h2>
            <h2 className="business-owner"> בעלים:  {businessDetails.businessDetails.owner}</h2>
            {/* <h5 className="business-des" >  {businessDetails.businessDetails.description}</h5> */}

          </div>
        </div>
        <img
          src={logo}
          alt="Business Logo"
          className="business-logo"

        />

      </div>

    </header>
  );
});

export default BusinessDetailsComponent;