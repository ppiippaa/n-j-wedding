// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover effect on story images

for (let i = 0; i < document.querySelectorAll('.image').length; i++) {

    document.querySelectorAll('.image')[i].addEventListener('mouseenter', function() {
        this.nextElementSibling.removeAttribute('hidden');
        console.log(this.nextElementSibling);
    })
}

for (let i = 0; i < document.querySelectorAll('.image').length; i++) {

    document.querySelectorAll('.image')[i].addEventListener('mouseout', function () {
        this.nextElementSibling.setAttribute('hidden', true);
        console.log(this);
    })
}

