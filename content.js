// content.js

// The URL of the new profile picture
const newProfilePicURL = chrome.runtime.getURL('new-profile-pic.png');

// Function to replace profile pictures
function replaceProfilePictures() {
  // Select all profile pictures on the LinkedIn feed
  const profilePics = document.querySelectorAll('.feed-shared-actor_avatar img, .feed-shared-actor_container img');

  profilePics.forEach((pic) => {
    pic.src = newProfilePicURL;
  });
}

// Observe changes to the DOM to ensure dynamically loaded content is also modified
const observer = new MutationObserver(replaceProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });

// Initial replacement on page load
replaceProfilePictures();