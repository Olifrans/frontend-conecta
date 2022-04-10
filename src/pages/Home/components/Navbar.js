import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import { ListItemText } from '@mui/material';
import { ListItem } from '@mui/material';

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

const tags = [
  { id: 1, name: 'React-Js' },
  { id: 2, name: 'Java Scrip' },
  { id: 3, name: 'Node-Js' },
  { id: 4, name: 'DotNet' },
  { id: 5, name: 'Agile' },
  { id: 6, name: 'Scrum Master' },
]

export default function Navbar() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Cadastro Gratis
      </Button>

      <ListSubheader>{`Tags em alta`}</ListSubheader>

      {tags.map((item) => (
        <ListItem dense button key={`item-${item.id}-${item.name}`}>
          <ListItemText primary={`#${item.name}`} />
        </ListItem>
      ))}

      <ListItem button>Exibir mais Tags</ListItem>
    </Paper>
  )
}
