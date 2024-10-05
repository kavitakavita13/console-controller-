function setTitle(newTitle) {
    const titleElement = document.getElementById( 'page-title');
    titleElement. textContent = newTitle;
}
    // Function to update the description (p element)
    function setDescription (newDescription) {
    const descriptionElement = document.getElementById ('page-description')
    descriptionElement.textContent = newDescription;
    }
    // Function to change the background color of the body
    function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    }
    // Set the font color
function setFontColor(color) {
    document.body.style.color = color;
}


// Set the theme
function setTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    if (theme === 'light') {
        document.body.classList.add('light-theme');
    } else if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}