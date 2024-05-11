const button3 = document.getElementById('button3');
const savedObjectInfo = JSON.parse(localStorage.getItem('objectInfo'));
const container = document.querySelector('.containerPage2');

button3.addEventListener('click', function () {
    window.location.href = 'index.html';
});

console.log(savedObjectInfo);

if (savedObjectInfo && container) {
    const userInfo = savedObjectInfo.User;
    if (userInfo) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `User: ${userInfo}`;
    container.appendChild(newParagraph);
}};

if (savedObjectInfo && container) {
    const titleInfo = savedObjectInfo.Title;
    if (titleInfo) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `Title: ${titleInfo}`;
    container.appendChild(newParagraph);
}};

if (savedObjectInfo && container) {
    const contentInfo = savedObjectInfo.Content;
    if (contentInfo) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `Content: ${contentInfo}`;
    container.appendChild(newParagraph);
}};