const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const inputBox = document.querySelector('.inputBox');
const inputBox2 = document.querySelector('.inputBox2');
const inputBox3 = document.querySelector('.inputBox3');
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

button2.addEventListener('click', function () {


    let blogArray = [];

    const User = inputBox.value;
    const Title = inputBox2.value;
    let Content = inputBox3.value;

    let infoObject = {
        User: User,
        Title: Title,
        Content: Content
    };

    blogArray.push(infoObject);

    console.log(blogArray);

    return;

})