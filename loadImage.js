function loadImage() {
    let params = window.location.search;
    let urlParams = new URLSearchParams(params);
    let paramsObj = Object.fromEntries(urlParams.entries());
    console.log(paramsObj);
    // Check if imgURL is present in the URL
    if (!urlParams.has('imgURL')) {
        console.log('No image URL provided');
        document.getElementById('imgURLParamNotPresent').classList.remove('d-none');
        return;
    }
    // Check if imgURL is a valid URL
    if (!isValidURL(paramsObj.imgURL)) {
        console.log('Invalid URL provided');
        document.getElementById('invalidURL').classList.remove('d-none');
        return;
    } else {
        let imageTag = document.getElementById('mathQ-img');
        let imageAnchor = document.getElementById('imgURLOpenInNewTab');
        imageTag.src = paramsObj.imgURL;
        imageAnchor.setAttribute('href', paramsObj.imgURL);
        imageAnchor.classList.remove('d-none');

        let answerBTN = document.getElementById('showAnswer');
        answerBTN.classList.remove('d-none');

        // load answer image
        let answerImageTag = document.getElementById('mathA-img');
        let answerImageAnchor = document.getElementById('imgURLOpenInNewTabAnswer');
        answerImageTag.src = `${paramsObj.imgURL}/answer`;
        answerImageAnchor.setAttribute('href', `${paramsObj.imgURL}/answer`);
    }
}

function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

window.onload = loadImage();