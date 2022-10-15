import React from 'react';
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

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: '30px'
    },
    container: {
        maxHeight: 440,
    },
});

export default function Props() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [register, SetRegister] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Filter />
                <button style={{ height: '40px', marginTop: '25px' }} type="button" class="btn btn-info" onClick={() => { SetRegister(!register);  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}> <PlusOneIcon /> Adicionar</button>
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
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td >
                                <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Editar</button>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td >
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
            <div style={{ display: register ? 'block' : 'none' }} className={styles.container}>
                <h1 className={styles.h1}>Registe uma nova proprieade</h1>
                <hr></hr>
                <div className={styles.select}>
                    <h1 className={styles.h1} style={{ marginTop: '8px' }}>Localizacao: </h1>
                    <SelectM Label='Provincia' />
                    <SelectM Label='Distrito' />
                    <SelectM Label='Bairro' />
                </div>
                <div className={styles.secondDiv}>
                    <div>
                        <h1 className={styles.h1} style={{ marginTop: '10px' }}>Tipo:</h1>
                        <SelectM Label='Tipo' />
                    </div>
                    <div className={styles.renda}>
                        <h1 className={styles.h1} style={{ marginTop: '10px' }}>Renda:</h1>
                        <NumberInput />
                    </div>
                    <div className={styles.foto}>
                        <h1 className={styles.h1} style={{ marginTop: '10px' }}>Foto:</h1>
                        <Input tipo='file' />
                    </div>
                </div>
                <h1 className={styles.h1} style={{ marginTop: '10px' }}>Descricao:</h1>
                <TextareaAutosize style={{ width: '100%', boxShadow: 'none', border: 'none', outline: 'none', marginTop: '5px' }} aria-label="minimum height" minRows={3} />
                <div style={{ marginLeft: '81%', marginTop: '20px' }}>
                    <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Salvar</button>
                    <button type="button" class="btn btn-danger">Cancelar</button>
                </div>
            </div>
        </>
    );
}
