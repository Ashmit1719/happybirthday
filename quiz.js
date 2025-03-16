/* quiz.js */
function submitQuiz() {
  let score = 0;
  const form = document.getElementById("quizForm");
  const formData = new FormData(form);
  
  // Check answers (make sure values in quiz.html match these strings)
  if (formData.get("q1") === "Bora Bora") score++;
  if (formData.get("q2") === "Laugh") score++;
  if (formData.get("q3") === "All") score++;
  if (formData.get("q4") === "Amusement") score++;
  if (formData.get("q5") === "All") score++;
  if (formData.get("q6").trim() !== "") score++; // any answer is accepted
  
  alert("You scored " + score + " out of 6!");
  if (score >= 4) {
    window.location.href = "final-surprise.html";
  }
}