import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SelectM from '../select/select';
import { SelectData } from '../../requests/Get/SelectFiller';
import { useContext, useEffect, useState } from 'react';
import Input from '../textField/textField';
import { BackdropContext } from '../../contexts/backdropContext'
import SimpleBackdrop from '../backdrop/backdrop';
import Snack from '../alerts/Alerts';
import { AlertContext } from '../../contexts/alertContext';
import { saveDisTrictProvinceBairros } from '../../requests/Post/saveDisProvPropTypBiarro';

export function MyVerticallyCenteredModal(props) {
    const [Provincia, setProvincia] = useState([]);
    const [Distrito, setDistrito] = useState([]);
    const { Province, District, } = SelectData()
    const { setBackdropContext } = useContext(BackdropContext)
    const [, setOpenBackdrop] = setBackdropContext
    const { setAlertContext } = useContext(AlertContext)
    const [, setOpen] = setAlertContext
    const [message, setMessage] = useState(false)
    const [SomethingID, setSomethingID] = useState(null)
    const [severity, setSeverity] = useState('warning')
    const { saveDistrict, saveProvince, savePRopType, SaveBairro } = saveDisTrictProvinceBairros()
    let nome;

    const Name = (e) => {
        nome = e.target.value
    }

    useEffect(() => {
        if (props.obj === 'Bairro') {
            (async () => {
                let response = await District()
                console.log(response)
                if (response) {
                    setDistrito(response)
                }
            })()
        } else if (props.obj === 'Distrito') {
            (async () => {
                let response = await Province()
                if (response) {
                    setProvincia(response)
                }
            })()
        }

    }, [props.obj])

    function Save() {
        setOpenBackdrop(true)
        if ((props.obj == 'Bairro' || props.obj == 'Distrito') & (!nome || !SomethingID)) {
            setMessage('Por favor preencha todos os campos')
            setOpen(true)
            setOpenBackdrop(false)
        } else if (!nome) {
            setMessage('Nome invalido')
            setOpen(true)
            setOpenBackdrop(false)
        } else {
            (async () => {
                let response

                switch (props.obj) {
                    case 'Bairro':
                        response = await SaveBairro(nome, SomethingID)
                        break;
                    case 'Distrito':
                        response = await saveDistrict(nome, SomethingID)
                        break;
                    case 'Provincia':
                        response = await saveProvince(nome)
                        break;
                    default:
                        response = await savePRopType(nome)
                        break;
                }

                if (response.error) {
                    setOpenBackdrop(false)
                    setMessage(response.error)
                    setSeverity('error')
                    setOpen(true)
                } else {
                    setOpenBackdrop(false)
                    setSeverity('success')
                    setMessage('Registo feito com sucesso')
                    setOpen(true)
                }
                props.setModalShow(false)
            })()
        }
    }

    return (
        <>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3 style={{ fontSize: '21px' }}> Registando {props.obj}</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table style={{ marginTop: '-10px' }}>
                        <tr>
                            <td>
                                <h1>Nome</h1>
                            </td>
                            <td>
                                <Input label='Nome' tipo='text' InputChanged={Name} />
                            </td>
                        </tr>
                        {props.obj === 'Distrito' ?
                            <tr>
                                <td>
                                    <h1>Provincia</h1>
                                </td>
                                <td>
                                    <SelectM setValue={setSomethingID} data={Provincia} label='Email' tipo='email' />
                                </td>
                            </tr>
                            :
                            props.obj === 'Bairro' ?
                                <tr>
                                    <td>
                                        <h1>Distrito</h1>
                                    </td>
                                    <td>
                                        <SelectM setValue={setSomethingID} data={Distrito} label='Email' tipo='email' />
                                    </td>
                                </tr>
                                :
                                ""

                        }
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <td style={{ width: '38%' }}>
                        <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary" onClick={() => Save()}>Salvar</button>
                        <button type="button" class="btn btn-danger">Cancelar</button>
                    </td>
                </Modal.Footer>
            </Modal>
            <Snack severity={severity} message={message} modal={true} />
            <SimpleBackdrop />
        </>
    );
}
