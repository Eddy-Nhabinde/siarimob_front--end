export function log(mail, pass) {

    const Query =
    {
        email: `${mail}`,
        password: `${pass}`,
    }

    fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // 'Authorization': 'Bearer <token_here>'
        },
        body: JSON.stringify(Query),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}