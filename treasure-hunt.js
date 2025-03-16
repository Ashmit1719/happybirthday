/* treasure-hunt.js */
function handleClick() {
  alert("Great! You found the hidden clue.\nClue: 'A place where we had the best date!'");
  // Redirect to the quiz page after finding the clue
  window.location.href = "quiz.html";
}

document.addEventListener("DOMContentLoaded", function() {
  // Reveal the school bell icon after 3 seconds
  setTimeout(() => {
    const schoolBell = document.getElementById("schoolBell");
    if (schoolBell) {
      schoolBell.style.display = "block";
    }
  }, 3000);
});