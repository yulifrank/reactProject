import MeetingStore from '../../stores/meeting'
import { observer } from 'mobx-react';
import './SingleMeeting.css';
import { useEffect } from "react";
const SingleMeeting = observer(({ i }) => {



  return (
    <>
      <div className="SingleMeeting">
        <h3>נקבעה פגישה לשירות:</h3>
           <h2 className="SingleMeeting-title">{MeetingStore.meettingList[i].serviceName} </h2>
        <h2 className="SingleMeeting-description">{MeetingStore.meettingList[i].serviceDescription} </h2>
        <h2 className="SingleMeeting-price">{MeetingStore.meettingList[i].servicePrice} </h2>
        <h3 className="SingleMeeting-date">{MeetingStore.meettingList[i].dateTime}</h3>
        <div className="SingleMeeting-contactInfo">
          <h3 className="SingleMeeting-clientName">{MeetingStore.meettingList[i].clientName}</h3>
          <h4 className="SingleMeeting-contactInfo">{MeetingStore.meettingList[i].clientPhone}</h4>
          <h4 className="SingleMeeting-contactInfo">{MeetingStore.meettingList[i].clientEmail}  </h4>
        </div>
      </div>
    </>
  );
});
export default SingleMeeting