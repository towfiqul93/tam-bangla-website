/*global google*/

import React, { useEffect, useState, useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Container, FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./custom.css"
import { useNavigate } from "react-router-dom";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {Footer} from "./components/footer"
import {UpcomingTournaments} from "./components/upcoming-tournament"

interface Iuser{
  access_token : string,
  authuser: string,
  expires_in : Number 
  prompt: string
  scope: string
  token_type: string
}

export interface Iprofile{
  picture : string
  name : string
  email : string
}



export const Login = () =>{
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event : any) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event : any) => {
      event.preventDefault();
    };

    
    const [ user, setUser ] = useState<Iuser>();
    const [ profile, setProfile ] = useState<Iprofile>();

    const tokenString : any = window.localStorage.getItem('profile');
    const userToken = JSON.parse(tokenString)
  
  useEffect(() => {
      if(userToken.email){
        navigate('/dashboard')
      }
  }, [])

    const login = useGoogleLogin({
      onSuccess: (codeResponse : any) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
    });

    const navigate = useNavigate();

    useEffect(
      () => {
          if (user) {
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      setProfile(res.data);
                      window.localStorage.setItem('profile', JSON.stringify(res.data))
                  })
                  .catch((err) => console.log(err));
          }
      },
      [ user ]
  );

  

  useEffect(()=>{
    if (profile){
      navigate('/dashboard')
    }
  }, [profile])

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
      googleLogout();
  };
    

    const handleFacebookLogin = () => {
    // handle Facebook login here
    };

    function handleCredentialResponse(response: any){

    }

    
    return (
    <div>
      <AppBar position="relative" style={{ background: '#0D3580' }}>
        <Toolbar>
          <Typography className='h1-login' variant="h6" style={{ flexGrow: 1 }}>
            <img onClick={()=>navigate('/')} src="./src/images/badminton/logo_footer.png" alt="logo" style={{ height: 30, marginRight: 10}} />
            Tam-Bangla
          </Typography>
          <div>
          <Button color="inherit" style={{ marginLeft: 10 }}>Menu</Button>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Home</MenuItem>
              <MenuItem onClick={handleMenuClose}>About</MenuItem>
              <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xs" sx={{ marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button style={{ background: '#0D3580' }} variant="contained" size="large" startIcon={<FacebookIcon />} onClick={handleFacebookLogin} sx={{ width: '100%', margin: 1 }}>
        Login with Facebook
      </Button>
      <Button style={{ background: '#0D3580' }} variant="contained" size="large" startIcon={<GoogleIcon />} onClick={() => login()} sx={{ width: '100%', margin: 1 }}>
        Login with Google
      </Button>
    </Container>
    <div className='custom-upcoming'>
      <UpcomingTournaments />
    </div>
    <div className='footer-margin'>
      <Footer />
    </div>
    </div>  
    )
}

