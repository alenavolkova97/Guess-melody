import {GameType} from '../const';
import {isArtistAnswerCorrect, isGenreAnswerCorrect} from '../game';

const STEP = 1;
const NO_MISTAKE = 0;
const MISTAKE = 1;

export const ActionType = {
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET_GAME: `RESET_GAME`,
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  LOAD_QUESTIONS: `LOAD_QUESTIONS`
};

export const incrementStep = () => ({
  type: ActionType.INCREMENT_STEP,
  payload: STEP
});

export const resetGame = () => ({
  type: ActionType.RESET_GAME
});

export const incrementMistake = (question, userAnswer) => {
  let answerIsCorrect = false;

  switch (question.type) {
    case GameType.ARTIST:
      answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
      break;
    case GameType.GENRE:
      answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
      break;
  }

  return {
    type: ActionType.INCREMENT_MISTAKES,
    payload: answerIsCorrect ? NO_MISTAKE : MISTAKE
  };
};

export const loadQuestions = (questions) => ({
  type: ActionType.LOAD_QUESTIONS,
  payload: questions
});
