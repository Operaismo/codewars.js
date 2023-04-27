// guessBlue 8kyu
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  return (blueStart - bluePulled) / (blueStart - bluePulled + redStart - redPulled);
}