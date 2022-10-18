import Alerts from "../../components/alerts/Alerts"

export const SaveUser = () => {
    const Query = () => (
        {
            nome: "Eddy",
            apelido: "nhabinde",
            dataNasc: "2002/02/17",
            contacto: "844004447",
            senha: "bla",
            conta: "",
            acesso: "normal",
            email: "blba@gmail.com"
        }
    )
    // conta
    function SavingUser(mail, pass, nome, apelido, contacto, dataNasc, conta, Cpass) {
        
    }

    return {
        SavingUser
    }
}