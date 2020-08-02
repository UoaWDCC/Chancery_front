import * as constants from "./constants";

let initialDifficulties = {};
let initialTopics = {};

constants.topics.forEach((topic) => {
  initialTopics[topic] = false;
});

constants.difficulties.forEach((difficulty) => {
  initialDifficulties[difficulty] = false;
});

export const initialState = {
  flashcards: [],
  displayedFlashcards: [],
  difficulties: initialDifficulties,
  topics: initialTopics,
  currentIndex: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        flashcards: action.payload,
        displayedFlashcards: action.payload,
      };

    case constants.UPDATE_FILTERS_SUCCESS:
      return {
        ...state,
        displayedFlashcards: action.payload.flashcards,
        difficulties: action.payload.difficulties,
        topics: action.payload.topics,
        currentIndex: 0,
      };

    case constants.RESET_FILTERS_SUCCESS:
      return {
        ...state,
        difficulties: initialDifficulties,
        topics: initialTopics,
        displayedFlashcards: action.payload,
        currentIndex: 0,
      };

    case constants.UPDATE_CURRENT_INDEX_SUCCESS:
      return {
        ...state,
        currentIndex: action.payload,
      };

    default:
      return state;
  }
};
