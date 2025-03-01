let cookies = 0;
let cookiesPerClick = 1;
let upgradeCost = 100;

// DOM elements
const cookieCountDisplay = document.getElementById('cookie-count');
const cookieButton = document.getElementById('cookie-btn');
const upgradeButton = document.getElementById('upgrade-btn');

// Update cookie count on the display
function updateCookieCount() {
    cookieCountDisplay.textContent = cookies;
}

// Function to handle clicking the cookie button
cookieButton.addEventListener('click', () => {
    cookies += cookiesPerClick;
    updateCookieCount();
});

// Function to handle buying the upgrade
upgradeButton.addEventListener('click', () => {
    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        cookiesPerClick *= 2;  // Double the cookies per click
        upgradeCost = Math.floor(upgradeCost * 1.5); // Increase cost of the next upgrade
        updateCookieCount();
        alert('You bought an upgrade! Cookies per click doubled!');
    } else {
        alert('Not enough cookies for this upgrade!');
    }
});

// Disable the upgrade button if the player doesn’t have enough cookies
function checkUpgradeButtonStatus() {
    if (cookies >= upgradeCost) {
        upgradeButton.disabled = false;
    } else {
        upgradeButton.disabled = true;
    }
}

// Update the upgrade button status on each cookie click
setInterval(checkUpgradeButtonStatus, 100);

// Initial setup
updateCookieCount();
checkUpgradeButtonStatus();
