// import React from 'react'
// import {
//     Button,
//     Container,
//     Menu,
//     Segment,
//     Visibility,
//   } from 'semantic-ui-react'
//   import {NavLink} from 'react-router-dom'

//   const { MediaContextProvider, Media } = createMedia({
//     breakpoints: {
//       mobile: 0,
//       tablet: 768,
//       computer: 1024,
//     },
//   })
  
//   function CssNavBar() {

//   state = {}

//   hideFixedMenu = () => this.setState({ fixed: false })
//   showFixedMenu = () => this.setState({ fixed: true })
    
//     const children  = props
//     const fixed = state

//     return (
//       <Media greaterThan='mobile'>
//         <Visibility
//           once={false}
//           onBottomPassed={showFixedMenu}
//           onBottomPassedReverse={hideFixedMenu}
//         >
//           <Segment
//             inverted
//             textAlign='center'
//             style={{ minHeight: 700, padding: '1em 0em' }}
//             vertical
//           >
//             <Menu
//               fixed={fixed ? 'top' : null}
//               inverted={!fixed}
//               pointing={!fixed}
//               secondary={!fixed}
//               size='large'
//             >
//               <Container>
//                 <Menu.Item as={NavLink} exact to="/" active>
//                   Home
//                 </Menu.Item>
//                 <Menu.Item as={NavLink} exact to="/festivals">Festivals</Menu.Item>
//                 <Menu.Item position='right'>
//                   <Button as={NavLink} exact to="/login" inverted={!fixed}>
//                     Log in
//                   </Button>
//                   <Button as={NavLink} exact to="/signup" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
//                     Sign Up
//                   </Button>
//                 </Menu.Item>
//               </Container>
//             </Menu>
//             <HomepageHeading />
//           </Segment>
//         </Visibility>

//         {children}
//       </Media>
//     )
//   }

// export default CssNavBar;





// import React from "react";
// // import AppBar from '@mui/material/AppBar';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// // import makeStyles from '@mui/styles';
// import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   navlinks: {
//     marginLeft: theme.spacing(10),
//     display: "flex",
//   },
//  logo: {
//     flexGrow: "1",
//     cursor: "pointer",
//   },
//   link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     marginLeft: theme.spacing(20),
//     "&:hover": {
//       color: "yellow",
//       borderBottom: "1px solid white",
//     },
//   },
// }));
// function Navbar({user, handleLogout}) {
//   const classes = useStyles();

//   return (
//     <AppBar position="static">
//       <CssBaseline />
//       <Toolbar>
//         <Typography variant="h4" className={classes.logo}>
//           Festie
//         </Typography>
//           {user ? (<div className={classes.navlinks}>
//             <Link to="/" className={classes.link}>
//               Home
//             </Link>
//             <Link to="/festivals" className={classes.link}>
//               Festivals
//             </Link>
//             <Link to="/planner_list" className={classes.link}>
//               Planner
//             </Link>
//             <button onClick={handleLogout}>
//             Logout
//             </button> 
//             </div>) :
//             (<div className={classes.navlinks}>
//             <Link to="/" className={classes.link}>
//               Home
//             </Link>
//             <Link to="/login" className={classes.link}>
//               Login
//             </Link>
//             <Link to="/signup" className={classes.link}>
//               Signup
//             </Link>
//             <Link to="/festivals" className={classes.link}>
//               Festivals
//             </Link>
//           </div>)}
//       </Toolbar>
//     </AppBar>
//   );
// }
// export default Navbar;


// // Css Material UI imports
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';

// // React imports
// import React, {useState} from 'react';
// import { useHistory } from "react-router-dom";


// function NavBar({setUser, user}) {
//   // const loggedOut = ['Home', 'Festivals', 'Signup', 'Login'];
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);

//   // const handleOpenNavMenu = (event) => {
//   //   setAnchorElNav(event.currentTarget);
//   // };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   // const handleCloseNavMenu = () => {
//   //   setAnchorElNav(null);
//   // };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   let history = useHistory();

//   // fetch to handle user session logout
//   const handleLogout = () => {
//     fetch("/logout", {
//       method: "DELETE",
//     });
//     setUser(null);
//     history.push("/");
//   };

//   const handlePushToPlanners = () => {
//     history.push("/planner_list")
//   }

//   console.log(user)

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             FESTIE
//           </Typography>

//           {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//                 <MenuItem>
//                   <Typography textAlign="center">Home</Typography>
//                 </MenuItem>
//                 <MenuItem >
//                   <Typography textAlign="center">Login</Typography>
//                 </MenuItem>
//                 <MenuItem >
//                   <Typography textAlign="center">Signup</Typography>
//                 </MenuItem>
//                 <MenuItem >
//                   <Typography textAlign="center">Festivals</Typography>
//                 </MenuItem>  
//             </Menu> */}
//           {/* </Box> */}
//           <Typography
//             variant="h4"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             FESTIE
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//              {user ? 
//               (<><Button
//                 href="/"
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 Home
//               </Button>
//               <Button
//                 href="/festivals"
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 Festivals
//               </Button>
//               <Button
//                 // onClick={handleLogout}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 Logout
//               </Button></>) :
//              (<><Button
//                 href="/"
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 Home
//               </Button>
//               <Button
//                 href="/festivals"
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 Festivals
//               </Button>
//               <Button
//                 href="/login"
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 Login
//               </Button>
//               <Button
//                 href="/signup"
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 Signup
//               </Button></> )}
//           </Box> 

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Avatar" src="" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {user ?  <MenuItem onClose={handleCloseUserMenu}>
//                   <Typography onClick={handlePushToPlanners} textAlign="center">Planners</Typography>
//                 </MenuItem> : null}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default NavBar;
