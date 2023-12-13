function setLangSelector() {
    document.getElementById("langSelect").value = getLang();
}

function handleLangChange() {
    setLang(document.getElementById("langSelect").value);
    location.reload();
}

function getLang() {
    let lang = localStorage.getItem('language');
    if (lang == null) {
        lang = navigator.language || navigator.userLanguage;
    }

    if (lang == null || lang.includes("ru")) {
        return "ru";
    }

    return "en";
}

function setLang(lang) {
    localStorage.setItem('language', lang);
}

function getDictionary(lang) {
    if (lang.includes("ru")) {
        return ru_lang;
    }
    return en_lang;
}

function translateStatic(lang) {
    let dictionary = getDictionary(lang);

    for (const key in dictionary) {
        const selector = "." + key;
        document.querySelectorAll(selector).forEach(elem => elem.innerHTML = dictionary[key]);
    }
}

function translate(key, lang) {
    return getDictionary(lang)[key];
}

function getLocalizedMessage(key) {
    // const lang = getLang();
    // return translate(key, lang);
    return "Test message: " + key;
}