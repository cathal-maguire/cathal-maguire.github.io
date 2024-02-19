let isEnglish = true;

function toggleLanguage() {
    const elementsToTranslate = document.querySelectorAll('.translate');

    elementsToTranslate.forEach(element => {
        if (isEnglish) {
            element.innerHTML = element.dataset.irish;
        } else {
            element.innerHTML = element.dataset.english;
        }
    });

    isEnglish = !isEnglish;
}
