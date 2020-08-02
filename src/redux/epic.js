import { combineEpics } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";
import { getFlashcards } from "../api/chanceryApi";
import * as constants from "./constants";
import {
  fetchQuestionsSuccess,
  updateFiltersSuccess,
  resetFiltersSuccess,
  updateCurrentIndexSuccess,
} from "./actions";
import allFalse from "../helperFunctions/allFalse";
import shuffle from "../helperFunctions/shuffle";

export const fetchQuestionsEpic = (action$, state$) =>
  action$.ofType(constants.FETCH_QUESTIONS).pipe(
    mergeMap(async () => {
      const result = await getFlashcards();
      shuffle(result);
      return fetchQuestionsSuccess(result);
    })
  );

export const updateFiltersEpic = (action$, state$) =>
  action$.ofType(constants.UPDATE_FILTERS).pipe(
    map((action) => {
      const flashcardsByTopic = state$.value.flashcards.filter(
        (flashcard) =>
          allFalse(action.payload.topics) ||
          action.payload.topics[flashcard.topic]
      );
      const filteredFlashcards = flashcardsByTopic.filter(
        (flashcard) =>
          allFalse(action.payload.difficulties) ||
          action.payload.difficulties[flashcard.difficulty]
      );
      shuffle(filteredFlashcards);

      return updateFiltersSuccess(
        filteredFlashcards,
        action.payload.topics,
        action.payload.difficulties
      );
    })
  );

export const resetFiltersEpic = (action$, state$) =>
  action$.ofType(constants.RESET_FILTERS).pipe(
    map(() => {
      const flashcards = state$.value.flashcards;
      shuffle(flashcards);
      return resetFiltersSuccess(flashcards);
    })
  );

export const updateCurrentIndexEpic = (action$, state$) =>
  action$.ofType(constants.UPDATE_CURRENT_INDEX).pipe(
    map((action) => {
      const currentIndex =
        (action.payload + state$.value.displayedFlashcards.length) %
        state$.value.displayedFlashcards.length;

      return updateCurrentIndexSuccess(currentIndex);
    })
  );

export const rootEpic = combineEpics(
  fetchQuestionsEpic,
  updateFiltersEpic,
  resetFiltersEpic,
  updateCurrentIndexEpic
);
