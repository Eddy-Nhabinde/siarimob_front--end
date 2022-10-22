import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 30,
    },
    typography: {
        padding: theme.spacing(1.5),
    },
}));

export default function PositionedPopper() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const classes = useStyles();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
        setPlacement(newPlacement);
    };

    return (
        <div className={classes.root}>
            <Popper style={{ zIndex: '10000' }} open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper >
                            <List>
                                <ListItem button >
                                    <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                                    <ListItemText primary={'Minha Conta'} />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                                    <ListItemText primary={'Sair '} />
                                </ListItem>
                            </List>
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <AccountCircleIcon style={{cursor:'pointer'}} onClick={handleClick('bottom-end')} />
        </div>
    );
}
