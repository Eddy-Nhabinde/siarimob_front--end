export const SaveUser = () => {

    async function SavingUser(mail, pass, nome, apelido, contacto, dataNasc, conta) {
        const Query =
        {
            nome: `${nome}`,
            apelido: `${apelido}`,
            dataNasc: `${dataNasc}`,
            contacto: `${contacto}`,
            senha: `${pass}`,
            conta: `${conta}`,
            acesso: conta ? 'admin' : 'normal',
            email: `${mail}`
        }
        let dados = fetch('http://127.0.0.1:8000/api/register', {
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

    return {
        SavingUser
    }
}