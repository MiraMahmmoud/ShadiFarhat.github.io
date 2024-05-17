document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class "work-title"
    var titles = document.querySelectorAll(".work-title");

    // Get all elements with class "work-desc"
    var descriptions = document.querySelectorAll(".work-desc");

    // Open the first description by default
    descriptions[0].classList.add("visible");

    // Function to toggle the visibility of a description
    function toggleDescription(index) {
        descriptions[index].classList.toggle("visible");
        adjustGap();
    }

    // Function to adjust the gap between descriptions
    function adjustGap() {
        var visibleCount = document.querySelectorAll(".work-desc.visible").length;
        var gapHeight = (3 - visibleCount) * 20;
        descriptions.forEach(function(description) {
            description.style.marginTop = gapHeight + "px";
        });
    }

    // Loop through each title element
    titles.forEach(function(title, index) {
        // Add click event listener to each title
        title.addEventListener("click", function() {
            // Toggle the clicked description
            toggleDescription(index);
        });
    });
});

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

document.addEventListener("DOMContentLoaded", function() {
    var homePieces = document.querySelectorAll('.home-piece');

    homePieces.forEach(function(homePiece) {
        homePiece.addEventListener("mouseenter", function() {
            homePieces.forEach(function(piece) {
                if (piece !== homePiece) {
                    piece.classList.add('fade');
                }
            });
        });

        homePiece.addEventListener("mouseleave", function() {
            homePieces.forEach(function(piece) {
                piece.classList.remove('fade');
            });
        });
    });
});

