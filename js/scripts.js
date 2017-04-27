// The variable needs to be created then functions are applied.
var thisYear = new Date().getFullYear();
$("#currentYear").html(
    thisYear
);
console.log(thisYear);

// Checks to see if sessionStorage.firstName and sessionStorage.lastName objects exist.
// If so, add the info to after the currentYear ID. If not, nothing happens.
if (sessionStorage.getItem("firstName") !== null && sessionStorage.getItem("lastName") !== null) {
    $("#currentYear").after(". Welcome, " + sessionStorage.firstName + " " + sessionStorage.lastName);
}

// Adjust the font size on the site with options in localStorage
$("#fSize12").on("click",
    function () {
        $("body").css("font-size", "12px");
        localStorage.setItem("font-size", "12px");
    }
);
$("#fSize16").on("click",
    function () {
        $("body").css("font-size", "16px");
        localStorage.setItem("font-size", "16px");
    }
);
$("#fSize18").on("click",
    function () {
        $("body").css("font-size", "18px");
        localStorage.setItem("font-size", "18px");
    }
);

// Change the background and text colors on the site in localStorage
$("#colorVar1").on("click",
    function () {
        $("body").css("background-color", "white");
        $("body").css("color", "black");
        localStorage.setItem("background-color", "white");
        localStorage.setItem("color", "black");
    }
);
$("#colorVar2").on("click",
    function () {
        $("body").css("background-color", "lightgrey");
        $("body").css("color", "black");
        localStorage.setItem("background-color", "lightgrey");
        localStorage.setItem("color", "black");
    }
);
$("#colorVar3").on("click",
    function () {
        $("body").css("background-color", "black");
        $("body").css("color", "white");
        $("h1").css("color", "black");
        localStorage.setItem("background-color", "black");
        localStorage.setItem("color", "white");
    }
);

// GOAL: Create functionality to show the visitor which page they're visiting.
// If that page matches one of the links in the navigation,
// change the background-color of the parent's <li> tag.

// PSEUDO CODE:

// Check which page we're on and put that in a variable.
var currentPage = window.location.href;
// 1. Put all links in the navigation in an array. --> $("nav ul li a")
// 2. Loop through each array element. --> .each(); ...which needs an anonymous function ()
// 3. Check if the href value matches the current page. -->
// 4. If so, then add a class to the parent element. In this case, it's the <li> tag which the <a> tag lives in.
$("nav ul li a").each(
    function () {
        $(this);
        console.log($(this).attr("href"));
        // 5. Check if the href value of the array item matches the page.
        // It shows in the console log.
        // What's in the ".indexOf()" could've been previously declared as a variable.
        // Similarly, toggleClass would work too.
        if (currentPage.indexOf($(this).attr("href")) !== -1)
            {
                console.log("This is the right one! Click another link to check.");
                $(this).parent().addClass("highlight");
                return false;
            }
    }
);

