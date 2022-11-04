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
                if (data[1].id) {
                    sessionStorage.setItem("user_id", data[1].id);
                    sessionStorage.setItem("token", data[0].original.access_token);
                }
                return data;
            })

        return dados
    }

    return { Entrar }
}