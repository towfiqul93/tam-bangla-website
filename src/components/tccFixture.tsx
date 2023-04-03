import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const fixturesData = [
    {
      team1: 'Tampere',
      team1Logo: 'https://www.example.com/india.png',
      team2: 'Lahti',
      team2Logo: 'https://www.example.com/england.png',
      time: '10:00 AM',
      venue: 'M. Chinnaswamy Stadium, Bangalore',
      date: '2023-04-15',
      Time: '12:15 PM'

    },
    {
      team1: 'Kokkola',
      team1Logo: 'https://www.example.com/australia.png',
      team2: 'Tampere',
      team2Logo: 'https://www.example.com/southafrica.png',
      time: '02:00 PM',
      venue: 'Sydney Cricket Ground, Sydney',
      date: '2023-04-18',
      Time: '12:15 PM'
    },
    {
      team1: 'Tampere',
      team1Logo: 'https://www.example.com/newzealand.png',
      team2: 'Vaasa',
      team2Logo: 'https://www.example.com/westindies.png',
      time: '06:00 PM',
      venue: 'Eden Park, Auckland',
      date: '2023-04-21',
      Time: '12:15 PM'
    },
    {
        team1: 'Tampere',
        team1Logo: 'https://www.example.com/india.png',
        team2: 'Lahti',
        team2Logo: 'https://www.example.com/england.png',
        time: '10:00 AM',
        venue: 'M. Chinnaswamy Stadium, Bangalore',
        date: '2023-04-15',
        Time: '12:15 PM'
  
      },
      {
        team1: 'Kokkola',
        team1Logo: 'https://www.example.com/australia.png',
        team2: 'Tampere',
        team2Logo: 'https://www.example.com/southafrica.png',
        time: '02:00 PM',
        venue: 'Sydney Cricket Ground, Sydney',
        date: '2023-04-18',
        Time: '12:15 PM'
      },
      {
        team1: 'Tampere',
        team1Logo: 'https://www.example.com/newzealand.png',
        team2: 'Vaasa',
        team2Logo: 'https://www.example.com/westindies.png',
        time: '06:00 PM',
        venue: 'Eden Park, Auckland',
        date: '2023-04-21',
        Time: '12:15 PM'
      },
      {
        team1: 'Tampere',
        team1Logo: 'https://www.example.com/india.png',
        team2: 'Lahti',
        team2Logo: 'https://www.example.com/england.png',
        time: '10:00 AM',
        venue: 'M. Chinnaswamy Stadium, Bangalore',
        date: '2023-04-15',
        Time: '12:15 PM'
  
      },
      {
        team1: 'Kokkola',
        team1Logo: 'https://www.example.com/australia.png',
        team2: 'Tampere',
        team2Logo: 'https://www.example.com/southafrica.png',
        time: '02:00 PM',
        venue: 'Sydney Cricket Ground, Sydney',
        date: '2023-04-18',
        Time: '12:15 PM'
      },
      {
        team1: 'Tampere',
        team1Logo: 'https://www.example.com/newzealand.png',
        team2: 'Vaasa',
        team2Logo: 'https://www.example.com/westindies.png',
        time: '06:00 PM',
        venue: 'Eden Park, Auckland',
        date: '2023-04-21',
        Time: '12:15 PM'
      },
      {
        team1: 'Tampere',
        team1Logo: 'https://www.example.com/india.png',
        team2: 'Lahti',
        team2Logo: 'https://www.example.com/england.png',
        time: '10:00 AM',
        venue: 'M. Chinnaswamy Stadium, Bangalore',
        date: '2023-04-15',
        Time: '12:15 PM'
  
      },
      {
        team1: 'Kokkola',
        team1Logo: 'https://www.example.com/australia.png',
        team2: 'Tampere',
        team2Logo: 'https://www.example.com/southafrica.png',
        time: '02:00 PM',
        venue: 'Sydney Cricket Ground, Sydney',
        date: '2023-04-18',
        Time: '12:15 PM'
      },
      {
        team1: 'Tampere',
        team1Logo: 'https://www.example.com/newzealand.png',
        team2: 'Vaasa',
        team2Logo: 'https://www.example.com/westindies.png',
        time: '06:00 PM',
        venue: 'Eden Park, Auckland',
        date: '2023-04-21',
        Time: '12:15 PM'
      },
      {
        team1: 'Tampere',
        team1Logo: 'https://www.example.com/india.png',
        team2: 'Lahti',
        team2Logo: 'https://www.example.com/england.png',
        time: '10:00 AM',
        venue: 'M. Chinnaswamy Stadium, Bangalore',
        date: '2023-04-15',
        Time: '12:15 PM'
  
      },
      {
        team1: 'Kokkola',
        team1Logo: 'https://www.example.com/australia.png',
        team2: 'Tampere',
        team2Logo: 'https://www.example.com/southafrica.png',
        time: '02:00 PM',
        venue: 'Sydney Cricket Ground, Sydney',
        date: '2023-04-18',
        Time: '12:15 PM'
      },
      {
        team1: 'Tampere',
        team1Logo: 'https://www.example.com/newzealand.png',
        team2: 'Vaasa',
        team2Logo: 'https://www.example.com/westindies.png',
        time: '06:00 PM',
        venue: 'Eden Park, Auckland',
        date: '2023-04-21',
        Time: '12:15 PM'
      },
  ];
  
  const TccFixtureCards = () => {
    return (
        <Grid container spacing={2}>
        {fixturesData.map((fixture) => (
          <Grid item xs={12} sm={6} md={6} lg={2} key={`${fixture.team1}-vs-${fixture.team2}`}>
            <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {fixture.team1} vs {fixture.team2}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <strong>Time:</strong> {fixture.time}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <strong>Venue:</strong> {fixture.venue}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <strong>Date:</strong> {new Date(fixture.date).toLocaleDateString('en-US', { dateStyle: 'medium' })}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <strong>Time:</strong> {fixture.Time}
                </Typography>
              </CardContent>
              
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };

export default TccFixtureCards;
