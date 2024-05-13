const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const form = document.getElementById('form');
const page = document.querySelector('body');

//checks to see if dark mode was true on the previous page
let darkMode = localStorage.getItem('darkMode') === true;

//turns darkMode on or off
function updateDarkMode() {
    if (darkMode) {
        page.classList.add('darkMode');
    } else {
        page.classList.remove('darkMode');
    }
};

//creates a button that turns darkMode on or off and saves that state to local storage
button.addEventListener('click', function () {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    updateDarkMode();
});

//creates a button that saves form info to an object in local storage assuming all fields are filled out then goes to the next page
button2.addEventListener('click', function (event) {

    event.preventDefault();

    //collects the values from the form fields
    const User = form.elements.user.value;
    const Title = form.elements.title.value;
    const Content = form.elements.content.value;

    //checks to see if the form fields have been filled out and if not display a message
    if (!User || !Title || !Content) {
        alert('Please fill out all fields!');
        return;
    }

    //creates an object to save the form info in
    const objectInfo = {
        User: User,
        Title: Title,
        Content: Content
    };

    //saves the object to local storage
    localStorage.setItem('objectInfo', JSON.stringify(objectInfo));

    //goes to 'blog' page
     window.location.href = 'blog.html';
});

