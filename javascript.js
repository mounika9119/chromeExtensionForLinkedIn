(function() {
    // Function to check if the script is running on the LinkedIn homepage
    function isLinkedInHomepage() {
      return window.location.href.startsWith("https://www.linkedin.com/");
    }
  
    // Function to find profile picture elements
    function findProfilePictures() {
      // Replace with the actual selector for profile picture elements on LinkedIn
      // Use browser developer tools to identify the correct selector
      return document.querySelectorAll(".profile-picture-container img");
    }
  
    // Function to replace profile pictures
    function replaceProfilePictures(imageUrl) {
      const pictures = findProfilePictures();
      pictures.forEach(picture => {
        picture.src = imageUrl;
      });
    }
  
    if (isLinkedInHomepage()) {
      // Replace "your_image_url" with the actual URL of your chosen image
      const imageUrl = "your_image_url";
      replaceProfilePictures(imageUrl);
    }
  })();
  