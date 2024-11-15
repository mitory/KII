document.addEventListener("DOMContentLoaded", function () {
    var headerHeight = window.innerWidth < 992 ? 60 : 0;

    document.querySelectorAll('.main-block__list > a')
    .forEach(anchor => eventScrolling(anchor));
    document.querySelectorAll('a.button')
    .forEach(anchor => eventScrolling(anchor));


function eventScrolling(anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var offset = targetElement.offsetTop - headerHeight;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    }
});