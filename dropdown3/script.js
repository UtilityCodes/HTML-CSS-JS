// store respective elements into variables so they are reusable
const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

// create a function to toggle the dropdown element 
const toggleDropdown = function(){
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
};

// calling the above function to show the dropdwon
dropdownBtn.addEventListener("click", function(e){
    e.stopPropagation();
    toggleDropdown();
});

// close the dropdwon
document.documentElement.addEventListener("click", function(e){
    if (dropdownMenu.classList.contains("show")){
        toggleDropdown();
    }
});