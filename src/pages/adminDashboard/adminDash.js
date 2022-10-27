import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import PositionedPopper from "../../components/popver/Popover";

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
                                    <th scope="col">Accoes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td style={{ width: '40%' }}>
                                        <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>

                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td style={{ width: '40%' }}>
                                        <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>

                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
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


