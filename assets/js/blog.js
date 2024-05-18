const button3 = document.getElementById('button3');
const savedObjectInfo = JSON.parse(localStorage.getItem('objectInfo'));
const container = document.querySelector('.containerPage2');

function updateSavedPosts() {
    const savedPosts = JSON.parse(localStorage.getItem('savedPosts')) || [];
    savedPosts.push(savedObjectInfo);
    localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
};


//checks if darkMode was on before going to page and sets according to previous state
document.addEventListener('DOMContentLoaded', function () {
    const page = document.querySelector('body');
    let darkMode = localStorage.getItem('darkMode') === 'true';

    function updateDarkMode() {
        if (darkMode) {
            page.classList.add('darkMode');
        } else {
            page.classList.remove('darkMode');
        }
    }
    updateDarkMode();
});

// adds a 'back' button to return to previous page and uses function to save posts to local storage
button3.addEventListener('click', function () {
    window.location.href = 'index.html';
    updateSavedPosts();
});

//take object saved to local storage and posts in formatted inside of a box
if (savedObjectInfo && container) {

    const titleInfo = savedObjectInfo.Title;
    const userInfo = savedObjectInfo.User;
    const contentInfo = savedObjectInfo.Content;

    if (userInfo && titleInfo && contentInfo) {

    const newDiv = document.createElement('div');
    newDiv.classList.add('newPost');

    const newTitle = document.createElement('h3');
    newTitle.textContent = `${titleInfo}`;
    newDiv.appendChild(newTitle);

    const line = document.createElement('hr');
    line.classList.add('newPostLine');
    newDiv.appendChild(line);

    const newContent = document.createElement('p');
    newContent.textContent = `${contentInfo}`;
    newDiv.appendChild(newContent);

    const newUser = document.createElement('h4');
    newUser.classList.add('userText');
    newUser.textContent = `Posted By: ${userInfo}`;
    newDiv.appendChild(newUser);

    container.appendChild(newDiv);
}};


document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.containerPage2');
    let savedPosts = JSON.parse(localStorage.getItem('savedPosts')) || [];

    savedPosts = savedPosts.reverse();

    savedPosts.forEach(function(post) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('newPost');

        const newTitle = document.createElement('h3');
        newTitle.textContent = post.Title;
        newDiv.appendChild(newTitle);

        const line = document.createElement('hr');
        line.classList.add('newPostLine');
        newDiv.appendChild(line);

        const newContent = document.createElement('p');
        newContent.textContent = post.Content;
        newDiv.appendChild(newContent);

        const newUser = document.createElement('h4');
        newUser.classList.add('userText');
        newUser.textContent = `Posted By: ${post.User}`;
        newDiv.appendChild(newUser);

        container.appendChild(newDiv);
    });
});