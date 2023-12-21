import BusinessDetailsComponent from "../businessDetails/BusinessDetailsComponent";
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { makeStyles } from '@mui/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from "react";
import MeetingList from "../meetingList/MeetingList";
import ServicesList from "../servicesList/ServicesList";

 
const Admin = () => {
  const [showMeetingsOrServices,SetShowMeetingsOrServices]=React.useState(false)
    return (
    <>
<BusinessDetailsComponent></BusinessDetailsComponent>  
<div className="button-container">
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={() => SetShowMeetingsOrServices(false)}>Business Services</Button>
          <Button variant="outlined" onClick={() => SetShowMeetingsOrServices(true)}>Meetings</Button>
        </Stack>
        
  </div>
    {showMeetingsOrServices ? <MeetingList></MeetingList>:<ServicesList></ServicesList>}

</>

    );
  };
  
  export default Admin;