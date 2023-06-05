const contrastButton = document.getElementById('togglecontrast');
const cookieName = 'contrast';
const contrastClassName = 'high-contrast';
const html = document.documentElement;

const getCookieExpiryDate = ()=>new Date(new Date().getTime() + 60 * 60 * 1000).toString();

/**
* Set cookie value and expiry date
* @param name
* @param value
* @param expiryDate
*/
const setCookie = ({name, value, expiryDate})=>{
    document.cookie = `${name}=${value}; path=/; expires=${expiryDate};`;
}
;

/**
* Get cookie value by name
* @param name
* @returns {string|null}
*/
const getCookieValue = (name)=>{
    const b = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return b ? b.pop() : null;
}
;

/**
* add ore remove the contrastclass to html
* @param setOrNot
*/
function setContrastStyle(setOrNot) {
    if (setOrNot) {
        html.classList.add(contrastClassName);
    } else {
        html.classList.remove(contrastClassName);
    }
}

/**
* add the click listener to to button
*/
function setListeners() {
    contrastButton.addEventListener('click', (e)=>{
        e.preventDefault();
        if (getCookieValue(cookieName) === 'true') {
            setContrastStyle(false);
            setCookie({
                name: cookieName,
                value: false,
                expiryDate: getCookieExpiryDate(),
            });
        } else {
            setContrastStyle(true);
            setCookie({
                name: cookieName,
                value: true,
                expiryDate: getCookieExpiryDate(),
            });
        }
    }
    );
}

/**
* init the listener
*/
if (contrastButton) {
    setListeners();
}

/**
* get the cookie value and set the class if needed
* @type {string|null}
*/
const cookieValue = getCookieValue(cookieName);

if (cookieValue === undefined || cookieValue === null) {
    setCookie({
        name: cookieName,
        value: false,
        expiryDate: getCookieExpiryDate(),
    });
    setContrastStyle(false);
} else if (cookieValue === 'true') {
    setContrastStyle(true);
} else {
    setContrastStyle(false);
}
