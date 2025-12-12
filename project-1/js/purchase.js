document.addEventListener("DOMContentLoaded", function(){ //waits until the page has loaded and thus can be manipulated, and then runs this function. this is like an srb2 reference.......
    //get all the form elements
    const reviewForm = document.getElementById("reviewForm");
    const purchaseForm = document.getElementById("purchaseForm");

    //alerts for when you click submit

    reviewForm.addEventListener("submit", function(event){ //thank you https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
        //get relevant form variables //THANK YOU AGAIN MDN https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript
        //const reviewFormName = reviewForm.getElementsById("name");
        var formData = new FormData(reviewForm);
        let name = formData.get("name");
        let rating = formData.get("star"); //string values are just "one"-"five"

        alert("Thank you for your " + rating + " star review, " + name + "!");
    });

    purchaseForm.addEventListener("submit", function(event){
        //get relevant form variables
        var formData = new FormData(purchaseForm);
        let name = formData.get("fname");
        let shipping = formData.get("shipping"); //these string values are either "your (something)" or "I"

        alert("Thank you for your purchase, " + name + "! Don't fret, " + shipping + " will arrive shortly!");
    });
});