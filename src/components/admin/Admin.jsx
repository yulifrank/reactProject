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
import './Admin.css'
import { observer } from "mobx-react";
import BusinessStore from '../../stores/businessDetails'
import LoginPage from "../loginPage/LoginPage";
import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";


const Admin = observer(() => {
  useEffect(() => {
    if (localStorage.getItem("isLogin") === "true") {
      BusinessStore.setIsLogin(true);
    }
    BusinessStore.initialbusinessServices();
    BusinessStore.initialBusinessDetails();
   
   
    console.log("log",BusinessStore.businessServices.length);

  }, []);
  return (
    <>
      <BusinessDetailsComponent></BusinessDetailsComponent>
      {BusinessStore.isLogin ?
        <>
          <div className='button-container'>
            <Button variant="outlined" ><Link to="./services">services</Link></Button>
            <Button variant="outlined" ><Link to="./meeting">meeting</Link></Button>
          </div>
          <Outlet />
        </>
        :
        <LoginPage />}
    </>

  );
});

export default Admin;