import MeetingStore from '../../stores/meeting'
import { observer } from 'mobx-react';
import SingleMeeting from '../singleMeeting/SingleMeeting';
const MeetingList = observer(() => {

    return (
        <>
            <div>
                meetings
                {MeetingStore.meettingList.length}
            {MeetingStore.currentList.map((c, i) => <SingleMeeting i={i} ></SingleMeeting>)}
      
            </div>
        </>
    );
});
export default MeetingList