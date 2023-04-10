const searchField = document.getElementById("search-field");
const searchDropdown = document.getElementById("search-dropdown");
const menubar = document.getElementById("drawer-navigation");

searchField.addEventListener('keypress', () => {
    const searchText = document.querySelector("#search-field input").value;
    if(searchText.length > 0){
        searchDropdown.style.display = 'block'
    }else{
        searchDropdown.style.display = "none";
    }
})
window.onclick = () => {
    searchDropdown.style.display = "none";
}

// navigation menu control

function openMenu() {
    if (menubar.style.transform === 'translateX(-100%)') {
        menubar.style.transform = 'translateX(0%)';
    } else {
        menubar.style.transform = 'translateX(-100%)';
    }
}