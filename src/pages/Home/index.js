import React from 'react';
import Header from './components/Header';
//import './style.css'
import { makeStyles } from '@material-ui/styles';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    height: '100vh',
    padding: 24,
   
  },

  toolbar: {
    minHeight: 64,
  },
})

export default function Home() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar}></div>
      <main className={classes.main}>
        <Container maxWidth="lg">
          <Box display="flex">
            <Navbar />
            <Feed />
          </Box>
        </Container>
      </main>
    </div>
  )
}
