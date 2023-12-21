import MeetingStore from'../../stores/meeting'
import { observer } from 'mobx-react';
const SingleMeeting= observer(({i}) => {
  
    return (
     <>
     <div>
   {i}
     </div>
     </>
     );
    });
  export default SingleMeeting