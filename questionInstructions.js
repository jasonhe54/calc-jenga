function loadQuestionInstructions() {
    let params = window.location.search;
    let urlParams = new URLSearchParams(params);
    let paramsObj = Object.fromEntries(urlParams.entries());

    if (!urlParams.has('imgURL')) {
        console.log('No image URL provided therefore, no question number provided, thus no instructions can be loaded');
        return;
    }

    let questionNumber = paramsObj.imgURL.split('/').pop(); // returns 'num' in https://*.*/?imgURL=https://*.*/shortLink/num
    switch(questionNumber) {
        case '5':
        case '10':
            document.getElementById('questionInstructionsAlert').innerText = 'You may use a calculator for this question to arrive at a final answer, however you must, at the bare minimum, integrate the function by hand. Make sure this is on your whiteboard.';
            break;
    }
}
window.onload = loadQuestionInstructions();