document.addEventListener("DOMContentLoaded", function(){

// MENU
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

if(menuBtn && mobileMenu){
    menuBtn.addEventListener("click", ()=>{
        menuBtn.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
}

if(closeMenu && mobileMenu && menuBtn){
    closeMenu.addEventListener("click", ()=>{
        mobileMenu.classList.remove("active");
        menuBtn.classList.remove("active");
    });
}

document.querySelectorAll("#mobile-menu a").forEach(link=>{
    link.addEventListener("click", ()=>{
        if(mobileMenu && menuBtn){
            mobileMenu.classList.remove("active");
            menuBtn.classList.remove("active");
        }
    });
});

// CURSOR
const cursor = document.getElementById("cursor");

if(cursor){
    document.addEventListener("mousemove", e=>{
        cursor.style.top = e.clientY + "px";
        cursor.style.left = e.clientX + "px";
    });
}

// REVEAL
window.addEventListener("scroll", ()=>{
    document.querySelectorAll(".reveal").forEach(el=>{
        let top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
});

// TRIGGER reveal on load
document.querySelectorAll(".reveal").forEach(el=>{
    let top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
        el.classList.add("active");
    }
});

// TESTIMONIAL
let index = 0;
const testimonials = document.querySelectorAll(".testimonial");

if(testimonials.length > 0){
    setInterval(()=>{
        testimonials[index].classList.remove("active");
        index = (index + 1) % testimonials.length;
        testimonials[index].classList.add("active");
    }, 4000);
}

});