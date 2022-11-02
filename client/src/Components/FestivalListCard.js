import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
// React imports
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Festie
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function FestivalListCard({festivals}) {

// theme to handle font
let theme = createTheme({
  typography: {
    fontFamily: 'SairaCondensed-Medium',
  }
})

theme = responsiveFontSizes(theme)
let history = useHistory()
        
const handleMapToggle = () => {
  history.push('/map')
}

const handleFestivalCardPush = (festival) => {
  history.push(`/festivals/${festival.id}`)
}

// initialized state for filtered arrays
const [selectedGenre, setSelectedGenre] = useState("")
const [hasCamping, setHasCamping] = useState("")

// functions to handle state changes of filters
  const handleSelectedGenre = (e) => {
    setSelectedGenre(e.target.value)
  }
  const handleCamping = (e) => {
    setHasCamping(e.target.value)
  }

  // MEGA filter to handle filters of genre and has_camping
let allFilters = festivals.filter(filteredGenre => {
    if(selectedGenre === "") return true
        return (selectedGenre === filteredGenre.genre)})
        .filter(filteredCamp => {
            if (hasCamping === "") return true
              else if (hasCamping === "true")
              return (filteredCamp.has_camping)
              else if (hasCamping === "false")
              return (!filteredCamp.has_camping)
        // may add average ticket and average attendance.filter() later
    }) 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Festival List
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              View list of upcoming festival events. Login to add them to your planner. Or signup to begin a collection of planners for future festival events. 
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button className="plannerbtn" onClick={handleMapToggle} variant="contained">View Map</Button>
            </Stack>
          </Container>
        </Box>
        <Box>
        <div className="genre-filter">
            <label>Filter By Genre : </label>
                <select onChange={handleSelectedGenre} name="filter">
                    <option value="">All Genres</option>
                    <option value="Folk">Folk</option>
                    <option value="Electronic">Electronic</option>
                    <option value="Dubstep">Dubstep</option>
                    <option value="Country">Country</option>
                    <option value="Rock">Rock</option>
                </select>
            </div>
            <div className="camping-filter">
            <label>Filter By Camping Availability : </label>
                <select onChange={handleCamping} name="filter">
                    <option value="">Has Camping</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
            </Box>

        <Container sx={{ py: 1 }} maxWidth="md">
          <Grid container spacing={4}>
            {allFilters.map((festival) => (
              <Grid item key={festival.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: '20%',
                    }}
                    image={festival.lineup_poster}
                    alt="Festival Poster"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography  gutterBottom variant="h5" component="h2">
                      {festival.name}
                    </Typography>
                    <Typography >
                      {festival.date}
                    </Typography>
                    <Typography>
                    {festival.marker.address}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="medium" onClick={() => handleFestivalCardPush(festival)}>View Details</Button>
                    <Button onClick={handleMapToggle} size="small">Show Map</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Festie
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          For all your festival planning needs!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}


export default FestivalListCard;