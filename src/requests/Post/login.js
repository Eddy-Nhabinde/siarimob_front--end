export function Log() {

    async function Entrar(mail, pass) {

        const Query =
        {
            email: `${mail}`,
            password: `${pass}`,
        }

        let dados = fetch('http://127.0.0.1:8000/api/login', {
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

    return { Entrar }
}