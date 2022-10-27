import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { List, ListItem, ListItemIcon, ListItemText, Fab } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import { MyVerticallyCenteredModal } from '../boostrapModal/modal';

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
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();
    const [Object, setObject] = useState();
    const [modalShow, setModalShow] = useState(false);

    const classes = useStyles();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
        setPlacement(newPlacement);
    };

    return (
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
                                            <div onClick={() => { setOpen(false); setObject('Provincia'); setModalShow(true) }}>
                                                <ListItemText primary={'Provincia '} />
                                            </div>
                                        </ListItem>
                                        <ListItem button>
                                            <div onClick={() => { setOpen(false); setObject('Distrito'); setModalShow(true) }}>
                                                <ListItemText primary={'Distrito '} />
                                            </div>
                                        </ListItem>
                                        <ListItem button>
                                            <div onClick={() => { setOpen(false); setObject('Bairro'); setModalShow(true) }}>
                                                <ListItemText primary={'Bairro '} />
                                            </div>
                                        </ListItem>
                                        <ListItem button>
                                            <div onClick={() => { setOpen(false); setObject('Tipo de Propriedade'); setModalShow(true) }}>
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

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                obj={Object}
                setModalShow={setModalShow}
            />
        </div>


    );
}
