// Get references to the Yes and No buttons
const yesButton = document.getElementById('yesbutton');
const noButton = document.getElementById('nobutton');



// Counter to keep track of the number of times the "No" button is clicked
let noButtonClickCount = 0;



// Add a click event listener to the "No" button
noButton.addEventListener('click', function() {
    // Increment the counter
    noButtonClickCount++;
    increaseButtonSize();
    
    if (noButtonClickCount === 1) {
        // Change the text of the "No" button
        noButton.innerText = 'Please say yes..';
    }

    if (noButtonClickCount === 2) {
        // Change the text of the "No" button
        noButton.innerText = 'You sure?';
    }
    if (noButtonClickCount === 3) {
        // Change the text of the "No" button
        noButton.innerText = "Oh, in that case, I guess I'll just enjoy the pancakes all by myself! 🥞"
        ;
    }
    if (noButtonClickCount === 4) {
        // Change the text of the "No" button
        noButton.innerText = "Last chance, I know your favourite sentence is ‘It’s a YES from me’ come on now, give it to me straight";
    }
    if (noButtonClickCount === 5) {
        // Change the text of the "No" button
        noButton.innerText = 'cup se sar phod dungi yaad hai na?';
    }

    if (noButtonClickCount === 6) {
        // Change the text of the "No" button
        noButton.innerText = 'Alright,well,then you left me no choice, im gonna kill you :)';
    }
    });

// Function to increase the size of the "Yes" button
function increaseButtonSize() {
    // Get the current size of the button
    const currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);

    // Increase the size by 5 pixels
    const newSize = currentSize + 20;

    // Apply the new size to the button
    yesButton.style.fontSize = newSize + 'px';
}

yesButton.addEventListener('click', function() {
    // Call a function to redirect to a new page
    redirectToNewPage();
});


// Function to redirect to a new page
function redirectToNewPage() {
    // Change the URL to the desired page
    window.location.href = 'success.html';
    // You can replace 'newpage.html' with the URL of the page you want to navigate to
}