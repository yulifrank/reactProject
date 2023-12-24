
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
  const id = useOutletContext()|0;
  const service = BusinessStore.businessServices.find(
    (service) => service.id === String(id)
  );
  useEffect(() => {
    MeetingStore.initialMeettingList();
  },[])

  return (
    <>
      <div className="singleservicediv">
        <div className="details">
      {service && <h2>{service.name}</h2>}
        {service && <div>{service.describtion}</div>}
        <div className="image">
         {service&& <img className="allimage"  src={service.image} alt="Service Image" />} 
         {service&& <img className="allimage"  src={service.image2} alt="Service Image" />}
         {service&& <img className="allimage"  src={service.image3} alt="Service Image" />}

          </div>
        </div>
        <div className="addmeet">
          {/* //כאן תהיה התמונה  */}
        
          
        <FormAddMeeting i={id} ></FormAddMeeting>
        </div>
      </div>
    </>
  );
});

export default SingleService;
