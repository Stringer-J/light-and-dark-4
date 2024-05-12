const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const form = document.getElementById('form');
const page = document.querySelector('body');

let darkMode = localStorage.getItem('darkMode') === true;

function updateDarkMode() {
    if (darkMode) {
        page.classList.add('darkMode');
    } else {
        page.classList.remove('darkMode');
    }
};

button.addEventListener('click', function () {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    updateDarkMode();
});

button2.addEventListener('click', function (event) {

    event.preventDefault();

    const User = form.elements.user.value;
    const Title = form.elements.title.value;
    const Content = form.elements.content.value;

    if (!User || !Title || !Content) {
        alert('Please fill out all fields!');
        return;
    }

    const objectInfo = {
        User: User,
        Title: Title,
        Content: Content
    };

    localStorage.setItem('objectInfo', JSON.stringify(objectInfo));

     window.location.href = 'blog.html';
});

