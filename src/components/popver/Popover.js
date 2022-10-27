import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { List, ListItem, ListItemIcon, ListItemText, Fab } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 30,
    },
    typography: {
        padding: theme.spacing(1.5),
    },

    fab: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
    },
}));

export default function PositionedPopper({ funcao, setEvent }) {
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
        <>
            <div className={classes.root}>
                <Popper style={{ zIndex: '10000' }} open={open} anchorEl={anchorEl} placement={placement} transition

                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper style={{ background: '#E1EAE5' }} >
                                <List>
                                    {funcao == 'user' ?
                                        <>
                                            <ListItem button >
                                                <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                                                <ListItemText primary={'Minha Conta'} />
                                            </ListItem>
                                            <ListItem button>
                                                <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                                                <ListItemText primary={'Sair '} />
                                            </ListItem>
                                        </>
                                        :
                                        <>
                                            <ListItem button >
                                                <div data-toggle="modal" data-target="#exampleModalScrollable" onClick={() => { setOpen(false) }}>
                                                    <ListItemText primary={'Provincia '} />
                                                </div>
                                            </ListItem>
                                            <ListItem button>
                                                <div data-toggle="modal" data-target="#exampleModalScrollable" onClick={() => { setOpen(false) }}>
                                                    <ListItemText primary={'Distrito '} />
                                                </div>
                                            </ListItem>
                                            <ListItem button>
                                                <div data-toggle="modal" data-target="#exampleModalScrollable" onClick={() => { setOpen(false) }}>
                                                    <ListItemText primary={'Bairro '} />
                                                </div>
                                            </ListItem>
                                            <ListItem button>
                                                <div data-toggle="modal" data-target="#exampleModalScrollable" onClick={() => { setOpen(false) }}>
                                                    <ListItemText primary={'Tipo de Propriedade '} />
                                                </div>
                                            </ListItem>
                                        </>
                                    }
                                </List>
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                {funcao == 'user' ?
                    <AccountCircleIcon style={{ cursor: 'pointer' }} onClick={handleClick('bottom-end')} />
                    :
                    <Fab className={classes.fab} color='primary' onClick={handleClick('top-end')}>
                        <AddIcon />
                    </Fab>
                }
            </div>

            <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
