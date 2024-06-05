function loadQuestionNumber() {
    let params = window.location.search;
    let urlParams = new URLSearchParams(params);
    let paramsObj = Object.fromEntries(urlParams.entries());

    if (!urlParams.has('imgURL')) {
        console.log('No image URL provided therefore, no question number provided');
        return;
    }

    let questionNumber = paramsObj.imgURL.split('/').pop(); // returns 'num' in https://*.*/?imgURL=https://*.*/shortLink/num
    let title = `Question Number ${questionNumber}`;
    document.getElementById('questionNumber').innerText = title;
}
window.onload = loadQuestionNumber;