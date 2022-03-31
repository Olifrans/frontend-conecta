import React from 'react'
import Header from './components/Header'
//import './style.css'
import { makeStyles } from '@material-ui/styles';
import Navbar from './components/Navbar';
import Feed from './components/Feed';

const useStyles = makeStyles({
  root:{
    display: 'flex',
    flexDirection: 'column'
  },
  main:{
    height: '100vh',
    display: 'flex',
    width: '1200px',
    margin: '0 auto',
  }
})



export default function Home() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className="toolbar"></div>
      <main className={classes.main}>
        <Navbar />
        <Feed />        
      </main>
    </div>
  )
}
