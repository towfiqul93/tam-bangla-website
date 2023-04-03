import React, { useEffect, useState } from 'react';
import {AppBar, Toolbar, Typography, Avatar, Tabs, Menu, Button, IconButton, MenuItem, Box, Tab} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Menu as MenuIcon } from '@mui/icons-material';
import TCCMainDashboard from './components/tcc-main'


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Dashboard = () => {
  
  const navigate = useNavigate();

  const tokenString : any = window.localStorage.getItem('profile');
  const userToken = JSON.parse(tokenString)
  
  useEffect(() => {
    if(tokenString==null){
        navigate('/login')
      }
  }, [])
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event : any) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSignOut =  () =>{
     window.localStorage.removeItem('profile');
    navigate('/login')
  }
  
  return (
        <div>
    <AppBar position="relative" style={{ background: '#0D3580' }}>
        <Toolbar>
          <Typography className='h1-login' variant="h6" style={{ flexGrow: 1 }}>
            <img src="./src/images/badminton/logo_footer.png" alt="logo" style={{ height: 30, marginRight: 10}} />
            Tam-Bangla
          </Typography>
            <div style={{ flexGrow: 1 }}></div>
            <Avatar alt="User Image" src={userToken?.picture} />
            <div style={{ marginLeft: '10px' }}>
                <Typography className='h1-login' variant="subtitle2">{userToken?.name}</Typography>
                <Typography variant="caption">{userToken?.email}</Typography>
            </div>
          <div>
          <Button color="inherit" style={{ marginLeft: 10 }} onClick={handleSignOut}>Sign Out</Button>
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
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{
                style: {
                    backgroundColor: "#0D3580",
                    }
            }} centered>
                <Tab label="Tampere Champions Cup" {...a11yProps(0)} />
                <Tab label="TBPL Registration" {...a11yProps(1)} />
                {/* <Tab label="TCC" {...a11yProps(2)} /> */}
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <TCCMainDashboard />
        </TabPanel>
        <TabPanel value={value} index={1}>
            Item Two
        </TabPanel>
    </div>
    
  );
};

export default Dashboard;