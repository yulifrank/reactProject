
import { useState } from "react";
import MeetingStore from '../../stores/meeting'
import { observable, makeObservable, action, computed } from 'mobx';
import { observer } from 'mobx-react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import './FormAddMeeting.css'
import Swal from 'sweetalert2'
import Box from '@mui/material/Box';
import BusinessStore from '../../stores/businessDetails'

import { useEffect } from "react";
const FormAddMeeting = observer(({ i = 0 }) => {

  const service = BusinessStore.businessServices.find(
    (service) => service.id === String(i)
  );
  useEffect(() => {
    BusinessStore.initialbusinessServices();
    MeetingStore.initialMeettingList();
    console.log("i",i);
    console.log("service:-------------",BusinessStore.businessServices)
    

  },[])

  //איך אני יוצרת אוביקט מסוג meeting?
  const [isOpen, setIsOpen] = useState(false);//טופס של הוספת פגישה יוצג במקרה בו מזתנה זה  true.
  // const [isFormValid, setIsFormValid] = useState(false);//
  const [formData, setFormData] = useState({
    name: service&& service.name,
    describtion: service?.describtion,
    price: service?.price,
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    dateTime: '',

  });

  //פונקציה שמשנה את אחד מהאינפוטים בשניה שהוא משתנה(את הustateבמקום המתאים)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  //פונקצית שליחה היא בודקת האם מולאו כל הפרטים
  // אם כן  היא קוראת לפונקצית הוספת פגישה של ה סטור ומקפיצה הודעה שה"פגישה נקבעה אחרת
  //אם לא היא מקפיצה הודעה שלא מולאו כל הפרטים ולא מוסיפה פגישה!
  //לאחר מכן העדכנת את המשתנים של ה usestate להיות ריקים...
  const handleSubmit = (event) => {
    console.log("gggggggggggggggg", i)
    console.log(formData.serviceName,formData.serviceDescription,formData.servicePrice)
    // event.preventDefault();
    if (formData.clientEmail !== "" && formData.dateTime !== "" && formData.clientName !== "" && formData.clientName !== "")
     {
      // פה נלך לבקש מהשרת בקשה להכניס את הפגישה 
      // ונלך לעדכן  ת מערך הפגישות
  MeetingStore.addMeeting(formData)

      // {

      //   console.log("addddddddddddddddddddddddddddddddddddddddd")
      //   Swal.fire({
      //     title: "נקבעה פגישה",
      //     text: "פרטיך נקלטו בהצלחה",
      //     icon: "success"
      //   });
      // }
      // if (MeetingStore.addMeeting(formData) === false) 
      //   Swal.fire({
      //     title: "לא ניתן לקבוע את הפגישה",
      //     text: "מתנצלים!!!ו",
      //     icon: "error"
      //   });
      

    }
    setIsOpen(false);
    console.log("form", formData.clientEmail, formData.dateTime)
    // איפוס המשתנים.........
    setFormData({
      name: '',
      describtion: '',
      price: '',
      clientName: '',
      clientPhone: '',
      clientEmail: '',
      dateTime: '',
    });

  };


//שבי? יש מצב שאני נותנת לך עוד חמש דקות להשתלט שוב? םשוט אנחנו  עושות שניה שיר לאחותי בזום אוקי?



  return (
    <>
      <div className="container">
        <Button variant="contained" onClick={() => setIsOpen(true)}>לקביעת פגישה</Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogTitle>קביעת פגישה</DialogTitle>
          <DialogContent className="dialog">
            <form onSubmit={handleSubmit} className="form">
              <div className="form-item">
                {/* <label>Name</label> */}
                <TextField
                  fullWidth
                  label="Name"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleInputChange}
                  placeholder="clientName"
                  className="textField"
                />
              </div>
              <div className="form-item">
                {/* <label>Email</label> */}
                <TextField
                  label="Email"
                  fullWidth
                  name="clientEmail"
                  value={formData.clientEmail}
                  onChange={handleInputChange}
                  placeholder="clientEmail"
                  className="textField"
                />
              </div>
              <div className="form-item">
                {/* <label>Phone</label> */}
                <TextField
                  fullWidth
                  label="Phone"
                  name="clientPhone"
                  value={formData.clientPhone}
                  onChange={handleInputChange}
                  placeholder="clientPhone"
                  className="textField"
                />
              </div>
              <div className="form-item">
                {/* <label>DateTime</label> */}
                <TextField
                  className="textField"
                  label="DateTime"
                  fullWidth
                  type="datetime-local"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleInputChange}
                  InputLabelProps={{
                    shrink: true,

                  }}
                />
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
      {/* {MeetingStore.currentList.map((x) => (<div>{x.clientName}"date: "{x.date}" phone: {x.clientPhone}"</div>))} */}
    </>
  )
})
export default FormAddMeeting
