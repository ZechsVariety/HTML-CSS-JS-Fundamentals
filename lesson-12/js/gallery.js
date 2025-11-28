// Image Gallery JavaScript
// This code inspired by the book, DOM Scripting by Jeremy Keith (http://domscripting.com/book/)

// IMPORTANT: Begin by adding a SCRIPT element to 'index.html' that refers to this EXTERNAL JavaScript File

// DONE 1a: Wait until the DOM is ready to be manipulated
document.addEventListener("DOMContentLoaded", function(){ //waits until the page has loaded and thus can be manipulated, and then runs this function. this is like an srb2 reference.......
    // DONE 2a: Grab the UL for the image gallery and assign it to the variable 'gallery'
    const gallery = document.querySelector("#imagegallery"); //constant--doesnt change. grabs the singular gallery ul (its id is imagegallery)
    //console.log(gallery); //console is within inspect element. you can also hover over the console stuff which is really nice
    // DONE 2b: Create an array composed of all the A (anchor) elements inside that UL, now referred to as 'gallery'
    const links = document.querySelectorAll("#imagegallery a") //gets all the a elements within imagegallery
    //console.log(links);
    // DONE 2c: Create a loop that iterates through each item in the links array that we just created
    for(let i = 0; i < links.length; i++) //i think "let" lets you set a variable's value when it aint const or somethin
    {
        // DONE 3a: For each one of those A elements, attach an onclick attribute that calls an anonymous function
        //console.log(links[i]);
        links[i].addEventListener("click", function(event){ //runs when you click one of the links
            //console.log("The anchor clicked is" + event); //preserve log in inspect element is a good setting ya
            // DONE 4a: For the link that was clicked, capture the value of the href attribute as a variable called 'source'
            let source = links[i].getAttribute("href");
            //console.log(source);
            // DONE 4b: Grab the IMG element with the id 'placeholder' and assign it to the variable of the same name
            const placeholder = document.querySelector("#placeholder"); //if you type a variable name into the console it will pop up :OO
            // DONE 4c: Change the image file that the IMG element points to in the src attribute based on the link clicked
            placeholder.setAttribute("src", source); //replace image
            // DONE 5a: Capture the title attribute of the link clicked and assign it as the value for the variable 'text'
            let text = links[i].getAttribute("title"); //grabs the tooltip
            console.log(text);
            // DONE 5b: Grab the P element with the id 'description'
            const description = document.querySelector("#description");
            // DONE 5c: Set the content of that paragraph to the value of the title attribute for the link clicked
            description.textContent = text; //replace text
            // DONE 3c: Cancel the default behaviour of each hyperlink (which is to follow the href)
            event.preventDefault(); //stops links from redirecting (evil...)
            // DONE 3b: End the 'onclick' event anonymous function
        });
        // DONE 2d: End the loop through the links array
    }; //idk why you need a semicolon im so sad, it might not be needed tho idk
    // DONE 1b: End the DOM ready function
});