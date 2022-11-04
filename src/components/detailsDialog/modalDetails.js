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

export default function TransitionsModal({ open, setOpen, casa }) {
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
                        <img src={"http://localhost:8000/images/" + casa.foto} />
                        <div className={styles.details}>
                            <h1>Descricao</h1>
                            <hr />
                            <p>
                               {casa.descricao}
                            </p>
                            <div>
                                <h1>Bairro</h1>
                                <span>{casa.nome}</span>
                            </div>
                            <div>
                                <h1>Tipo</h1>
                                <span>{casa.tipoNome}</span>
                            </div>
                            <div>
                                <h1>Renda</h1>
                                <span>{casa.preco}</span>
                            </div>
                            <div className={styles.location}>
                                <h1>Localizacao</h1>
                                <span>Avenida de Mocambique bla bla bla</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }} >
                                <Button style={{ width: '150px', marginTop: '13px' }} size='small' variant="contained" color="primary" disableElevation>
                                    <span style={{ textTransform: 'capitalize', marginLeft: '-40px' }}>Arrendar</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
}
