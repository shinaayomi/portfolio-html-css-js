// let projects = document.getElementById("projectLists");
// projects.appendChild("H1");

// start name animation
const myName = document.querySelectorAll(".myName span");

const myNameLetters = myName.length;

myName.forEach(function (span, i) {
  const mappedIndex = i - myNameLetters / 2;
  span.style.animationDelay = mappedIndex * 0.25 + "s";
});
// end name animation
