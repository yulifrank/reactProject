import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import './LoginPage.css';
import Swal from 'sweetalert2'

const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  
  const handleLogIn = async () => {
    const response = await fetch("http://localhost:8787/login", {
      method: "POST",
      body: JSON.stringify({
        name, password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.statusText);
    
    if (response.status === 200) 
    {
      setIsLogin(true);
      let timerInterval;

         Swal.fire({
        title: "You are identified as an administrator",
        html: "Go to the site in <b></b> seconds.",
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
          window.location.href = "/admin";
        }
      });
    }
    else{
         Swal.fire({
        title: "Wrong password/name",
        text: "No access to normal user",
        icon: "error"
      });
    }
  }
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        opacity: '90%'
      }}
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.3rem',
          padding: '4rem',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.7) ',
          borderRadius: '8px',
          backgroundColor: 'white',
          opacity: '80%'
        }}
      >
        <TextField
          fullWidth
          label="BusinessOwnerName"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputProps={{
            startAdornment: <PersonIcon />,
          }}
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}

          InputProps={{
            startAdornment: <LockIcon />,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogIn}
        >log In</Button>
      </Box>
    </Box>
  );
};

export default LoginPage;

