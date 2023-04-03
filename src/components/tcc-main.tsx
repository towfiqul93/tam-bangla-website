import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {Box, TextField }from '@mui/material';
import TCCRegForm from "./tcc-reg-form"
import axios from 'axios';
import { useEffect, useState } from 'react';
import BasicCard from './uikit/card';
import UmpiresList from '../components/umpiresCard';
import TccFixtureCards from '../components/tccFixture'
import Teams from '../components/tccTeamslist'
import ContactForm from '../components/contactUs' 

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface TccFormValues {
    base_city: string;
    captain: string; 
    captain_phone_no: string; 
    comments: string;
    manager_name: string;
    manager_phone_no: string;
    manager_email: string;
    registration_time: string;
    team_name:string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}



export default function TCCMainDashboard() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const tokenString : any = window.localStorage.getItem('profile');
    const userToken = JSON.parse(tokenString)
  
    const [formdata, setFormData] = useState<TccFormValues>();
  
    const teams= [
        {
          id: '1',
          name: 'Team Tampere',
          city: 'Tampere',
          captain: 'Rohit Sharma',
          manager: 'Mahela Jayawardene',
          avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png',
          players: [
            'Rohit Sharma',
            'Quinton de Kock',
            'Suryakumar Yadav',
            'Ishan Kishan',
            'Hardik Pandya',
            'Kieron Pollard',
            'Krunal Pandya',
            'James Neesham',
            'Trent Boult',
            'Jasprit Bumrah',
            'Rahul Chahar'
          ]
        },
        {
          id: '2',
          name: 'Team Tampere',
          city: 'Tampere',
          captain: 'MS Dhoni',
          manager: 'Stephen Fleming',
          avatar: '',
          players: [
            'Faf du Plessis',
            'Ruturaj Gaikwad',
            'Suresh Raina',
            'Ambati Rayudu',
            'MS Dhoni',
            'Ravindra Jadeja',
            'Sam Curran',
            'Dwayne Bravo',
            'Shardul Thakur',
            'Deepak Chahar',
            'Imran Tahir'
          ]
        },
        {
            id: '3',
            name: 'Team Tampere',
            city: 'Tampere',
            captain: 'Rohit Sharma',
            manager: 'Mahela Jayawardene',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png',
            players: [
              'Rohit Sharma',
              'Quinton de Kock',
              'Suryakumar Yadav',
              'Ishan Kishan',
              'Hardik Pandya',
              'Kieron Pollard',
              'Krunal Pandya',
              'James Neesham',
              'Trent Boult',
              'Jasprit Bumrah',
              'Rahul Chahar'
            ]
          },
          {
            id: '4',
            name: 'Team Tampere',
            city: 'Tampere',
            captain: 'MS Dhoni',
            manager: 'Stephen Fleming',
            avatar: '',
            players: [
              'Faf du Plessis',
              'Ruturaj Gaikwad',
              'Suresh Raina',
              'Ambati Rayudu',
              'MS Dhoni',
              'Ravindra Jadeja',
              'Sam Curran',
              'Dwayne Bravo',
              'Shardul Thakur',
              'Deepak Chahar',
              'Imran Tahir'
            ]
          },
          {
            id: '5',
            name: 'Team Tampere',
            city: 'Tampere',
            captain: 'Rohit Sharma',
            manager: 'Mahela Jayawardene',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png',
            players: [
              'Rohit Sharma',
              'Quinton de Kock',
              'Suryakumar Yadav',
              'Ishan Kishan',
              'Hardik Pandya',
              'Kieron Pollard',
              'Krunal Pandya',
              'James Neesham',
              'Trent Boult',
              'Jasprit Bumrah',
              'Rahul Chahar'
            ]
          },
          {
            id: '6',
            name: 'Team Tampere',
            city: 'Tampere',
            captain: 'MS Dhoni',
            manager: 'Stephen Fleming',
            avatar: '',
            players: [
              'Faf du Plessis',
              'Ruturaj Gaikwad',
              'Suresh Raina',
              'Ambati Rayudu',
              'MS Dhoni',
              'Ravindra Jadeja',
              'Sam Curran',
              'Dwayne Bravo',
              'Shardul Thakur',
              'Deepak Chahar',
              'Imran Tahir'
            ]
          },
          {
            id: '7',
            name: 'Team Tampere',
            city: 'Tampere',
            captain: 'Rohit Sharma',
            manager: 'Mahela Jayawardene',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png',
            players: [
              'Rohit Sharma',
              'Quinton de Kock',
              'Suryakumar Yadav',
              'Ishan Kishan',
              'Hardik Pandya',
              'Kieron Pollard',
              'Krunal Pandya',
              'James Neesham',
              'Trent Boult',
              'Jasprit Bumrah',
              'Rahul Chahar'
            ]
          },
          {
            id: '8',
            name: 'Team Tampere',
            city: 'Tampere',
            captain: 'MS Dhoni',
            manager: 'Stephen Fleming',
            avatar: '',
            players: [
              'Faf du Plessis',
              'Ruturaj Gaikwad',
              'Suresh Raina',
              'Ambati Rayudu',
              'MS Dhoni',
              'Ravindra Jadeja',
              'Sam Curran',
              'Dwayne Bravo',
              'Shardul Thakur',
              'Deepak Chahar',
              'Imran Tahir'
            ]
          },
          {
            id: '9',
            name: 'Team Tampere',
            city: 'Tampere',
            captain: 'Rohit Sharma',
            manager: 'Mahela Jayawardene',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png',
            players: [
              'Rohit Sharma',
              'Quinton de Kock',
              'Suryakumar Yadav',
              'Ishan Kishan',
              'Hardik Pandya',
              'Kieron Pollard',
              'Krunal Pandya',
              'James Neesham',
              'Trent Boult',
              'Jasprit Bumrah',
              'Rahul Chahar'
            ]
          },
          {
            id: '10',
            name: 'Team Tampere',
            city: 'Tampere',
            captain: 'MS Dhoni',
            manager: 'Stephen Fleming',
            avatar: '',
            players: [
              'Faf du Plessis',
              'Ruturaj Gaikwad',
              'Suresh Raina',
              'Ambati Rayudu',
              'MS Dhoni',
              'Ravindra Jadeja',
              'Sam Curran',
              'Dwayne Bravo',
              'Shardul Thakur',
              'Deepak Chahar',
              'Imran Tahir'
            ]
          },
          {
            id: '11',
            name: 'Team Tampere',
            city: 'Tampere',
            captain: 'Rohit Sharma',
            manager: 'Mahela Jayawardene',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png',
            players: [
              'Rohit Sharma',
              'Quinton de Kock',
              'Suryakumar Yadav',
              'Ishan Kishan',
              'Hardik Pandya',
              'Kieron Pollard',
              'Krunal Pandya',
              'James Neesham',
              'Trent Boult',
              'Jasprit Bumrah',
              'Rahul Chahar'
            ]
          },
          {
            id: '12',
            name: 'Team Tampere',
            city: 'Tampere',
            captain: 'MS Dhoni',
            manager: 'Stephen Fleming',
            avatar: '',
            players: [
              'Faf du Plessis',
              'Ruturaj Gaikwad',
              'Suresh Raina',
              'Ambati Rayudu',
              'MS Dhoni',
              'Ravindra Jadeja',
              'Sam Curran',
              'Dwayne Bravo',
              'Shardul Thakur',
              'Deepak Chahar',
              'Imran Tahir'
            ]
          },
      ];
    useEffect(() => {
        axios.get("https://tambangla.onrender.com/v1/tcc/"+userToken.email ).then((response) => {
        if (response.status == 200 && response.data !=null){
            setFormData(response.data.tcc)
        }})
    }, [])

  return (
    <Box 
      sx={{  maxWidth: 1200, flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{  m: 1 ,borderRight: 1, borderColor: 'divider' , overflow: 'inherit' }}
      >
        <Tab label="Registration" {...a11yProps(0)} />
        <Tab label="Teams" {...a11yProps(1)} />
        <Tab label="Rules" {...a11yProps(2)} />
        <Tab label="Umpires" {...a11yProps(3)} />
        <Tab label="Venue" {...a11yProps(4)} />
        <Tab label="Fixture" {...a11yProps(5)} />
        <Tab label="Contact" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {
            formdata ? <BasicCard 
            userName={userToken.name}
            picture= {userToken.picture}
            teamName= {formdata?.team_name}
            baseCity= {formdata?.base_city}
            captain= {formdata?.captain}
            captainPhoneNo= {formdata?.captain_phone_no}
            managerName= {formdata?.manager_name}
            managerPhoneNo= {formdata?.manager_phone_no}
            mangerEmail= {formdata?.manager_email}
            registrationTime= {formdata?.registration_time} 
        /> : <TCCRegForm />
        }      
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Teams teams={teams} />
      </TabPanel>
      <TabPanel value={value} index={2}>
      </TabPanel>
      <TabPanel value={value} index={3}>
        The Umpire Panel of TCC
        <UmpiresList />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Venue 1
        <br />
        <br />
        Kuusikkopuiston kenttä
        <br />
        Ruovedenkatu 12, 33720 Tampere
        <div></div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2013.3179035848748!2d23.831583851623357!3d61.454348145802214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468edfa8a9d3f137%3A0x83233a72909fe9a7!2sKuusikkopuiston%20kentt%C3%A4!5e1!3m2!1sen!2sfi!4v1680480721795!5m2!1sen!2sfi" width="600" height="450"  loading="lazy"></iframe>

      </TabPanel>
      <TabPanel value={value} index={5}>
        <TccFixtureCards />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <ContactForm />
      </TabPanel>
    </Box>
  );
}