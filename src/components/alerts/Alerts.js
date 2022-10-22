import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { AlertContext } from '../../contexts/alertContext';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Snack({ severity, message }) {
  const { setAlertContext } = useContext(AlertContext)
  const [open, setOpen] = setAlertContext
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const vertical = 'top', horizontal = 'center'

  return (
    <div className={classes.root}>
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose} >
        <Alert onClose={handleClose} severity={severity} style={{minWidth:'150px'}}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}


