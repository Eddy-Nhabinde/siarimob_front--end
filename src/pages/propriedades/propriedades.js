import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import styles from './propriedades.module.css'
import { Filter } from '../../components/filterComponent/filter';
const columns = [
    { id: 'name', label: '#', minWidth: 170 },
    { id: 'code', label: 'Codigo', minWidth: 100 },
    {
        id: 'population',
        label: 'Tipo',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Bairro',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Estado',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'Acc',
        label: 'Accoes',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size, Acc) {
    const density = population / size;
    return { name, code, population, size, density, Acc };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263, 's'),
    createData('China', 'CN', 1403500365, 9596961, 's'),
    createData('Italy', 'IT', 60483973, 301340, 's'),
    createData('United States', 'US', 327167434, 9833520, 's'),
    createData('Canada', 'CA', 37602103, 9984670, 's'),
    createData('Australia', 'AU', 25475400, 7692024, 's'),
    createData('Germany', 'DE', 83019200, 357578, 's'),
    createData('Ireland', 'IE', 4857000, 70273, 's'),
    createData('Mexico', 'MX', 126577691, 1972550, 's'),
    createData('Japan', 'JP', 126317000, 377973, 's'),
    createData('France', 'FR', 67022000, 640679, 's'),
    createData('United Kingdom', 'GB', 67545757, 242495, 's'),
    createData('Russia', 'RU', 146793744, 17098246, 's'),
    createData('Nigeria', 'NG', 200962417, 923768, 's'),
    createData('Brazil', 'BR', 210147125, 8515767, 's'),
];

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop:'30px'
    },
    container: {
        maxHeight: 440,
    },
});

export default function Props() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
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
            <Filter />
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
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper >
        </>
    );
}
