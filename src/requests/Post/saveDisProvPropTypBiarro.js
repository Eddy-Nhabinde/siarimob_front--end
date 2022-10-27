export function saveDisTrictProvinceBairros() {

    async function saveDistrict(nome, provinceCode) {
        const Query =
        {
            nome: `${nome}`,
            provincia_id:`${provinceCode}`
        }
        let dados = fetch('http://127.0.0.1:8000/api/districts-save', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(Query),
        })
            .then((response) => response.json())
            .then((data) => {
                return data;
            })

        return dados
    }

    async function saveProvince(nome) {
        const Query =
        {
            nome: `${nome}`,
        }
        let dados = fetch('http://127.0.0.1:8000/api/provinces-save', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(Query),
        })
            .then((response) => response.json())
            .then((data) => {
                return data;
            })

        return dados
    }

    async function savePRopType(nome) {
        const Query =
        {
            nome: `${nome}`,
        }
        let dados = fetch('http://127.0.0.1:8000/api/save-prop-type', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(Query),
        })
            .then((response) => response.json())
            .then((data) => {
                return data;
            })

        return dados
    }

    async function SaveBairro(nome, districtCode) {
        const Query =
        {
            nome: `${nome}`,
            distrito_id:`${districtCode}`
        }
        let dados = fetch('http://127.0.0.1:8000/api/save-bairros', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(Query),
        })
            .then((response) => response.json())
            .then((data) => {
                return data;
            })

        return dados
    }

    return { saveDistrict, saveProvince, savePRopType, SaveBairro }
}