export const Propss = (all) => {

    async function GetProps(BairroFilter, TipoFilter, Valor, EstadoFilter = 1) {
        const query = {
            dono_id: !all && sessionStorage.getItem("user_id"),
            bairro: BairroFilter && BairroFilter,
            tipo: TipoFilter && TipoFilter,
            Valor: Valor && Valor
        }
        let dados = fetch(`http://127.0.0.1:8000/api/all-props/${EstadoFilter}`, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(query),
        })
            .then((response) => response.json())
            .then((data) => {
                return data;
            })

        return dados
    }

    return {
        GetProps
    }
}