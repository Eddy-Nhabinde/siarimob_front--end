// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import styles from './card.module.css'
// const useStyles = makeStyles({
//     root: {
//         maxWidth: 345,
//         margin: 10,
//     },
//     media: {
//         height: 240,
//     },
// });
// export default function MediaCard() {
//     const classes = useStyles();

//     return (
//         <Card className={classes.root}>
//             <CardActionArea>
//                 <CardMedia
//                     className={classes.media}
//                     image={require('../../assets/foto.jpg')}
//                     title="Contemplative Reptile"
//                 />
//                 <CardContent>
//                     <div className={styles.container}>
//                         <div className={styles.titulos}>
//                             <span>Bairro</span>
//                             <span>Tipo</span>
//                             <span>Preco</span>
//                         </div>
//                         <div className={styles.values}>
//                             <span>Munhava</span>
//                             <span>Tipo 1</span>
//                             <span>3000</span>
//                         </div>
//                     </div>
//                     {/* <Typography gutterBottom variant="h5" component="h2">
//                        Bairro
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//                         across all continents except Antarctica
//                     </Typography> */}
//                 </CardContent>
//             </CardActionArea>
//         </Card>
//     );
// }


import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Botao from '../button/button';

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
        marginTop:'15px'
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
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography style={{  fontSize: '20px', marginBottom: '10px' }} component="h6" variant="h5">
                        Bairro
                    </Typography>
                    <Typography style={{  fontSize: '20px', marginBottom: '10px' }} component="h5" variant="h5">
                        Tipo 1
                    </Typography>
                    <Typography style={{ fontSize: '20px', marginBottom: '10px' }} component="h5" variant="h5">
                        3000.00MT
                    </Typography>
                </CardContent>
                <div style={{width:'100px', margin:'24px'}}>
                    <Botao color='primary' text='Detalhes' />
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image={require('../../assets/foto.jpg')}
                title="Live from space album cover"
            />
        </Card>
    );
}

