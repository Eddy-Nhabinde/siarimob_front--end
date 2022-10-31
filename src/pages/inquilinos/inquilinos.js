import { makeStyles, Paper, TablePagination } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { GetInq } from "../../requests/Get/getInquilinos";

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
    const [inq, setInq] = useState([])
    const { Inquilinos } = GetInq()

    useEffect(() => {
        (async () => {
            let response = await Inquilinos()

            if (response) {
                setInq(response)
            }
        })()
    }, [])


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
    }
    return (
        <>
            <nav class="navbar" style={{ marginLeft: '-15px', marginBottom: '-40px', marginTop: '20px' }}>
                <form class="form-inline">
                    <input style={{ width: '350px' }} class="form-control mr-sm-2" type="search" placeholder="Pesquise pelo nome/ apelido/ contacto" aria-label="Search" />
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
                        {inq?.map((val, id) => {
                            return (
                                <tr>
                                    <th scope="row">{id + 1}</th>
                                    <td>{val.nomeInq}</td>
                                    <td>{val.apelido}</td>
                                    <td>{val.contacto}</td>
                                    <td>{val.propID}</td>
                                    <td>{val.estado}</td>
                                    <td style={{ width: '15%' }}>
                                        {val.estado == 'Em curso' ? <button type="button" class="btn btn-danger">Cancelar</button> : ""}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Paper >
        </>
    )
}