const quizForm = document.getElementById("quizForm");
const resultBox = document.getElementById("result");

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let scores = {
    college: 0,
    career: 0,
    gap: 0
  };

  const answers = new FormData(quizForm);

  for (let answer of answers.values()) {
    scores[answer]++;
  }

  let topResult = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  let message = "";

  if (topResult === "college") {
    message = `
      <h2>College Path</h2>
      <p>You may be a strong fit for college, university, or a structured academic program.</p>
    `;
  } else if (topResult === "career") {
    message = `
      <h2>Career Path</h2>
      <p>You may be ready for a job, apprenticeship, trade program, internship, or workforce training.</p>
    `;
  } else {
    message = `
      <h2>Exploration Path</h2>
      <p>You may benefit from a gap year, volunteering, travel, career exploration, or guided planning.</p>
    `;
  }

  resultBox.innerHTML = message;
  resultBox.style.display = "block";
});
