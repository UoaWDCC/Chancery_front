const API_ROOT = `https://kh08u3aor0.execute-api.ap-southeast-2.amazonaws.com/prod/`;

export const getFlashcards = () => {
    try {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        
        return fetch(proxyurl + `${API_ROOT}/flashcard/scan`).then(result => result.json());
    } catch (error) {
        console.log(error);
    }
};