function RedirectToHomePage() {
    window.location.href ="pages/home.html";
}

function OpenHomePageInNewTab() {
    window.open("pages/home.html", "_blank");
    RedirectToHomePage();
}

console.log("\nWidth: " + window.innerWidth + "px");
console.log("\nHeight: " + window.innerHeight + "px");

RedirectToHomePage();




