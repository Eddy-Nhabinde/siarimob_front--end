import { makeStyles, Paper } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { GetRequests } from "../../requests/Get/getRequest";

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: '30px'
    },
    container: {
        maxHeight: 440,
    },
});

export function Requests() {
    const classes = useStyles();
    const { requisicoes } = GetRequests()
    const [req, setReq] = useState([])

    useEffect(() => {
        (async () => {
            let response = await requisicoes()
            if (response.error) {
                // setOpen(true)
                // setMessage('Email ou senha errada')
            } else {
                setReq(response)
            }
        })()
    }, [])
    console.log(req)
    return (
        <Paper className={classes.root}>

        </Paper>
    )
}