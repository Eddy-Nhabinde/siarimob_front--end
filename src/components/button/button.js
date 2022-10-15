import React from 'react';
import Button from '@material-ui/core/Button';

export default function Botao({ color, text }) {
    return (
        <Button size='small' variant="outlined" color={color} disableElevation>
           <span style={{textTransform:'capitalize'}}> {text}</span>
        </Button>
    );
}
