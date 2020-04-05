const firstHandler = () => {
  const audioA = document.getElementById("audioLetterA");
  audioA.play();
};
const letterA = document.getElementById("letterA");
letterA.addEventListener("mouseover", firstHandler);
