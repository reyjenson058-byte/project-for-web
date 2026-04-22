let timeLeft = 600; // 10 minutes
let timerInterval;

// Start Quiz
function startQuiz() {
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("startBtn").style.display = "none";

    timerInterval = setInterval(updateTimer, 1000);
}

// Timer Function
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").textContent = `${minutes}:${seconds}`;

    timeLeft--;
 // Turn orange when 5 minutes left
    if (timeLeft <= 300) {
        document.getElementById("timer").style.color = "orange";
    }
// Turn dark orange when 2 minutes left
    if (timeLeft <= 120) {
        document.getElementById("timer").style.color = "#ff5d06";
    }
    // Turn red when 1 minutes left "I spent to long on this"
    if (timeLeft <= 60) {
        document.getElementById("timer").style.color = "red";
    }

    // Time's up
    if (timeLeft < 0) {
        clearInterval(timerInterval);
        alert("Time is up! Submitting quiz...");
        gradeQuiz();
    }
}

// Grade Quiz
function gradeQuiz() {
    clearInterval(timerInterval); // stop timer

    let score = 0;
    const total = 5;
    let resultText = "";
 const q1Answers = Array.from(document.querySelectorAll('input[name="q1"]:checked')).map(cb => cb.value);
    if (q1Answers.includes("a") && q1Answers.includes("b") && q1Answers.includes("c")) {
        score++;
        resultText += "<span style='color:green'>Q1: Correct</span><br>";
    } else {
        resultText += "<span style='color:red'>Q1: Incorrect (Answer: a, b, and c)</span><br>";
    }

    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "b") {
        score++;
        resultText += "<span style='color:green'>Q2: Correct</span><br>";
    } else {
        resultText += "<span style='color:red'>Q2: Incorrect (Answer: 2014)</span><br>";
    }

    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "b") {
        score++;
        resultText += "<span style='color:green'>Q3: Correct</span><br>";
    } else {
        resultText += "<span style='color:red'>Q3: Incorrect (Answer: HyperText Markup Language)</span><br>";
    }

    const q4 = document.querySelector('input[name="q4"]').value.trim().toLowerCase();

if (q4.includes("1990")) {
    score++;
    resultText += "<span style='color:green'>Q4: Correct</span><br>";
} else {
    resultText += "<span style='color:red'>Q4: Incorrect (Answer: 1990s)</span><br>";
}

    const q5Answers = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(cb => cb.value);

    if (q5Answers.includes("a") && q5Answers.includes("c") && !q5Answers.includes("b")) {
        score++;
        resultText += "<span style='color:green'>Q5: Correct</span><br>";
    } else {
        resultText += "<span style='color:red'>Q5: Incorrect (Answer: a and c)</span><br>";
    }

    // Final Score
    resultText += `<br><strong>Total Score: ${score}/${total}</strong><br>`;
    // 5/5 perfect score text
if (score>= 5) {
        resultText += "<span style='color:green; font-size:18px;'> You made a perfect score congrats!</span>";
}
// 3/5 or high text
else if (score >= 3) {
        resultText += "<span style='color:green; font-size:18px;'>You Passed!</span>";

    } 
    // failure text
    else {
        resultText += "<span style='color:red; font-size:18px;'>You Failed.</span>";
    }

    document.getElementById("result").innerHTML = resultText;
}

// Reset Quiz
function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("result").innerHTML = "";

    clearInterval(timerInterval);
    timeLeft = 600;

    document.getElementById("timer").textContent = "10:00";
    document.getElementById("timer").style.color = "black";

    // Hide quiz again
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("startBtn").style.display = "block";
}

