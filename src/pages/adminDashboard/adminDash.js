import { makeStyles, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import PositionedPopper from "../../components/popver/Popover";
import { SelectData } from "../../requests/Get/SelectFiller";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '10px',
        padding: '20px'
    },
    container: {
        maxHeight: 440,
    },
}));

export function Dashboard() {
    const classes = useStyles();
    const [Provincia, setProvincia] = useState([]);
    const [Distrito, setDistrito] = useState([]);
    const [Bairro, setBairro] = useState([]);
    const [Type, setType] = useState([]);
    const { Province, District, Neighborhood, Tipo } = SelectData(1)

    useEffect(() => {
        (async () => {
            let response = await Province()
            let response2 = await District()
            let response3 = await Neighborhood()
            let response4 = await Tipo()

            if (response && response2 && response3 && response4) {
                setDistrito(response2)
                setProvincia(response)
                setBairro(response3)
                setType(response4)
            }
        })()
    }, [])

    console.log(Provincia, Distrito, Bairro,Type)
    return (
        <>
            <Paper className={classes.root}>
                <div style={{ display: 'grid', gridTemplateColumns: '48% 48%' }}>
                    <div style={{ marginRight: '30px' }}>
                        <h3 style={{ marginBottom: '-50px', marginTop: '50px' }}>Provincias</h3>
                        <table class="table table-bordered" style={{ borderLeft: 'solid 1px gray' }} >
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Toatal Distritos</th>
                                    <th scope="col">Accoes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Mark</td>
                                    <td style={{ width: '40%' }}>
                                        <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>

                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Mark</td>
                                    <td style={{ width: '40%' }}>
                                        <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>

                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>Mark</td>
                                    <td style={{ width: '40%' }}>
                                        <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{ marginLeft: '70px' }}>
                        <h3 style={{ marginBottom: '-50px', marginTop: '50px' }}>Distritos</h3>
                        <table class="table table-bordered" style={{ borderLeft: 'solid 1px gray' }} >
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Provincia</th>
                                    <th scope="col">Total Bairros</th>
                                    <th scope="col">Accoes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td style={{ width: '38%' }}>
                                        <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>Otto</td>
                                    <td style={{ width: '38%' }}>
                                        <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>Otto</td>
                                    <td style={{ width: '38%' }}>
                                        <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div >
                        <h3 style={{ marginBottom: '-50px', marginTop: '50px' }}>Bairros</h3>
                        <table class="table table-bordered" >
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Distrito</th>
                                    <th scope="col">Provincia</th>
                                    <th scope="col">Accoes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td style={{ width: '40%' }}>
                                        <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>Otto</td>
                                    <td style={{ width: '40%' }}>
                                        <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>Otto</td>
                                    <td style={{ width: '40%' }}>
                                        <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{ marginLeft: '70px' }}>
                        <h3 style={{ marginBottom: '-50px', marginTop: '50px' }}>Tipos de Propriedade</h3>
                        <table class="table table-bordered" >
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Distrito</th>
                                    <th scope="col">Provincia</th>
                                    <th scope="col">Accoes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td style={{ width: '40%' }}>
                                        <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>Otto</td>
                                    <td style={{ width: '40%' }}>
                                        <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>Otto</td>
                                    <td style={{ width: '40%' }}>
                                        <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Paper>
            <PositionedPopper />
        </>
    )
}


