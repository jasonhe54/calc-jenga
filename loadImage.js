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
    if (!isValidURL(paramsObj.imgURL) /*|| !responseStatusOK(paramsObj.imgURL)*/) {
        console.log('Invalid URL provided');
        document.getElementById('invalidURL').classList.remove('d-none');
        return;
    } else {
        let imageTag = document.getElementById('mathQ-img');
        let imageAnchor = document.getElementById('imgURLOpenInNewTab');
        imageTag.src = paramsObj.imgURL;
        imageAnchor.setAttribute('href', paramsObj.imgURL);
        imageAnchor.classList.remove('d-none');

    /* Show Answer Button
        // let answerBTN = document.getElementById('showAnswer');
        // answerBTN.classList.remove('d-none');

        // // load answer image
        // let answerImageTag = document.getElementById('mathA-img');
        // let answerImageAnchor = document.getElementById('imgURLOpenInNewTabAnswer');
        // answerImageTag.src = `${paramsObj.imgURL}/answer`;
        // answerImageAnchor.setAttribute('href', `${paramsObj.imgURL}/answer`);
    */
    };
    evalForBC(paramsObj.imgURL);
}

// function responseStatusOK(url) {
//     // check status code of the imgURL provided
//     fetch(url, {mode: 'no-cors'})
//         .then(response => {
//             console.log('response:', response)
//             if (!response.ok) {
//                 console.log('Invalid URL provided, status code:', response.status);
//                 document.getElementById('invalidURL').classList.remove('d-none');
//                 return false;
//             } else {
//                 console.log('Valid URL provided, status code:', response.status);
//                 return true;
//             }
//         });
// }

function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

function evalForBC(imgURL) {
    // require imgURL parameter
    if (!imgURL) {
        console.log('No image URL provided');
        return;
    }
    let imageURL = new URL(imgURL); // in form of 'https://sl.jenga.he54.me/*'
    console.log('imageURL:', imageURL);
    let path = imageURL.pathname; // returns '/*'
    console.log('path:', path);

    let bcImgURL = returnBCImgURL(imgURL);
    let imageTag = document.getElementById('mathQ-img-bc');
    let imageAnchor = document.getElementById('imgURLOpenInNewTab-bc');

    switch(path) {
        case '/1':
        // case '/2':
            imageTag.src = bcImgURL;
            imageAnchor.setAttribute('href', bcImgURL);
            document.getElementById('question-bc').classList.remove('d-none');
            break;
        default:
            console.log('path is not a BC case');
            break;
    }
}

function returnBCImgURL(imgURL) {
    let bcImgURL = imgURL + '/bc';
    return bcImgURL;
}

window.onload = loadImage;