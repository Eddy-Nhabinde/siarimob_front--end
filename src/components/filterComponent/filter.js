import NumberInput from '../numberInput/numberInput'
import Select from '../select/select'
import styles from './filter.module.css'
import { SelectData } from '../../requests/Get/SelectFiller'
import { useEffect, useState } from 'react'

export function Filter() {
    const { Tipo, Neighborhood } = SelectData()
    const [DataTipo, setDataTipo] = useState([]);
    const [BairroData, setBairroData] = useState([]);

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

    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <i className={'fa-solid fa-filter'}></i>
                <span>Pesquise por :</span>
            </div>
            <NumberInput />
            <Select data={BairroData} Label='Bairro' />
            <Select data={DataTipo} Label='Tipo' />
        </div>
    )
}