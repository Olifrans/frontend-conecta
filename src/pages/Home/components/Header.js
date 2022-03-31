import React from 'react'
import {Button} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@material-ui/styles';
import SvgIcon from '@mui/material/SvgIcon';
import {Bell} from 'react-feather';


const userStyles = makeStyles({
  appBar:{
    boxShadow: 'none',    
  },
  img:{
    maxHeight: 55,
  } ,

  grow:{
    flexGrow: 1,
  },
  userSection:{
    display: 'flex',
    alignItems: 'center',
  } ,
  button:{    
    paddingRight: 10,
  } 
})


export default function Header() {

  const classes = userStyles();

  return (
    <AppBar position="fixed" color= "inherit" className={classes.appBar} > 
      <Toolbar>
        <img src="/images/logo.png" alt="logo" className={classes.img}  /> 

        <diV className={classes.grow} ></diV>

        <div className={classes.userSection}>
        <Button variant="contained"  color="primary" className={classes.button} >Novo Post</Button>

        <SvgIcon>
          <Bell></Bell>
        </SvgIcon>

        </div>

        {/* <div>          
          <a href="/"> Dev React Net Core</a>
          <input type=""></input>
        </div>

        <div>
          <Button variant="contained"  color="primary" >Novo Post</Button>
          <span>Imagem01</span>
          <span>Imagem02</span>
        </div> */}

      </Toolbar>

    </AppBar>
  )
}
