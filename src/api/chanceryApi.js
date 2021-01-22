const API_ROOT = `https://sggk01kerl.execute-api.ap-southeast-2.amazonaws.com/prod`;

export const getFlashcards = () => {
  try {
    return fetch(`${API_ROOT}/flashcard/scan`).then((result) => result.json());
  } catch (error) {
    console.log(error);
  }
};
