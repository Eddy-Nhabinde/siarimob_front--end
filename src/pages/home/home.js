import { Paper } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import ButtonAppBar from '../../components/AppBar/appBar'
import MediaCard from '../../components/Cards/card'
import { Filter } from '../../components/filterComponent/filter'
import styles from './home.module.css'

export function Home() {
    return (
        <div className={styles.container}>
            <ButtonAppBar />
            <Filter />
            <Paper style={{ margin: '20px', marginTop: '35px', maxHeight: '100vh', overflow: 'auto' }}>
                <div className={styles.head}>
                    <h1 className={styles.h1}>Propriedades Disponiveis</h1>
                </div>
                <div className={styles.paper}>
                    <MediaCard />
                    <MediaCard />
                    <MediaCard />
                    <MediaCard />
                    <MediaCard />
                    <MediaCard />
                    <MediaCard />
                    <MediaCard />
                    <MediaCard />
                    <MediaCard />
                    <MediaCard />
                    <MediaCard />
                </div>
                <div className={styles.root} >
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </div>
            </Paper>
        </div>
    )
}