import React from "react";
import { Grid, Card, CardContent, Typography, Button, CardActions, Box } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { Icon } from "@iconify/react";


const CardGrid = () => {
  const cards = [
    { title: "Web Dev Frontend S02", subtitle: "Cohort 2 - Kingri", team: "xWave Team" },
    { title: "English 03", subtitle: "Cohort 2 - Kingri", team: "xWave Team" },
    { title: "Free IT Bootcamp", subtitle: "10 days - August", team: "xWave Team" },
    { title: "Data Science Basics", subtitle: "Cohort 1", team: "xWave Team" },
    { title: "Advanced Java", subtitle: "Cohort 2 - Kingri", team: "xWave Team" },
    { title: "Cloud Computing", subtitle: "Cohort 2 - Kingri", team: "xWave Team" },
    { title: "AI Bootcamp", subtitle: "5 days - September", team: "xWave Team" },
    { title: "UI/UX Design", subtitle: "Workshop", team: "xWave Team" },
  ];

  return (
    <Grid className="container"  container spacing={3} style={{ padding: "16px" }}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
       <Card
  className=" border"
  sx={{
    background: "linear-gradient(to right, #377dec, #125178)", // Apply gradient here
    color: "rgba(255, 255, 255, 0.9)", // Adjust text color
    display: "flex",
    flexDirection: "column",
    height: "100%",
    cursor:"pointer"
  }}
>
            <CardContent className="position-relative" sx={{ textAlign: "start" }}>
           <Box className="d-flex justify-content-between">    
           <Typography
  variant="h6"
  component="div"
  sx={{
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'underline', // Adds the underline
      textDecorationColor: 'white', // Sets the underline color to white
      textDecorationThickness: '2px', // Adjust the thickness of the underline (optional)
      textUnderlineOffset: '1px', // Adds space between text and underline
    },
  }}
>
  {card.title}
</Typography>
  
                <MoreVertIcon/>     </Box>
              <Typography variant="subtitle2" sx={{ color: "#fff" }}>
                {card.subtitle}
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                {card.team}
              </Typography>

              <Typography
  className="position-absolute top-50 end-0 translate-middle-y fs-2 mt-5 me-3 fw-normal"
  sx={{
    backgroundColor: '#7e57c2', // Use theme primary color
    color: 'white', // Text color
    width: '70px', // Set width for circular size
    height: '70px', // Set height same as width to maintain a circle
    borderRadius: '50%', // Fully round the element
    display: 'flex', // Enable flex to center the content
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    padding: 0, // No extra padding
    fontSize: '1.5rem', // Adjust font size
  }}
>
  X
</Typography>


            </CardContent>
        <Box  sx={{ justifyContent: "center", backgroundColor: "#ffff",height:"180px" }}>
        
        <hr style={{marginTop:"120px"}} className="text-black" />



            <CardActions className="d-flex justify-content-end align-items-center" >
             
              <Icon className="fs-4 text-black mx-3" icon="ic:outline-account-box" />
          
             
       <FolderOpenIcon className="text-black me-2"/>
             

            
            </CardActions>
            </Box>
           
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;