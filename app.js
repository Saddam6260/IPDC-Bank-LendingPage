const toggleBtn = document.querySelector(".toggle-btn");
const links = document.querySelector(".links-wrap");

toggleBtn.addEventListener("click", function() {

    links.classList.toggle("show-links");
    toggleBtn.classList.toggle("rotate");
})

/** Fixed Nav **/ 
const navber = document.querySelector(".navber");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset
    const navHeight = navber.getBoundingClientRect().height;

    if(navHeight < scrollHeight) {
        navber.classList.add("fixed-nav");
    }else{
        navber.classList.remove("fixed-nav");
    }

    if(scrollHeight > 50) {
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link");
    }
})

