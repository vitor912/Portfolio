function openNav() {
    var x = document.getElementById("navigation");

    if(x.className === "navigation") {
        x.className += "menujs";
        document.getElementById("threeline").innerHTML = "&Cross;";
    } sselse {
        x.className = "navigation";
        document.getElementById("threeline").innerHTML = "&#9776;";
    }
}

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTo > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTo = 0;
    document.documentElement.scrollTop = 0;
}