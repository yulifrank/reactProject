import businessDetails from "../../stores/businessDetails";
import "./BusinessDetailsComponent.css"; // Add your custom CSS file for styling
import { observer } from 'mobx-react';
import logo from "../../assets/images/logo.png";
import { useObserver } from "mobx-react-lite";
import ServicesList from "../servicesList/ServicesList";




const BusinessDetailsComponent = observer(() => {
  return (
    <header className="business-header">
      <div className="business-details">
        <div className="business-info">
          <h1 className="business-name">{businessDetails.businessDetails.name}</h1>
          <div className="business-contact">
            <h2 className="business-address"> כתובת : {businessDetails.businessDetails.address}</h2>
            <h2 className="business-phone"> טלפון : {businessDetails.businessDetails.phone}</h2>
            <h2 className="business-owner"> בעלים:  {businessDetails.businessDetails.owner}</h2>
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