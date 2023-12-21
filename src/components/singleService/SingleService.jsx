
import React from "react";
import { useOutletContext } from "react-router-dom";
import FormAddMeeting from "../formAddMeeting/FormAddMeeting";
import { observer } from "mobx-react";
import BusinessStore from "../../stores/businessDetails";
import "./SingleService.css";
import serviceImage from "../../assets/images/with-supplies.jpg"; // Import the image separately


const SingleService = observer(() => {
  const id = useOutletContext();
  const service = BusinessStore.businessServices.find(
    (service) => service.id === String(id)
  );

  return (
    <>
      <div className="singleservicediv">
        <div className="details">
      {service && <h2>{service.name}</h2>}
        {service && <div>{service.describtion}</div>}
        </div>
        <div className="addmeet">
          {/* //כאן תהיה התמונה  */}
          <div className="image">
         {service&& <img className="oneimage"  src={service.image} alt="Service Image" />}
          </div>
        <FormAddMeeting></FormAddMeeting>
        </div>
      </div>
    </>
  );
});

export default SingleService;
