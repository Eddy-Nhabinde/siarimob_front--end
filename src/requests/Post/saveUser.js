export const SaveUser = () => {

    function SavingUser(mail, pass, nome, apelido, contacto, dataNasc, conta) {
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

    }

    return {
        SavingUser
    }
}