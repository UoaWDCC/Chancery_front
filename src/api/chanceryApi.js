const API_ROOT = `https://kh08u3aor0.execute-api.ap-southeast-2.amazonaws.com/prod/`;

export const getOrders = () => {
    try {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        console.log(`${API_ROOT}/flashcard/scan`);
        console.log('fetching questions');
        return fetch(proxyurl + `${API_ROOT}/flashcard/scan`).then(result => result.json());
    } catch (error) {
        console.log(error);
    }
};