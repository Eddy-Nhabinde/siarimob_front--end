import { useParams } from "../../hooks/QueryParams";

export function GetRequests() {
    const { useQuery } = useParams()
    const urlParams = useQuery()

    async function requisicoes(date, Todas, Minhas) {
        let Query = 0
        if (Minhas) {
            Query =
            {
                inq_id: `${sessionStorage.getItem("user_id")}`,
                data: !Todas && `${date}`,
            }
        } else {
            Query =
            {
                dono_id: `${sessionStorage.getItem("user_id")}`,
                pessoa_id: (!date & !Todas) && `${urlParams.get('inq_id')}`,
                casa_id: (!date & !Todas) && `${urlParams.get('casa_id')}`,
                data: !Todas && `${date}`,
            }
        }

        let dados = fetch('http://127.0.0.1:8000/api/all-requests', {
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

    async function answerRequest(estado, idd) {

        const Query =
        {
            id: `${idd}`,
            status: `${estado}`
        }
        let dados = fetch('http://127.0.0.1:8000/api/answer-request', {
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

    return { requisicoes, answerRequest }
}