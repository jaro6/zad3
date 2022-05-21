import React from 'react';
import { AppBar, Box, Avatar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import logo from '../reactlogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{marginBottom:"40px"}}>
                <Toolbar>
                    <Link to='/'>
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        />
                        </Link>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}/>
                        <Link to="/add-post">
                            <Button style={{color: "white", border: "2px solid white", borderRadius: "10px"}} color="inherit">Dodaj post</Button>
                        </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
