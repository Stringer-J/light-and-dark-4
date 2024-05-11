const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const form = document.getElementById('form');
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

button2.addEventListener('click', function (event) {

    event.preventDefault();

    const User = form.elements.user.value;
    const Title = form.elements.title.value;
    const Content = form.elements.content.value;

    const objectInfo = {
        User: User,
        Title: Title,
        Content: Content
    };

    console.log(objectInfo);

})