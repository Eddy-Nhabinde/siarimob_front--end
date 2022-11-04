export function GetInq() {

    let id = '/' + sessionStorage.getItem("token")

    async function Inquilinos() {

        let dados = fetch('http://127.0.0.1:8000/api/all-arrendamentos' + id, {
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

    return { Inquilinos }
}