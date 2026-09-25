var favorites = [];

var products = [
    "Breads",
    "Signature Loaf",
    "Pastries",
    "Cakes"
];

function addFavorite(product) {
    if (!favorites.includes(product)) {
        favorites.push(product);
        saveFavorites();
        showFavorites();
    }
}

function showFavorites() {
    var favoritesList = document.getElementById("favorites-list");

    if (favoritesList) {
        favoritesList.innerHTML = "";

        for (var i = 0; i < favorites.length; i++) {
            var item = document.createElement("li");
            item.textContent = favorites[i];
            favoritesList.appendChild(item);
        }
    }
}

function saveFavorites() {
    localStorage.setItem("bakeryFavorites", JSON.stringify(favorites));
}

function loadFavorites() {
    var savedFavorites = localStorage.getItem("bakeryFavorites");

    if (savedFavorites) {
        favorites = JSON.parse(savedFavorites);
        showFavorites();
    }
}

var buttons = document.querySelectorAll(".favorite-button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var product = this.getAttribute("data-product");
        addFavorite(product);
    });
}

var clearButton = document.getElementById("clear-favorites");

if (clearButton) {
    clearButton.addEventListener("click", function () {
        favorites = [];
        saveFavorites();
        showFavorites();
    });
}

loadFavorites();


function validateForm(event) {
    var name = document.getElementById("name");
    var email = document.getElementById("email");

    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");

    var isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";

    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!email.value.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
}

var contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", validateForm);
}