import { makeStyles, Paper, TablePagination } from "@material-ui/core";
import React from 'react';


const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: '30px'
    },
    container: {
        maxHeight: 440,
    },
});

export function Lista() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [register, SetRegister] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
    }
    return (
        <>
            <nav class="navbar" style={{marginLeft:'-15px', marginBottom:'-40px', marginTop:'20px'}}>
                <form class="form-inline">
                    <input style={{width:'350px'}} class="form-control mr-sm-2" type="search" placeholder="Pesquise pelo nome/ apelido/ contacto" aria-label="Search" />
                    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
            <Paper className={classes.root}>
                <table class="table" style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Apelido</th>
                            <th scope="col">Contacto</th>
                            <th scope="col">Propriedade</th>
                            <th scope="col">Estado</th>
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
                            <td style={{ width: '23%' }}>
                                <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Remover</button>
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
                                <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Remover</button>
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
                                <button style={{ marginRight: '15px' }} type="button" class="btn btn-primary">Remover</button>
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
        </>
    )
}