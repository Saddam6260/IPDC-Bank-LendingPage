const toggleBtn = document.querySelector(".toggle-btn");
const links = document.querySelector(".links-wrap");

toggleBtn.addEventListener("click", function() {

    links.classList.toggle("show-links");
    toggleBtn.classList.toggle("rotate");
})

