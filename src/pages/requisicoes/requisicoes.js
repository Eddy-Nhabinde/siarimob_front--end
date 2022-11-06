import { Button, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import Input from "../../components/textField/textField";
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
    const [date, setDate] = useState('')
    const [Todas, setTodas] = useState(0)


    const InputChanged = (e) => {
        setDate(e.target.value)
        setTodas(0)
    }

    useEffect(() => {
        (async () => {
            let response = await requisicoes()
            if (response.error) {
                // setOpen(true)
                // setMessage('Email ou senha errada')
            } else {
                setReq(response)
            }
            console.log(response, 4)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            let response = await requisicoes(date, Todas)
            if (response.error) {
                // setOpen(true)
                // setMessage('Email ou senha errada')
            } else {
                setReq(response)
            }
        })()
    }, [date, Todas])
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>Requisicoes</h1>
                <div style={{ display: 'flex' }} >
                    <Input label='Pesquisa por Bairro' tipo='date' value={date} InputChanged={InputChanged} />
                    <Button style={{ width: '100px', marginBottom: '10px', marginTop: '6px' }} size='small' variant="contained" color="primary" disableElevation onClick={() => { setTodas(Todas + 1) }}>
                        Todas
                    </Button>
                </div>
            </div>
            <hr></hr>
            <div style={{ display: 'grid', gridTemplateColumns: '33% 33% 33%', justifyContent: 'space-around', marginTop: '-20px' }}>
                {
                    req && req.map((requuisicao) => {
                        if (requuisicao[0]) {
                            return (
                                <Paper className={classes.root}>
                                    <img src={"http://localhost:8000/images/" + requuisicao[0].foto} style={{ borderRadius: '10px' }} />
                                    <table style={{ marginLeft: '10px', marginTop: '15px' }}>
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
                                        <tr>
                                            <td><h1 style={{ fontWeight: 'bold' }} >Data:</h1></td>
                                            <td style={{ paddingLeft: '50px' }} ><h1>{requuisicao[0].data}</h1></td>
                                        </tr>
                                    </table>
                                    <Button style={{ width: '150px', marginTop: '13px' }} size='small' variant="contained" color="primary" disableElevation >
                                        Aceitar
                                    </Button>
                                    <Button style={{ width: '150px', marginTop: '13px', marginLeft: '10px' }} size='small' variant="contained" color="secondary" disableElevation >
                                        Recusar
                                    </Button>
                                </Paper>
                            )
                        }
                    })
                }
            </div></>

    )
}