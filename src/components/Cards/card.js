import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './card.module.css'
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 10,
    },
    media: {
        height: 240,
    },
});
export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={require('../../assets/foto.jpg')}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <div className={styles.container}>
                        <div className={styles.titulos}>
                            <span>Bairro</span>
                            <span>Tipo</span>
                            <span>Preco</span>
                        </div>
                        <div className={styles.values}>
                            <span>Munhava</span>
                            <span>Tipo 1</span>
                            <span>3000</span>
                        </div>
                    </div>
                    {/* <Typography gutterBottom variant="h5" component="h2">
                       Bairro
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography> */}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
