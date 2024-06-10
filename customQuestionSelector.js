function showCustomQuestionSelector() {
    let section = document.getElementById('customQuestionSelector');
    if (!section.classList.contains('d-none')) {
        section.classList.add('d-none');
        return;
    }
    section.classList.remove('d-none');
}

function getCurrentQuestionNumber() {
    let params = window.location.search;
    let urlParams = new URLSearchParams(params);
    let paramsObj = Object.fromEntries(urlParams.entries());

    if (!urlParams.has('imgURL')) {
        console.log('No image URL provided therefore, no question number provided, thus no instructions can be loaded');
        return;
    }

    let questionNumber = paramsObj.imgURL.split('/').pop(); // returns 'num' in https://*.*/?imgURL=https://*.*/shortLink/num
    return questionNumber;
}

// document.getElementById('customQuestionSelectorButton').addEventListener('click', function () {
//     showCustomQuestionSelector();
// })

// on DOM loaded
document.addEventListener('DOMContentLoaded', function () {
    let selector = document.getElementById('questionSelectorDropdown');
    let bcQuestionNumberArray = [7, 8, 12, 15, 19, 21, 22, 24, 29, 31, 33, 34, 35, 36, 37];
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
        if (i == getCurrentQuestionNumber()) {
            option.selected = true;
        }
        option.innerText = optionText;
        selector.appendChild(option);
    }
});

// handle Go to Selected Question button click
document.getElementById('customQuestionSelectorSubmit').addEventListener('click', function () {
    let selector = document.getElementById('questionSelectorDropdown');
    let selectedQuestion = selector.value;
    let pageURL = window.location.href.split('?')[0] // strips query strings
    let imgURL = `https://sl.jenga.he54.me/${selectedQuestion}`;
    window.location.href = `${pageURL}?imgURL=${imgURL}`;
});

// handle Go to Next Question button click
document.getElementById('customQuestionSelectorGoNext').addEventListener('click', function () {
    let currentQuestionNumber = getCurrentQuestionNumber();
    let nextQuestionNumber = parseInt(currentQuestionNumber) + 1;
    let pageURL = window.location.href.split('?')[0] // strips query strings
    let imgURL = `https://sl.jenga.he54.me/${nextQuestionNumber}`;
    window.location.href = `${pageURL}?imgURL=${imgURL}`;
});

// handle Go to PRevious Question button click
document.getElementById('customQuestionSelectorGoPrevious').addEventListener('click', function () {
    let currentQuestionNumber = getCurrentQuestionNumber();
    if (currentQuestionNumber == 1) {
        console.log('Cannot go to previous question because current question is 1');
        document.getElementById('customQuestionSelectorGoPrevious').setAttribute('disabled');
        return;
    }
    let nextQuestionNumber = parseInt(currentQuestionNumber) - 1;
    let pageURL = window.location.href.split('?')[0] // strips query strings
    let imgURL = `https://sl.jenga.he54.me/${nextQuestionNumber}`;
    window.location.href = `${pageURL}?imgURL=${imgURL}`;
});