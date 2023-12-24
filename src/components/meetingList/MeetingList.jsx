import MeetingStore from '../../stores/meeting'
import { observer } from 'mobx-react';
import SingleMeeting from '../singleMeeting/SingleMeeting';
import { useEffect } from "react";
import './MeetingList.css'

const MeetingList = observer(() => {
      
      useEffect(() => {
        MeetingStore.initialMeettingList();
      },[])
    return (
        <>
            <div className='allMeeting'>
            {MeetingStore.meettingList.map((c,i) => <SingleMeeting i={i} ></SingleMeeting>)}
      
            </div>
        </>
    );
});
export default MeetingList