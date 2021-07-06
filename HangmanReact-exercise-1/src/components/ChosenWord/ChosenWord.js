import React from "react";

const generateWordDashMix = (word, letters) =>
  word
    .split("")
    .map(letter => (letters.includes(letter) ? letter : "_"))
    .join(" ");

const ChosenWord = props => (
  <div>
    <h2>Current word:</h2>
    <div className="the_word">
      {generateWordDashMix(props.word, props.guessedLetters)}
    </div>
  </div>
);

export default ChosenWord;
