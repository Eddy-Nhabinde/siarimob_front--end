import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '35ch',
        },
    },
}));


export default function Input({ label, tipo, InputChanged, value }) {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    placeholder={label}
                    type={tipo}
                    size='small'
                    id="filled-required"
                    variant="outlined"
                    onChange={InputChanged}
                    value={value}
                />
            </div>
        </form>
    );
}
