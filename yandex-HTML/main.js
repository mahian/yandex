const searchField = document.getElementById("search-field");
const searchDropdown = document.getElementById("search-dropdown");

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