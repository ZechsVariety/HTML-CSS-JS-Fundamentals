document.addEventListener("DOMContentLoaded", function(){
    var impact = document.getElementById("impact");
    var apple = document.getElementById("apple");

    console.log(window.scrollY);

    setInterval(DisplayImpact, 10); //runs the DisplayImpact() function every 10 milleseconds. thank you waelhe for the solution to looping a slice of javascript: https://stackoverflow.com/questions/26269433/check-javascript-condition-every-frame

    function DisplayImpact() {
        if(window.scrollY >= 1100) //check if you've scrolled to the bottom. thanks mdn, as always: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
        {
            //impact.style.left = "895px";

            impact.style.visibility = "visible";
        }
        else
        {
            //impact.style.left = "9999px";

            impact.style.visibility = "hidden"; //this worked better than setting the image's position because then it doesn't mess up the horizontal scrollbar
        }
    }
});