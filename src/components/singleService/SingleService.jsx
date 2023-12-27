
import React from "react";
import { useOutletContext } from "react-router-dom";
import FormAddMeeting from "../formAddMeeting/FormAddMeeting";
import { observer } from "mobx-react";
import BusinessStore from "../../stores/businessDetails";
import "./SingleService.css";
import serviceImage from "../../assets/images/with-supplies.jpg"; // Import the image separatelyt 
import { useEffect } from "react";
import MeetingStore from '../../stores/meeting'


const SingleService = observer((x) => {
  const id = useOutletContext()|x;
  const service = BusinessStore.businessServices.find(
    (service) => service.id === String(id)
  );
  useEffect(() => {
    MeetingStore.initialMeettingList();
    BusinessStore.initialbusinessServices();

    // BusinessStore.initialbusinessServices();
    console.log(BusinessStore. businessServices)
    console.log("service", BusinessStore.businessServices);

  },[])


  return (
    <>
      <div className="singleservicediv">
        <div className="details">
      {service &&service.name &&<h2>{service.name}<div></div></h2>}
        {service && service.describtion&&<div>{service.describtion}</div>}
        <div className="image">
         {service && service.image&& <img className="allimage"  src={service.image} alt="Service Image" />} 
         {service && service.image2&& <img className="allimage"  src={service.image2} alt="Service Image" />}
         {service && service.image3&& <img className="allimage"  src={service.image3} alt="Service Image" />}

          </div>
        </div>
        <div className="addmeet">
          {/* //כאן תהיה התמונה  */}
      
        <FormAddMeeting i={service} ></FormAddMeeting>
        </div>
      </div>
    </>
  );
});

export default SingleService;
