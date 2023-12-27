
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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';




import { useEffect } from "react";
const FormAddMeeting = observer(({ i  }) => {

 
  useEffect(() => {
    BusinessStore.initialbusinessServices();
    MeetingStore.initialMeettingList();
    console.log("i",i);
    console.log("service:-------------",BusinessStore.businessServices)
    console.log("serv name",i?.name)

  },[])

  //איך אני יוצרת אוביקט מסוג meeting?
  const [isOpen, setIsOpen] = useState(false);//טופס של הוספת פגישה יוצג במקרה בו מזתנה זה  true.
  // const [isFormValid, setIsFormValid] = useState(false);//
  const [formData, setFormData] = useState({
    serviceName: i?.name,
    serviceDescription: i?.describtion,
    servicePrice: i?.price,
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    meetingDateTime: null,
  });

  //פונקציה שמשנה את אחד מהאינפוטים בשניה שהוא משתנה(את הustateבמקום המתאים)

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
    }));
};
const handleDateTimeChange = (dateTime) => {
    const formattedDateTime = dateTime.format('YYYY-MM-DDTHH:mm:ss');
    setFormData((prevData) => ({
        ...prevData,
        dateTime: formattedDateTime,
    }));
    handleInputChange({ target: { name: 'dateTime', value: formattedDateTime } });
};









  //פונקצית שליחה היא בודקת האם מולאו כל הפרטים
  // אם כן  היא קוראת לפונקצית הוספת פגישה של ה סטור ומקפיצה הודעה שה"פגישה נקבעה אחרת
  //אם לא היא מקפיצה הודעה שלא מולאו כל הפרטים ולא מוסיפה פגישה!
  //לאחר מכן העדכנת את המשתנים של ה usestate להיות ריקים...
  const handleSubmit = (event) => {
    console.log("gggggggggggggggg", )
    console.log(formData.name,formData.describtion,formData.price)
    // event.preventDefault();
    if (formData.clientEmail !== "" && formData.dateTime !== "" && formData.clientName !== "" && formData.clientName !== "")
     {
      // פה נלך לבקש מהשרת בקשה להכניס את הפגישה 
      // ונלך לעדכן  ת מערך הפגישות
  MeetingStore.addMeeting(formData)

    }
    setIsOpen(false);
    console.log("form", formData.clientEmail, formData.dateTime)
    // איפוס המשתנים.........
    setFormData({
      serviceName: i?.name,
      serviceDescription:i?.describtion,
      servicePrice: i?.price,
      clientName: '',
      clientPhone: '',
      clientEmail: '',
      meetingDateTime: null,    });

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
                {/* <label>DateTime</label>
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
                /> */}



<LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            renderInput={(props) => (
                                <TextField
                                    {...props}
                                    variant="outlined"
                                    className="inputs"
                                    name="dateTime"
                                    label="Meeting Date and Time"
                                />
                            )}
                            value={formData.dateTime}
                            onChange={handleDateTimeChange}
                            disablePast
                            required
                        />
                    </LocalizationProvider>




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




