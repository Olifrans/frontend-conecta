
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import { ListItemText } from '@mui/material';
import { ListItem } from '@mui/material';
import PostCard from '../../../components/PostCard';





const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
      width: 275,
      marginRight: theme.spacing(2),
    },
    button: {
      width: '100%',
    },
  }));



export default function Feed() {
    const classes = useStyles();

    return (
        <div>
            <PostCard />
        </div>
      
    )
  }
  