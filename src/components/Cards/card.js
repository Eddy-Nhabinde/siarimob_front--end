import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Botao from '../button/button';
import TransitionsModal from "../detailsDialog/modalDetails.js";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxWidth: 365,
        margin: 10,
        height: 230
    },
    details: {
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        marginTop: '15px'
    },
    cover: {
        width: '55%',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MediaControlCard() {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    return (
        <>
            <TransitionsModal open={open} setOpen={setOpen} />
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography style={{ fontSize: '20px', marginBottom: '10px' }} component="h6" variant="h5">
                            Bairro
                        </Typography>
                        <Typography style={{ fontSize: '20px', marginBottom: '10px' }} component="h5" variant="h5">
                            Tipo 1
                        </Typography>
                        <Typography style={{ fontSize: '20px', marginBottom: '10px' }} component="h5" variant="h5">
                            3000.00MT
                        </Typography>
                    </CardContent>
                    <div style={{ width: '100px', margin: '24px' }} onClick={() => { setOpen(true) }} >
                        <Botao color='primary' text='Detalhes' />
                    </div>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={require('../../assets/foto.jpg')}
                    title="Live from space album cover"
                />
            </Card>
        </>
    );
}

