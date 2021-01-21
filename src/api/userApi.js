
const API_ROOT = `https://o6xaaxitq4.execute-api.ap-southeast-2.amazonaws.com/prod`;
const proxyurl = "https://cors-anywhere.herokuapp.com/";


export const postUserInfo = async (user) => {
    try {
        // For local testing:
        // await fetch(proxyurl + `${API_ROOT}/users/post/`, {
        //     method: 'POST',
        //     body: JSON.stringify(user)
        // }).then(result => result.json())
        //   .then(result => console.log(result));

        await fetch(`${API_ROOT}/users/post/`, {
            method: 'POST',
            body: JSON.stringify(user)
        }).then(result => result.json());
    } catch (error) {
        console.log(error);
    }
};