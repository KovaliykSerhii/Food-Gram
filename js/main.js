// script.js
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all
        navItems.forEach(i => i.classList.remove('active'));
        // Add active class to the clicked item
        this.classList.add('active');
    });
});
