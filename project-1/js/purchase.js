document.addEventListener("DOMContentLoaded", function(){ //waits until the page has loaded and thus can be manipulated, and then runs this function. this is like an srb2 reference.......
    //get all the form elements
    const reviewForm = document.getElementById("reviewForm");
    const purchaseForm = document.getElementById("purchaseForm");

    //alerts for when you click submit

    reviewForm.addEventListener("submit", function(event){
            alert("Thank you for your review!");
    });

    purchaseForm.addEventListener("submit", function(event){
            alert("Thank you for your purchase! The Theory of Gravity will arrive shortly!");
    });
});