import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styles from './modalDialog.module.css'
import { Avatar, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function TransitionsModal({ open, setOpen }) {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={styles.container}>
                    <div className={styles.dono}>
                        <span>Publicado por:</span>
                        <h4>Edmilson Nhabinde</h4>
                    </div>
                    <div className={styles.paper}>
                        <img src={require('../../assets/edddd.jpg')} />
                        <div className={styles.details}>
                            <h1>Descricao</h1>
                            <hr />
                            <p>
                                Edmilson Edmilson EdmilsonEdmilsonEdmilson Edmilson
                                EdmilsonEdmilson Edmilson EdmilsonEdmilson EdmilsonEdmilson
                            </p>
                            <div>
                                <h1>Bairro</h1>
                                <span>Zimpeto</span>
                            </div>
                            <div>
                                <h1>Tipo</h1>
                                <span>Tipo 1</span>
                            </div>
                            <div>
                                <h1>Renda</h1>
                                <span>3000</span>
                            </div>
                            <div className={styles.location}>
                                <h1>Localizacao</h1>
                                <span>Avenida de Mocambique bla bla bla</span>
                            </div>
                            <Button style={{ width: '150px', marginTop: '43px' }} size='small' variant="contained" color="primary" disableElevation>
                                <span style={{ textTransform: 'capitalize' }}>Arrendar</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
}
