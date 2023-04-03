import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface CardProps{
    userName: string;
    picture?: string;
    teamName?: string;
    baseCity?: string;
    captain?: string;
    captainPhoneNo?: string;
    managerName?: string;
    managerPhoneNo?: string;
    mangerEmail?: string;
    registrationTime? : string;
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props:CardProps) {
  return (
    <Card sx={{ overflow: 'auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} src={props.picture} aria-label="user">
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.userName}
        subheader={props.registrationTime}
      />  
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Team from {props.baseCity}
        </Typography>
        <Typography variant="h5" component="div">
          {props.teamName}
        </Typography>
        <Typography variant="body2">
          Team Captain: {props.captain}
        </Typography>
        <Typography variant="body2">
          Captain Phone : {props.captainPhoneNo}
        </Typography>
        <Typography variant="body2">
          Manager : {props.managerName}
        </Typography>
        <Typography variant="body2">
          Manager Phone : {props.managerPhoneNo}
        </Typography>
        <Typography variant="body2">
          Manager Email : {props.mangerEmail}
        </Typography>
        <Typography variant="body2">
          Registration Time : {props.registrationTime}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit Details</Button>
      </CardActions>
    </Card>
  );
}