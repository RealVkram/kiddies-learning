const firstHandler = () => {
  const audioA = document.getElementById("audioLetterA");
  return audioA.play();
};
const letterA = document.getElementById("letterA");
letterA.addEventListener("click", firstHandler);
