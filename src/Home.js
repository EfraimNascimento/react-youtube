import React from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, Button } from '@material-ui/core';
import  MenuIcon from '@material-ui/icons/Menu';
import  AccountCircle from '@material-ui/icons/AccountCircle';

import VideoCall from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import Apps from '@material-ui/icons/Apps'

const useStyles= makeStyles((theme) => ({
    root:{
        height: '100vh',
    },
    appbar:{
        boxShadow: 'none',
    },
    menuIcon:{
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),
    },
    icons:{
        paddingRight: theme.spacing(5),
    },
    grow:{
        flexGrow: 1,
    },
  }))

function Home() {
    const classes = useStyles();
    return(
        
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appbar}>
                <Toolbar>
                    <IconButton
                        className={classes.menuIcon}
                        color='inherit'
                    >
                    <MenuIcon />
                    </IconButton>

                        <div className={classes.grow}></div>
                        <IconButton className={classes.icons}>
                    <VideoCall />

                    </IconButton>

                        <IconButton className={classes.icons}>

                    <Apps />

                    </IconButton>

                    <IconButton className={classes.icons}>
                        <MoreVert />
                    </IconButton>

                    <Button startIcon={<AccountCircle />} variant='outlined' color='secondary' >Fazer Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Home;