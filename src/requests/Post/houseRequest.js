export function Request() {

    async function HouseRequest(id) {
        const Query =
        {
            dono_id: `${id}`,
            inquilino: sessionStorage.getItem("user_id")
        }
        let dados = fetch('http://127.0.0.1:8000/api/request-house', {
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

    return { HouseRequest }
}