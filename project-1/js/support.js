document.addEventListener("DOMContentLoaded", function(){ //waits until the page has loaded and thus can be manipulated, and then runs this function. this is like an srb2 reference.......
    //get all the form elements
    const contactForm = document.getElementById("contactForm");

    //alerts for when you click submit

    contactForm.addEventListener("submit", function(event){
            alert("Your support ticket has been recieved. I will email you shortly!");
    });
});