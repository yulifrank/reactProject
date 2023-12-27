import React from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import BusinessStore from '../../stores/businessDetails'

// import businessDetails  from '../../stores/businessDetails .js'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
// import logo from '../../assets/images/logo2.png'
// import lcon1 from '../../assets/images/icons/facebook-new.png'
// import lcon2 from '../../assets/images/icons/instagram-new.png'
// import lcon3 from '../../assets/images/icons/twitter.png'
// import lcon4 from '../../assets/images/icons/whatsapp.png'
// import lcon5 from '../../assets/images/icons/pinterest.png'

import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';


import './Footer.css';

const Footer = () => {
  return (
    <footer >
    <div className="div-footer">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <ul className="ul_in_the_footer">
            <div className="title_row">About us:</div>
              <li><a href="#">Who we are</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              {/* <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Subscribers</a></li>
              <li><a href="#">News and Updates</a></li> */}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {/* <div className="line"></div> */}
            <div>
              <div className="title_row">Join the {BusinessStore.businessDetails.name} mailing list</div>
              <div className="input-email">
                <TextField
                  className="input_email"
                  type="email"
                  id="email"
                  name="email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={"email"}
                />
                <Button
                  className="input_submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </div>
              <div className="social_media">
              {/* <a href="#"><img className="imgIcons" src={lcon1} alt="logo" /></a>
              <a href="#"><img className="imgIcons" src={lcon2} alt="logo" /></a>
              <a href="#"><img className="imgIcons" src={lcon3} alt="logo" /></a>
              <a href="#"><img className="imgIcons" src={lcon4} alt="logo" /></a>
              <a href="#"><img className="imgIcons" src={lcon5} alt="logo" /></a> */}
                <a href="#"><FacebookIcon className="icon" /></a>
                <a href="#"><InstagramIcon className="icon" /></a>
                <a href="#"><PinterestIcon className="icon" /></a>
                <a href="#"><TwitterIcon className="icon" /></a>
              </div>
            </div>
          </Grid>
           <Grid item xs={12} sm={6} md={3}>
            <ul className="ul_in_the_footer">  
            <div className="title_row">Contact us</div>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Careers</a></li>
               {/* <li><a href="#">Partnerships</a></li>
              <li><a href="#">Press</a></li>  */}
            </ul>
          </Grid> 
          <Grid item xs={12} sm={6} md={3}>
            {/* <div className="line"></div> */}
            <div>
            <div className="contact_info">
              <div className="title_row">Customer Service</div>
                <div><EmailRoundedIcon/> {BusinessStore.businessDetails.name}</div>
                <div><PhoneIphoneRoundedIcon/>{BusinessStore.businessDetails.phone}</div>
                <div><LocationOnRoundedIcon/>{BusinessStore.businessDetails.address}</div>
              </div>
            </div>
          </Grid>
        </Grid>
        
      </Container>
      
    
 
    <div className="container_bottom">
    {/* <img className="logo3" src={logo} alt="logo" /> */}
    Copyright © 2010-2024 Yael Frank All rights reserved     
     </div>
     </div>
     </footer>
  );
};

export default Footer;
