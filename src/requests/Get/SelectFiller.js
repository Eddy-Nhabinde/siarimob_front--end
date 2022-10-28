export function SelectData(counnt) {
    let param = ""

    async function Province() {
        if (counnt) {
            param = '/1'
        }

        let dados = fetch('http://127.0.0.1:8000/api/provinces' + param, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                return data;
            })

        return dados
    }

    async function District(province_id) {

        const idProvince =
        {
            province: `${province_id}`,
            param: counnt ? 1 : ""
        }

        let dados = fetch('http://127.0.0.1:8000/api/districts', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(idProvince),
        })
            .then((response) => response.json())
            .then((data) => {
                return data;
            })

        return dados
    }

    async function Neighborhood(distrito_id) {

        const distritoId =
        {
            distrito: `${distrito_id}`,
            param: counnt ? 1 : ""
        }

        let dados = fetch('http://127.0.0.1:8000/api/bairros', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(distritoId),
        })
            .then((response) => response.json())
            .then((data) => {
                return data;
            })

        return dados
    }

    async function Tipo() {
        if (counnt) {
            param = '/1'
        }
        let dados = fetch('http://127.0.0.1:8000/api/tipos' + param, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                return data;
            })

        return dados
    }

    async function Status() {

        let dados = fetch('http://127.0.0.1:8000/api/estados', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                return data;
            })

        return dados
    }

    return { Province, District, Neighborhood, Tipo, Status }
}