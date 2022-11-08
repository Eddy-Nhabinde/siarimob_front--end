export function Arrendamento() {

    async function NovoArrendamento(casaId, duracao, valor_pago, reqid) {
        const Query =
        {
            prop_id: `${casaId}`,
            inquilino_id: `${sessionStorage.getItem("user_id")}`,
            dura: `${duracao}`,
            valorPago: `${valor_pago}`,
            rId: `${reqid}`
        }
        console.log(Query)
        let dados = fetch('http://127.0.0.1:8000/api/save-arrendamento-details', {
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
                return data
            })

        return dados
    }

    return { NovoArrendamento }
}