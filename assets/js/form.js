const button = document.getElementById('button');
const page = document.querySelector('body');

let darkMode = false;

button.addEventListener('click', function () {
    darkMode = !darkMode;
    if (darkMode) {
        page.classList.add('darkMode');
    } else {
        page.classList.remove('darkMode');
    }
});
