import MeetingStore from '../../stores/meeting'
import { observer } from 'mobx-react';
import './SingleMeeting.css';
import { useEffect } from "react";

//קומפוננטה זו אחראית על הצגת פגישה...
const SingleMeeting = observer(({ i }) => {
const getMeetingColor = (dateTime) =>
 {
    const today = new Date();
    const meetingDate = new Date(dateTime);
    const timeDiff = Math.abs(meetingDate.getTime() - today.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
   if(  diffDays<0) 
    return 'non'
else
    if (diffDays===1) {
      return 'red'; // היום
    } else if (diffDays <= 7) {
      return 'orange'; //השבוע
    } 
    else if (diffDays >=7) 
    {
      return 'green'; // עתיד
    
    }
 
  };

  return (
    <>
      <div className="SingleMeeting">
        <h3>נקבעה פגישה לשירות:</h3>
        <h2 className="SingleMeeting-title">{MeetingStore.meettingList[i].serviceName}</h2>
        <h2 className="SingleMeeting-description">{MeetingStore.meettingList[i].serviceDescription}</h2>
        <h2 className="SingleMeeting-price">{MeetingStore.meettingList[i].servicePrice}</h2>
        <h3 className={`SingleMeeting-date ${getMeetingColor(MeetingStore.meettingList[i].dateTime)}`}>
          {MeetingStore.meettingList[i].dateTime}
        </h3>
        <div className="SingleMeeting-contactInfo">
          <h3 className="SingleMeeting-clientName">{MeetingStore.meettingList[i].clientName}</h3>
          <h4 className="SingleMeeting-contactInfo">{MeetingStore.meettingList[i].clientPhone}</h4>
          <h4 className="SingleMeeting-contactInfo">{MeetingStore.meettingList[i].clientEmail}</h4>
        </div>
      </div>
    </>
  );
});

export default SingleMeeting;
