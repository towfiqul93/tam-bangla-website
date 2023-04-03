// import React from 'react';
// import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

// const cardsData = [
//   {
//     title: 'Nasibur Rahman',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada ante vitae erat gravida, in vestibulum enim pellentesque.',
//     image: 'https://source.unsplash.com/random/300x200',
//   },
//   {
//     title: 'Tanvir Ahmed',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada ante vitae erat gravida, in vestibulum enim pellentesque.',
//     image: 'https://source.unsplash.com/random/300x200',
//   },
//   {
//     title: 'Ariful Mahmud',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada ante vitae erat gravida, in vestibulum enim pellentesque.',
//     image: 'https://source.unsplash.com/random/300x200',
//   },
//   {
//     title: 'Saiful Alam',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada ante vitae erat gravida, in vestibulum enim pellentesque.',
//     image: 'https://source.unsplash.com/random/300x200',
//   },
//   {
//     title: 'Imran Hossain',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada ante vitae erat gravida, in vestibulum enim pellentesque.',
//     image: 'https://source.unsplash.com/random/300x200',
//   },
//   {
//     title: 'Zahid polok',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada ante vitae erat gravida, in vestibulum enim pellentesque.',
//     image: 'https://source.unsplash.com/random/300x200',
//   },
// ];

// const ThreeCardsRow = () => {
//   return (
//     <Grid container spacing={2}>
//       {cardsData.map((cardData) => (
//         <Grid item xs={12} sm={6} md={4} key={cardData.title}>
//           <Card sx={{ maxWidth: 345 }}>
//             <CardMedia component="img" height="140" image={cardData.image} alt={cardData.title} />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="h2">
//                 {cardData.title}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 {cardData.content}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default ThreeCardsRow;


import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';



type Umpire = {
    name: string;
    country: string;
    avatar: string;
    experience: string;
    summary: string;
  };
  
  const umpiresData: Umpire[] = [
    {
      name: 'Aleem Dar',
      country: 'Pakistan',
      avatar: 'https://www.espncricinfo.com/db/PICTURES/CMS/95600/95683.jpg',
      experience: '20 years',
      summary: 'One of the most experienced umpires in the world.',
    },
    {
      name: 'Kumar Dharmasena',
      country: 'Sri Lanka',
      avatar: 'https://www.espncricinfo.com/db/PICTURES/CMS/95600/95683.jpg',
      experience: '10 years',
      summary: 'A former Sri Lankan cricketer who played for the national team.',
    },
    {
      name: 'Billy Bowden',
      country: 'New Zealand',
      avatar: 'https://www.espncricinfo.com/db/PICTURES/CMS/95600/95683.jpg',
      experience: '21 years',
      summary: 'Known for his unique and memorable umpiring gestures.',
    },
    {
      name: 'Marais Erasmus',
      country: 'South Africa',
      avatar: 'https://www.espncricinfo.com/db/PICTURES/CMS/95600/95683.jpg',
      experience: '15 years',
      summary: 'One of the most respected umpires in the world.',
    },
    // add more umpires data here
  ];
  
  const UmpireDetailsCard: React.FC<{ umpire: Umpire }> = ({ umpire }) => {
    return (
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia component="img" sx={{ height: 200 }} image={umpire.avatar} alt={umpire.name} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {umpire.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Country:</strong> {umpire.country}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Experience:</strong> {umpire.experience}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {umpire.summary}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  
  const UmpiresList: React.FC = () => {
    return (
      <Grid container spacing={2}>
        {umpiresData.map((umpire, index) => (
          <Grid item xs={12} sm={6} md={4} key={`${umpire.name}-${index}`}>
            <UmpireDetailsCard umpire={umpire} />
          </Grid>
        ))}
      </Grid>
    );
  };
  
export default UmpiresList;