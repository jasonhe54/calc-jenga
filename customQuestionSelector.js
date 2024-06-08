function showCustomQuestionSelector() {
    let section = document.getElementById('customQuestionSelector');
    if (!section.classList.contains('d-none')) {
        section.classList.add('d-none');
        return;
    }
    section.classList.remove('d-none');
}

document.getElementById('customQuestionSelectorButton').addEventListener('click', function () {
    showCustomQuestionSelector();
})

// on DOM loaded
document.addEventListener('DOMContentLoaded', function () {
    let selector = document.getElementById('questionSelectorDropdown');
    let bcQuestionNumberArray = [12, 15, 19, 21, 22, 24, 29, 31, 33, 34, 35, 36, 37];
    // create option elements for each question from 1 through 54
    for (let i = 1; i <= 54; i++) {
        let option = document.createElement('option');
        option.value = i;
        let optionText;
        if (bcQuestionNumberArray.includes(i)) {
            optionText = `Q${i} (BC)`;
        } else {
            optionText = `Q${i}`;
        }
        option.innerText = optionText;
        selector.appendChild(option);
    }
});

// handle submit button click
document.getElementById('customQuestionSelectorSubmit').addEventListener('click', function () {
    let selector = document.getElementById('questionSelectorDropdown');
    let selectedQuestion = selector.value;
    let pageURL = window.location.href.split('?')[0] // strips query strings
    let imgURL = `https://sl.jenga.he54.me/${selectedQuestion}`;
    window.location.href = `${pageURL}?imgURL=${imgURL}`;
});