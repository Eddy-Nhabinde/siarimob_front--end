import axios from "axios"

export const Propss = () => {

    async function GetProps(data, EstadoFilter = 1) {

        let dados = axios.post(`http://127.0.0.1:8000/api/all-props/${EstadoFilter}`,
            data
        )
            .then((data) => {
                return data;
            })

        return dados
    }

    return {
        GetProps
    }
}