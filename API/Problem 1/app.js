const API_ENDPOINT = 'https://api.quotable.io/quotes';

const getData = async () => {
    try {
        const response = await fetch(API_ENDPOINT);
        if(response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
        }
        throw new Error('Request Failed!');
    } catch(error) {
        console.log(error);
    }
}
