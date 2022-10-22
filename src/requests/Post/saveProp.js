import axios from "axios"

export const SaveProp = () => {

    async function SavingProp(data) {

        let dados = axios.post('http://127.0.0.1:8000/api/save-prop',
            data
        )
            .then((data) => {
                return data;
            })

        return dados
    }

    return {
        SavingProp
    }
}