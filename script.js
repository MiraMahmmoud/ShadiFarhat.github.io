
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('.header');
    var headerHeight = header.offsetHeight;
    var contentSection = document.querySelector('.content').offsetTop;

    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;

        if (scrollPosition > headerHeight) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
});

var toggles= document.querySelectorAll(".work-title");

toggles.forEach(function(toggle){

    toggle.addEventListener("click",function(){
        toggle.classList.toggle("_open");
    })

});



document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".project-filter button");
    const projects = document.querySelectorAll(".project-cards a");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.getAttribute("data-filter");
            filterProjects(category);
        });
    });

    function filterProjects(category) {
        projects.forEach(project => {
            const categories = project.getAttribute("data-category").split(" ");
            if (category === "all" || categories.includes(category)) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    }
});
