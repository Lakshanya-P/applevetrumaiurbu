const exercises = [
    {
        sentence: "நான் பள்ளி __ போகிறேன்.",
        options: ["க்கு", "இல்", "ஆல்", "உடன்"],
        correct: "க்கு"
    },
    {
        sentence: "அவள் வீடு __ இருக்கிறாள்.",
        options: ["க்கு", "இல்", "ஆல்", "உடன்"],
        correct: "இல்"
    },
    {
        sentence: "அவள் ஆஸ்பத்திரி __ வேலை செய்கிறாள்.",
        options: ["க்கு", "இல்", "ஆல்", "உடன்"],
        correct: "இல்"
    },
    {
        sentence: "நான் நண்பர் __ சந்தித்தேன்.",
        options: ["உடன்", "ஆல்", "க்கு", "இல்"],
        correct: "உடன்"
    },
    {
        sentence: "அவர்கள் நகரம் __ சுற்றினர்.",
        options: ["ஆல்", "உடன்", "க்கு", "இல்"],
        correct: "இல்"
    },
    {
        sentence: "நான் சிறை __ விடுக்கப்பட்டேன்.",
        options: ["இல்", "ஆல்", "க்கு", "உடன்"],
        correct: "இல்"
    },
    {
        sentence: "அவன் வீட்டில் உள்ளவன் __ பேசினான்.",
        options: ["உடன்", "ஆல்", "க்கு", "இல்"],
        correct: "உடன்"
    },
    {
        sentence: "நான் கல்லூரி __ படிக்கிறேன்.",
        options: ["க்கு", "இல்", "ஆல்", "உடன்"],
        correct: "இல்"
    },
    {
        sentence: "அவள் சந்தை __ சென்றாள்.",
        options: ["ஆல்", "க்கு", "இல்", "உடன்"],
        correct: "க்கு"
    }



];

let currentExercise = 0;

function loadExercise() {
    const exercise = exercises[currentExercise];
    document.getElementById('sentence').innerHTML = exercise.sentence.replace('__', '<span class="blank" id="blank"></span>');
    document.getElementById('option1').querySelector('.option-text').textContent = exercise.options[0];
    document.getElementById('option2').querySelector('.option-text').textContent = exercise.options[1];
    document.getElementById('option3').querySelector('.option-text').textContent = exercise.options[2];
    document.getElementById('option4').querySelector('.option-text').textContent = exercise.options[3];
}

function selectAnswer(button) {
    const answer = button.querySelector('.option-text').textContent;
    document.getElementById('blank').textContent = answer;
    checkAnswer(answer);
}

function checkAnswer(answer) {
    const exercise = exercises[currentExercise];
    if (answer === exercise.correct) {
        alert("Correct!");
        currentExercise++;
        if (currentExercise < exercises.length) {
            loadExercise();
        } else {
            alert("You've completed all the exercises!");
        }
    } else {
        alert("Try again!");
        document.getElementById('blank').textContent = ''; // Clear the blank for retry
    }
}

window.onload = function() {
    loadExercise();
}
