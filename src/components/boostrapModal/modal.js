import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SelectM from '../select/select';
import { SelectData } from '../../requests/Get/SelectFiller';
import { useEffect, useState } from 'react';
import Input from '../textField/textField';

export function MyVerticallyCenteredModal(props) {
    const [Provincia, setProvincia] = useState([]);
    const [Distrito, setDistrito] = useState([]);
    const { Province, District, } = SelectData()

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

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Registando {props.obj}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table style={{ marginTop: '-10px' }}>
                    <tr>
                        <td>
                            <h1>Nome</h1>
                        </td>
                        <td>
                            <Input label='Email' tipo='email' />
                        </td>
                    </tr>
                    {props.obj === 'Distrito' ?
                        <tr>
                            <td>
                                <h1>Provincia</h1>
                            </td>
                            <td>
                                <SelectM data={Provincia} label='Email' tipo='email' />
                            </td>
                        </tr>
                        :
                        props.obj === 'Bairro' ?
                            <tr>
                                <td>
                                    <h1>Distrito</h1>
                                </td>
                                <td>
                                    <SelectM data={Distrito} label='Email' tipo='email' />
                                </td>
                            </tr>
                            :
                            ""

                    }
                </table>
            </Modal.Body>
            <Modal.Footer>
                <td style={{ width: '38%' }}>
                    <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Salvar</button>
                    <button type="button" class="btn btn-danger">Cancelar</button>
                </td>
            </Modal.Footer>
        </Modal>
    );
}
