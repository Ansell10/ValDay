const answers_no = {
    english: [
        "No",
        "Are you sure?",
        "Are you really sure??",
        "Are you really really sure???",
        "Think again?",
        "Don't believe in second chances?",
        "Why are you being so cold?",
        "Maybe we can talk about it?",
        "I am not going to ask again!",
        "Ok, now this is hurting my feelings!",
        "You are now just being mean!",
        "Why are you doing this to me?",
        "Please give me a chance!",
        "I am begging you to stop!",
        "Ok, Let's just start over.."
    ]
};

const answers_yes = {
    english: "Yes"
};

let clicks = 0; // Track how many times the "No" button is clicked
let size = 50; // Initial size of the "Yes" button
let i = 0; // Start from the first response

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');

// Event listener for "No" button click
no_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    
    // Change the banner source only on the first click
    if (clicks === 0) {
        banner.src = "public/images/no.jpeg";
        refreshBanner();
    }
    clicks++;

    // Increase the size of the "Yes" button gradually
    const sizes = [40, 50, 30, 35, 45];
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random];

    // Apply new size to the "Yes" button
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;

    // Show the next response
    let total = answers_no.english.length;
    if (i < total - 1) {
        no_button.innerHTML = answers_no.english[i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no.english[i]); // Alert the final response
        resetButton(); // Reset the button after alert
    }
});

// Event listener for "Yes" button click
yes_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.png";
    refreshBanner();

    // Hide buttons and show the success message
    document.getElementsByClassName('buttons')[0].style.display = "none";
    document.getElementsByClassName('message')[0].style.display = "block";
});

// Function to refresh the banner GIF by forcing reload
function refreshBanner() {
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

// Function to reset button and message after the final "No" click
function resetButton() {
    i = 0;
    no_button.innerHTML = answers_no.english[i]; // Reset the "No" button text
    yes_button.innerHTML = answers_yes.english; // Reset the "Yes" button text
    yes_button.style.height = "50px"; // Reset the size of the "Yes" button
    yes_button.style.width = "50px";
    size = 50; // Reset the size counter
}
