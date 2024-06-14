function checkAnswer(answer) {
    const blank = document.getElementById("blank");
    blank.textContent = answer;

    // Check if the answer is correct
    if (answer === "க்கு") {
        alert("Correct!");
    } else {
        alert("Try again!");
    }
}
