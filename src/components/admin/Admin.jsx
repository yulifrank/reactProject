import BusinessDetailsComponent from "../businessDetails/BusinessDetailsComponent";
import * as React from 'react';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import { useState } from "react";
import './Admin.css'
import { observer } from "mobx-react";
import BusinessStore from '../../stores/businessDetails'
import LoginPage from "../loginPage/LoginPage";
import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../footer/Footer";
import FormUpdateBusinessData from "../formUpdateBusinessData/FormUpdateBusinessData";


const Admin = observer(() => {
  const [isEditMode, setIsEditMode] = useState(false);
  const handleEditModeToggle = () => {
    setIsEditMode(!isEditMode);
  };
  useEffect(() => {

  //בדיקה האם קים בלוקלסטורג'
    if (localStorage.getItem("isLogin") === "true") {
      BusinessStore.setIsLogin(true);
    }
    BusinessStore.initialbusinessServices();
    BusinessStore.initialBusinessDetails();
   
  }, []);
  return (
    <>
    <div className="alll">
      {BusinessStore.isLogin ?
        <>
        <Fab
        color="blue"
        aria-label="add"
        onClick={handleEditModeToggle} // Toggle the isEditMode variable on button click
        style={{
          position: 'fixed !imporotant',
          top: '30px !imporotant',
          right: '30px !imporotant',
        }}
      >
        {/* //קומפוננטה להצגת שתי הכפתורים */}
        <EditIcon />
      </Fab>
      {isEditMode?(<FormUpdateBusinessData func={setIsEditMode} ></FormUpdateBusinessData>):<BusinessDetailsComponent></BusinessDetailsComponent>}
          <div className='button-container'>
            <Button variant="outlined" ><Link to="./services">services</Link></Button>
            <Button variant="outlined" ><Link to="./meeting">meeting</Link></Button>
          </div>
          <Outlet />
        </>
        :
        <LoginPage />}
              <footer className='footer'>
        <Footer></Footer>
      </footer>
      </div>
    </>

  );
});

export default Admin;