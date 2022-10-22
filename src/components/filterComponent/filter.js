import NumberInput from '../numberInput/numberInput'
import Select from '../select/select'
import styles from './filter.module.css'
import { SelectData } from '../../requests/Get/SelectFiller'
import { useEffect, useState } from 'react'

export function Filter({ setPrecoFilter, setBairroFilter, setTipoFilter, setEstadoFilter, lista }) {
    const { Tipo, Neighborhood, Status } = SelectData()
    const [DataTipo, setDataTipo] = useState([]);
    const [BairroData, setBairroData] = useState([]);
    const [StatusData, setStatusData] = useState([]);

    useEffect(() => {
        (async () => {
            let response = await Neighborhood()
            if (response.length > 0) {
                setBairroData(response)
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            let response = await Tipo()
            if (response.length > 0) {
                setDataTipo(response)
            }
        })()
    }, [])

    useEffect(() => {
        if (lista) {
            (async () => {
                let response = await Status()
                if (response.length > 0) {
                    setStatusData(response)
                }
            })()
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <i className={'fa-solid fa-filter'}></i>
                <span>Pesquise por :</span>
            </div>
            <NumberInput inpuChanged={setPrecoFilter} />
            <Select setValue={setBairroFilter} data={BairroData} Label='Bairro' />
            <Select setValue={setTipoFilter} data={DataTipo} Label='Tipo' />
            {lista && <Select setValue={setEstadoFilter} data={StatusData} Label='Estado' />}
        </div>
    )
}