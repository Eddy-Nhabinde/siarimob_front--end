import NumberInput from '../numberInput/numberInput'
import Select from '../select/select'
import styles from './filter.module.css'

export function Filter() {
    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <i className={'fa-solid fa-filter'}></i>
                <span>Pesquise por :</span>
            </div>
            <NumberInput />
            <Select Label='Bairro' />
            <Select Label='Tipo' />
        </div>
    )
}