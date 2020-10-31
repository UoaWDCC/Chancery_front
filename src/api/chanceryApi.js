const API_ROOT = `https://sggk01kerl.execute-api.ap-southeast-2.amazonaws.com/prod`;
// const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const getFlashcards = () => {
    try {     
        // return fetch(proxyurl + `${API_ROOT}/flashcard/scan`).then(result => result.json());
        return fetch(`${API_ROOT}/flashcard/scan`).then(result => result.json());
      
    } catch (error) {
        console.log(error);
    }
};

// export const getFlashcardsByTopics = (topic) => {
//     try {
//         return fetch(proxyurl + `${API_ROOT}/flashcard/scan/` + topic).then(result => result.json());
//         return fetch(`${API_ROOT}/flashcard/scan/` + topic).then(result => result.json());

//     } catch (error) {
//         console.log(error);
//     }
// };