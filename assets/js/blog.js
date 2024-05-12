const button3 = document.getElementById('button3');
const savedObjectInfo = JSON.parse(localStorage.getItem('objectInfo'));
const container = document.querySelector('.containerPage2');

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

button3.addEventListener('click', function () {
    window.location.href = 'index.html';
});

if (savedObjectInfo && container) {

    const titleInfo = savedObjectInfo.Title;
    const userInfo = savedObjectInfo.User;
    const contentInfo = savedObjectInfo.Content;

    if (userInfo) {

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

