import { Paper } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { useEffect, useState } from 'react'
import ButtonAppBar from '../../components/AppBar/appBar'
import MediaCard from '../../components/Cards/card'
import { Filter } from '../../components/filterComponent/filter'
import { Propss } from '../../requests/Get/getProps'
import styles from './home.module.css'

export function Home() {
    const [Casas, setCasas] = useState([])
    const [BairroFilter, setBairroFilter] = useState("");
    const [TipoFilter, setTipoFilter] = useState("");
    const [PrecoFilter, setPrecoFilter] = useState("");
    const { GetProps } = Propss(true)

    useEffect(() => {
        (async () => {
            let response = await GetProps(BairroFilter, TipoFilter, PrecoFilter, '')

            if (response) {
                setCasas(response)
            }
        })()
    }, [BairroFilter, TipoFilter, PrecoFilter])

    return (
        <div className={styles.container}>
            <ButtonAppBar />
            <Filter setPrecoFilter={setPrecoFilter} setBairroFilter={setBairroFilter} setTipoFilter={setTipoFilter} />
            <Paper style={{ margin: '20px', marginTop: '35px', maxHeight: '100vh', overflow: 'auto' }}>
                <div className={styles.head}>
                    <h1 className={styles.h1}>Propriedades Disponiveis</h1>
                </div>
                <div className={styles.paper}>
                    {
                        Casas?.[0]?.map((val, id) => {
                            return (
                                <div>
                                    <MediaCard casa={val} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.root} >
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </div>
            </Paper>
        </div>
    )
}