import { Button, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { GetRequests } from "../../requests/Get/getRequest";

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: '30px',
        padding: '10px'
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
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '33% 33% 33%', justifyContent: 'space-around' }}>
            {
                req && req.map((requuisicao) => {
                    console.log(requuisicao)
                    return (
                        <Paper className={classes.root}>
                            <img src={"http://localhost:8000/images/" + requuisicao[0].foto} style={{ borderRadius: '10px' }} />
                            <table style={{ marginTop: '8px' }} style={{ marginLeft: '10px', marginTop: '15px' }}>
                                <tr>
                                    <td><h1 style={{ fontWeight: 'bold' }} >Bairro:</h1></td>
                                    <td style={{ paddingLeft: '50px' }} ><h1>{requuisicao[0].nomeBairro}</h1></td>
                                </tr>
                                <tr>
                                    <td><h1 style={{ fontWeight: 'bold' }} >Tipo:</h1></td>
                                    <td style={{ paddingLeft: '50px' }} ><h1>{requuisicao[0].nomeTipo}</h1></td>
                                </tr>
                                <tr>
                                    <td><h1 style={{ fontWeight: 'bold' }} >Preco:</h1></td>
                                    <td style={{ paddingLeft: '50px' }} ><h1>{requuisicao[0].preco}</h1></td>
                                </tr>
                                <tr>
                                    <td><h1 style={{ fontWeight: 'bold' }} >Requerente:</h1></td>
                                    <td style={{ paddingLeft: '50px' }} ><h1>{requuisicao[0].nome} {requuisicao[0].apelido}</h1></td>
                                </tr>
                                <tr>
                                    <td><h1 style={{ fontWeight: 'bold' }} >Contacto:</h1></td>
                                    <td style={{ paddingLeft: '50px' }} ><h1>{requuisicao[0].contacto}</h1></td>
                                </tr>
                            </table>
                            <Button style={{ width: '150px', marginTop: '13px' }} size='small' variant="contained" color="primary" disableElevation >
                                Aceitar
                            </Button>
                            <Button style={{ width: '150px', marginTop: '13px', marginLeft:'10px' }} size='small' variant="contained" color="secondary" disableElevation >
                                Recusar
                            </Button>
                        </Paper>
                    )
                })
            }
        </div>

    )
}