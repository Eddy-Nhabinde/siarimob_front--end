import { Button as Btn, makeStyles, Paper } from "@material-ui/core";
import React, { useContext, useEffect, useState } from 'react';
import Input from "../../components/textField/textField";
import { GetRequests } from "../../requests/Get/Request";
import Modal from 'react-bootstrap/Modal';
import SelectM from "../../components/select/select";
import Button from 'react-bootstrap/Button';
import { Arrendamento } from "../../requests/Post/novoArrendamento";
import SimpleBackdrop from "../../components/backdrop/backdrop";
import Snack from "../../components/alerts/Alerts";
import { AlertContext } from "../../contexts/alertContext";
import { BackdropContext } from "../../contexts/backdropContext";

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
    const { setAlertContext } = useContext(AlertContext)
    const { setBackdropContext } = useContext(BackdropContext)
    const [, setOpen] = setAlertContext
    const [, setOpenBackdrop] = setBackdropContext

    const { requisicoes, answerRequest } = GetRequests()
    const [req, setReq] = useState([])
    const [date, setDate] = useState('')
    const [Todas, setTodas] = useState(0)
    const [modalShow, setModalShow] = useState(false);
    const [value, setValue] = useState(0);
    const [preco, setpreco] = useState(0);
    const [casaId, setCasaId] = useState(0);
    const [reqid, setRequid] = useState(0);
    const [resp, setResp] = useState('');
    const { NovoArrendamento } = Arrendamento()

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
                setReq(response[0])
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            let minhas = sessionStorage.getItem("acesso") == 'normal'
            let response = await requisicoes(date, Todas, minhas)
            if (response.error) {
                // setOpen(true)
                // setMessage('Email ou senha errada')
            } else {
                setReq(response[0])
                console.log(response[0], 4)
            }
        })()
    }, [date, Todas])

    function answer(operacao, id) {
        (async () => {
            setOpenBackdrop(true)
            let resp = operacao == 1 ? 'Aceite' : 'Negado'
            let response = await answerRequest(resp, id)
            if (response.error) {
                // setOpen(true)
                // setMessage('Email ou senha errada')
            } else {
                setOpen(true)
                setResp('Requisicao respondida com sucesso')
            }

            setOpenBackdrop(false)
        })()
    }

    function complete() {
        (async () => {
            let response = await NovoArrendamento(casaId, value, preco * value, reqid)
            if (response.error) {
                // setOpen(true)
                // setMessage('Email ou senha errada')
            } else {
                setOpen(true)
                setResp('Arrendamento feito com sucesso!')
            }
        })()
    }

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Completar Arrendamento
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <SelectM Label='Duracao' data={[
                            {
                                id: 1,
                                nome: '1 mes'
                            },
                            {
                                id: 2,
                                nome: '2 meses'
                            },
                            {
                                id: 3,
                                nome: '3 meses'
                            },
                            {
                                id: 4,
                                nome: '4 meses'
                            },
                            {
                                id: 5,
                                nome: '5 meses'
                            },
                            {
                                id: 6,
                                nome: '6 meses'
                            }
                        ]}
                            setValue={setValue}
                        />
                        <span>Valor a Pagar:&nbsp;&nbsp;&nbsp;{value * preco}.00Mt</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => complete()} >Pagar</Button>{' '}
                    <Button variant="danger" onClick={() => setModalShow(false)} >Cancelar</Button>{' '}
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>Requisicoes</h1>
                <div style={{ display: 'flex' }} >
                    <Input label='Pesquisa por Bairro' tipo='date' value={date} InputChanged={InputChanged} />
                    <Btn style={{ width: '100px', marginBottom: '10px', marginTop: '6px' }} size='small' variant="contained" color="primary" disableElevation onClick={() => { setTodas(Todas + 1) }}>
                        Todas
                    </Btn>
                </div>
            </div>
            <hr></hr>
            <div style={{ display: 'grid', gridTemplateColumns: '33% 33% 33%', justifyContent: 'space-around', marginTop: '-20px' }}>
                {
                    req && req.map((requuisicao) => {
                        return (
                            <Paper className={classes.root}>
                                <h4>{requuisicao.status}</h4>
                                <img src={"http://localhost:8000/images/" + requuisicao.foto} style={{ borderRadius: '10px' }} />
                                <table style={{ marginLeft: '10px', marginTop: '15px' }}>
                                    <tr>
                                        <td><h1 style={{ fontWeight: 'bold' }} >Bairro:</h1></td>
                                        <td style={{ paddingLeft: '50px' }} ><h1>{requuisicao.nomeBairro}</h1></td>
                                    </tr>
                                    <tr>
                                        <td><h1 style={{ fontWeight: 'bold' }} >Tipo:</h1></td>
                                        <td style={{ paddingLeft: '50px' }} ><h1>{requuisicao.nomeTipo}</h1></td>
                                    </tr>
                                    <tr>
                                        <td><h1 style={{ fontWeight: 'bold' }} >Preco:</h1></td>
                                        <td style={{ paddingLeft: '50px' }} ><h1>{requuisicao.preco}</h1></td>
                                    </tr>
                                    <tr>
                                        <td><h1 style={{ fontWeight: 'bold' }} >Requerente:</h1></td>
                                        <td style={{ paddingLeft: '50px' }} ><h1>{requuisicao.nome} {requuisicao.apelido}</h1></td>
                                    </tr>
                                    <tr>
                                        <td><h1 style={{ fontWeight: 'bold' }} >Contacto:</h1></td>
                                        <td style={{ paddingLeft: '50px' }} ><h1>{requuisicao.contacto}</h1></td>
                                    </tr>
                                    <tr>
                                        <td><h1 style={{ fontWeight: 'bold' }} >Data:</h1></td>
                                        <td style={{ paddingLeft: '50px' }} ><h1>{requuisicao.data}</h1></td>
                                    </tr>
                                </table>
                                {
                                    sessionStorage.getItem("acesso") != 'normal' ?
                                        !!(requuisicao.status == 'Pendente') &&
                                        <>
                                            <Btn style={{ width: '150px', marginTop: '13px' }} size='small' variant="contained" color="primary" disableElevation onClick={() => { answer(1, requuisicao.reqId) }} >
                                                Aceitar
                                            </Btn>
                                            <Btn style={{ width: '150px', marginTop: '13px', marginLeft: '10px' }} size='small' variant="contained" color="secondary" disableElevation onClick={() => { answer(0, requuisicao.reqId) }} >
                                                Recusar
                                            </Btn>
                                        </>
                                        :
                                        <>
                                            {
                                                !!(requuisicao.status != 'Completo' & requuisicao.status != 'Negado' & requuisicao.status != 'Pendente') &&
                                                <Btn onClick={() => { setModalShow(true); setpreco(requuisicao.preco); setCasaId(requuisicao.propId); setRequid(requuisicao.reqId) }} style={{ width: '150px', marginTop: '13px' }} size='small' variant="contained" color="primary" disableElevation >
                                                    Completar
                                                </Btn>
                                            }
                                        </>
                                }
                            </Paper>
                        )
                    })
                }
            </div>
            <Snack severity='success' message={resp} />
            <SimpleBackdrop />
            <MyVerticallyCenteredModal
                show={modalShow}
            />
        </>

    )
}