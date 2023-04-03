import React from 'react';
import { Grid, Card, CardHeader, CardContent, CardMedia, Typography, IconButton, List, ListItem, ListItemText } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Team {
    id: string;
    name: string;
    city: string;
    captain: string;
    manager: string;
    avatar: string;
    players: string[];
  }

interface TeamsProps {
  teams: Team[];
}

const Teams: React.FC<TeamsProps> = ({ teams }) => {
  const [expandedTeamId, setExpandedTeamId] = React.useState('');

  const handleExpandClick = (teamId: string) => {
    setExpandedTeamId(expandedTeamId === teamId ? '' : teamId);
  };

  return (
    <>
      Registered Teams of Tampere Cahmpions Cup 2023 

      (Click on the card to see the player list)

    <Grid container spacing={2}>
      {teams.map(team => (
        <Grid item xs={12} sm={6} md={4} key={team.id}>
          <Card>
            <CardHeader
              title={team.name}
              subheader={team.city}
              action={
                <IconButton onClick={() => handleExpandClick(team.id)}>
                  <ExpandMoreIcon />
                </IconButton>
              }
            />
            <CardMedia component="img" src={team.avatar} height="200" />
            <CardContent>
              <Typography variant="subtitle1" component="h2">
                Captain: {team.captain}
              </Typography>
              <Typography variant="subtitle1" component="h2">
                Manager: {team.manager}
              </Typography>
            </CardContent>
            <List dense={true}>
              {expandedTeamId === team.id &&
                team.players.map((player, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={player} />
                  </ListItem>
                ))}
            </List>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default Teams;

