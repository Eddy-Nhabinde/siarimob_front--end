import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import styles from './propriedades.module.css'
import { Filter } from '../../components/filterComponent/filter';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import SelectM from '../../components/select/select';
import Input from '../../components/textField/textField';
import NumberInput from '../../components/numberInput/numberInput';
import { TextareaAutosize } from '@material-ui/core';
import { SelectData } from '../../requests/Get/SelectFiller';
import { SaveProp } from '../../requests/Post/saveProp';
import SimpleBackdrop from '../../components/backdrop/backdrop';
import Snack from '../../components/alerts/Alerts';
import { AlertContext } from '../../contexts/alertContext';
import { BackdropContext } from '../../contexts/backdropContext';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: '30px',
    },
    container: {
        maxHeight: 440,
    },
});

export default function Props() {
    const classes = useStyles();
    const { setAlertContext } = useContext(AlertContext)
    const { setBackdropContext } = useContext(BackdropContext)
    const [, setOpen] = setAlertContext
    const [, setOpenBackdrop] = setBackdropContext

    const [page, setPage] = useState(0);

    const [provinceData, setProvinceData] = useState([]);
    const [DistritoData, setDistritoData] = useState([]);
    const [BairroData, setBairroData] = useState([]);
    const [TipoData, setTipoData] = useState([]);

    const [Provincia, setProvincia] = useState("");
    const [Distrito, setDistrito] = useState("");
    const [TipoValue, setTipoValue] = useState("");
    const [Bairro, setBairro] = useState("");
    const [Desc, setDesc] = useState("");
    const [Valor, setValor] = useState("");
    const [Picture, setPicture] = useState("");
    const [register, SetRegister] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [message, setMessage] = useState("")
    const [severity, setSeverity] = useState('warning')

    const { Province, District, Neighborhood, Tipo } = SelectData()
    const { SavingProp } = SaveProp()

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const Renda = (e) => {
        setValor(e.target.value)
    }

    const foto = (e) => {
        setPicture(e.target.files[0])
    }

    const description = (e) => {
        setDesc(e.target.value)
    }

    function getProvince() {
        (async () => {
            let response = await Province()
            if (response) {
                setProvinceData(response)
            }
        })()
    }

    function Gravar(e) {
        e.preventDefault()
        const data = new FormData()
        if (!Bairro || !Picture || !Valor || !Desc || !TipoValue) {
            setOpen(true)
            setMessage('Por favor preencha todos os campos')
        } else {
            (async () => {
                setOpenBackdrop(true)
                
                data.append('image', Picture)
                data.append('Bairro', Bairro)
                data.append('Valor', Valor)
                data.append('Desc', Desc)
                data.append('TipoValue', TipoValue)

                let response = await SavingProp(data)
                if (response.error) {
                    setOpenBackdrop(false)
                    setMessage(response.error)
                    setSeverity('error')
                    setOpen(true)
                } else {
                    setOpenBackdrop(false)
                    setSeverity('success')
                    setMessage(response.data)
                    setOpen(true)
                }
            })()
        }
    }

    useEffect(() => {
        (async () => {
            let response = await Tipo()
            if (response) {
                setTipoData(response)
            }
        })()
    }, [Provincia])

    useEffect(() => {
        if (Provincia) {
            (async () => {
                let response = await District(Provincia)
                if (response.length > 0) {
                    setDistritoData(response)
                } else {
                    setDistritoData([])
                }
            })()
        }
    }, [Provincia])

    useEffect(() => {
        if (Distrito) {
            (async () => {
                let response = await Neighborhood(Distrito)
                if (response.length > 0) {
                    setBairroData(response)
                } else {
                    setBairroData([])
                }
            })()
        }
    }, [Distrito])

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Filter />
                <button style={{ height: '40px', marginTop: '25px' }} type="button" class="btn btn-info"
                    onClick={() => { SetRegister(!register); getProvince() }}>
                    <PlusOneIcon /> Adicionar</button>
            </div>
            <Paper className={classes.root}>
                <table class="table" style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Cod</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Bairro</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Preco</th>
                            <th scope="col">Accoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td style={{ width: '20%' }}>
                                <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Editar</button>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    // count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper >
            <Paper className={classes.root}>
                <div style={{ display: register ? 'block' : 'none' }} className={styles.container}>
                    <form onSubmit={Gravar} encType="multipart/form-data">
                        <h1 className={styles.h1}>Registe uma nova proprieade</h1>
                        <hr></hr>
                        <div className={styles.select}>
                            <h1 className={styles.h1} style={{ marginTop: '8px' }}>Localizacao: </h1>
                            <SelectM setValue={setProvincia} data={provinceData} Label='Provincia' />
                            <SelectM setValue={setDistrito} data={DistritoData} Label='Distrito' />
                            <SelectM setValue={setBairro} data={BairroData} Label='Bairro' />
                        </div>
                        <div className={styles.secondDiv}>
                            <div>
                                <h1 className={styles.h1} style={{ marginTop: '10px' }}>Tipo:</h1>
                                <SelectM data={TipoData} setValue={setTipoValue} Label='Tipo' />
                            </div>
                            <div className={styles.renda}>
                                <h1 className={styles.h1} style={{ marginTop: '10px' }}>Renda:</h1>
                                <NumberInput inpuChanged={Renda} />
                            </div>
                            <div className={styles.foto}>
                                <h1 className={styles.h1} style={{ marginTop: '10px' }}>Foto:</h1>
                                <Input tipo='file' InputChanged={foto} />
                            </div>
                        </div>
                        <h1 className={styles.h1} style={{ marginTop: '10px' }}>Descricao:</h1>
                        <TextareaAutosize style={{ width: '100%', outline: 'none', marginTop: '5px' }} onChange={(e) => { description(e) }} aria-label="minimum height" minRows={3} />
                        <div style={{ marginLeft: '81%', marginTop: '20px' }}>
                            <button style={{ marginRight: '15px' }} type="submit"
                                class="btn btn-primary" >Salvar</button>
                            <button type="button" class="btn btn-danger">Cancelar</button>
                        </div>
                    </form>
                </div>
            </Paper>
            <Snack severity={severity} message={message} />
            <SimpleBackdrop />
        </>
    );
}
