document.getElementById('showAnswer').addEventListener('click', function() {
    let answerDIV = document.getElementById('answer');
    let answerBTN = document.getElementById('showAnswer');
    let questionDIV = document.getElementById('question');
    answerDIV.classList.remove('d-none');
    answerBTN.classList.add('d-none');
    questionDIV.classList.add('d-none');
});