//alert("gallery.js running for red thingy");

// IMPORTANT: Before you start, be sure to customize all href="" values within the server include PHP files so your site navigation works
//nvm he said forget about this cause he removed php
// DONE 1: Begin by adding a SCRIPT element to 'red/gallery.php' that refers to this EXTERNAL JavaScript File

// DONE 2a: Grab the UL for #blockGallery and assign it to the variable 'blockGallery' - but use document.getElementById this time
const blockGallery = document.getElementById("blockGallery"); //with getelementbyid, you dont need the #
console.log(blockGallery);

// DONE 2b: Create an array called 'blockLinks' to contain all the A elements inside the above variable, 'blockGallery' - but use querySelectorAll instead of getElementsByTagName
const blockLinks = blockGallery.querySelectorAll("li > a");
console.log(blockLinks);

// DONE 2c: Make a loop that iterates through each item in the 'blockLinks' array that you just created above
blockLinks.forEach((blockLink) =>
{
    // DONE 3a: For each one of the A elements inside the array 'blockLinks', attach an onclick attribute that calls an anonymous function
    blockLink.addEventListener("click", function(event)
    {
        // DONE 4a: For the link that was clicked, capture the value of the href attribute as a variable called 'blockHref'
        let blockHref = blockLink.getAttribute("href");

        // DONE 4b: Grab the IMG element just below the UL containing the links to each of the block images with the appropriate ID (look at the HTML in 'red/gallery.php') and assign it to a variable of the same name - use document.getElementById below
        const blockImage = document.getElementById("blockImage");

        // DONE 4c: Change the src attribute of the above IMG element (use the variable name) using the setAttribute method, using the above 'blockHref' variable
        blockImage.setAttribute("src", blockHref);

        // DONE 5a: Obtain the title attribute of the link clicked (referred to as 'this') and set it as the value for a new variable called 'blockCaption'
        let blockCaption = blockLink.getAttribute("title");

        // DONE 5b: Create another variable called 'blockCaptionParagraph' that represents the P element with the id 'blockCaption' - use either getElementById or querySelector
        const blockCaptionParagraph = document.getElementById("blockCaption");

        // DONE 5c: Set the text of that paragraph to be equal to the value of the title attribute for the link clicked
        blockCaptionParagraph.textContent = blockCaption;

        // DONE 3c: Cancel the default behaviour of each hyperlink (which is to follow the href)
        event.preventDefault();

        // DONE 3b: End the 'onclick' event anonymous function
    });

    // DONE 2d: End the loop through the 'blockLinks' array
});
