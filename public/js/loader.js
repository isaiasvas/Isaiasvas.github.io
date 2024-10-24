$(document).ready(function() {
    // Carrega o header, content e footer
    $('#header').load('./layouts/header.html');
    $('#hero').load('./layouts/sections/hero.html');
    $('#services').load('./layouts/sections/services.html');
    $('#skills').load('./layouts/sections/skills.html');
    $('#footer').load('./layouts/footer.html');
});