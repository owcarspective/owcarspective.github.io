function navDropdown() 
{
    var x = document.getElementById("navmenu");
    if (x.className === "nav-menu") {
        x.className += " dropdown";
    } else {
        x.className = "nav-menu";
    }
}