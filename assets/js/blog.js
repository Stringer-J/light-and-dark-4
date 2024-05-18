const button3 = document.getElementById('button3');
const savedObjectInfo = JSON.parse(localStorage.getItem('objectInfo'));
const container = document.querySelector('.containerPage2');

// loads the saved posts array and updates it with a new object
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

// adds functionality to the 'back' button to return to previous page and uses function to save posts to local storage
button3.addEventListener('click', function () {
    window.location.href = 'index.html';
    updateSavedPosts();
});

//take object saved to local storage and posts it formatted inside of a box
if (savedObjectInfo && container) {

    const titleInfo = savedObjectInfo.Title;
    const userInfo = savedObjectInfo.User;
    const contentInfo = savedObjectInfo.Content;

    if (userInfo && titleInfo && contentInfo) {

    // creates box
    const newDiv = document.createElement('div');
    newDiv.classList.add('newPost');

    // creates title text in box
    const newTitle = document.createElement('h3');
    newTitle.textContent = `${titleInfo}`;
    newDiv.appendChild(newTitle);

    // creates line under title text
    const line = document.createElement('hr');
    line.classList.add('newPostLine');
    newDiv.appendChild(line);

    // creates text using the content info
    const newContent = document.createElement('p');
    newContent.textContent = `${contentInfo}`;
    newDiv.appendChild(newContent);

    // creates text saying what user posted the entry
    const newUser = document.createElement('h4');
    newUser.classList.add('userText');
    newUser.textContent = `Posted By: ${userInfo}`;
    newDiv.appendChild(newUser);

    // puts finished box on page
    container.appendChild(newDiv);
}};

// creates a new entry for each post already saved previously
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.containerPage2');
    let savedPosts = JSON.parse(localStorage.getItem('savedPosts')) || [];

    // loads the posts in reverse so that the newest is at the top
    savedPosts = savedPosts.reverse();

    // does everything above but for each object in the savedPosts array
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