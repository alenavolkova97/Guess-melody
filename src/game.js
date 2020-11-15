export const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer.artist === question.song.artist;
};

export const isGenreAnswerCorrect = (question, userAnswer) => {
  userAnswer.every((it, i) => {
    return it === (question.answers[i].genre === question.genre);
  });
};
