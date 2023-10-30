import React from 'react';
import './Header.css';
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import List from '@mui/material/List';

import { useState } from 'react';

import Logo from '../../assets/1Artboard/CodeHelio_Logo.png';

const Header = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">

        <a href="#home" className="nav__logo">
          <img className='logoimg' src={Logo} alt="Logo" />
        </a>

        <div className="nav__menu">
          <ul className="nav__list ">
            <li><a href="#home" className="nav__link">Home</a></li>

            <li><a href="#services" className="nav__link">Services</a></li>

            <li><a href="#projects" className="nav__link">Projects</a></li>

            <li><a href="#technology" className="nav__link">Techs</a></li>

            <li><a href="#careers" className="nav__link">Careers</a></li>

            <li><a href="#about" className="nav__link">About</a></li>
          </ul>
        </div>
        <div className="Menu__btn">
          <button className='mnubtn' onClick={() => setIsDrawerOpen(true)}>
            <i class='bx bx-menu'></i>
          </button>
        </div>
      </nav>

      <>
        <Drawer className='sidenav' PaperProps={{
          sx: {
            backgroundColor: "rgba(7, 11, 40, 0.9)",
            color: "rgb(255,255,255)"
          }
        }} 
        anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>

          <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component='div'>
              Side Panel
              <List>

                <ListItem >
                  <ListItemButton href='#home'><ListItemIcon><i class='bx bxs-home'></i></ListItemIcon><ListItemText primary='Home' /></ListItemButton>
                </ListItem>
                <ListItem >
                  <ListItemButton href='#services'><ListItemIcon><i class='bx bxs-user-detail' ></i></ListItemIcon><ListItemText primary='Services' /></ListItemButton>
                </ListItem>
                <ListItem >
                  <ListItemButton href='#projects'><ListItemIcon><i class='bx bxs-briefcase' ></i></ListItemIcon><ListItemText primary='Projects' /></ListItemButton>
                </ListItem>
                <ListItem >
                  <ListItemButton href='#technology'><ListItemIcon><i class='bx bxl-graphql' ></i></ListItemIcon><ListItemText primary='Techs' /></ListItemButton>
                </ListItem>
                <ListItem >
                  <ListItemButton href='#careers'><ListItemIcon><i class='bx bxs-universal-access' ></i></ListItemIcon><ListItemText primary='Careers' /></ListItemButton>
                </ListItem>
                <ListItem >
                  <ListItemButton href='#about'><ListItemIcon><i class='bx bxs-info-circle' ></i></ListItemIcon><ListItemText primary='About' /></ListItemButton>
                </ListItem>

              </List>
            </Typography>
          </Box>
        </Drawer>
      </>
    </header>


  )
}

export default Header