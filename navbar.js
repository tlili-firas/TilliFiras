const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const navbar = document.getElementById("navbar");
let activeItem = document.getElementById("introNavBar");

navbar.addEventListener("click",function(event){
    const clickedItem = event.target.closest(".nav-link");

    if(!clickedItem) return;

    activeItem.classList.remove("nav-link--active");
    
    clickedItem.classList.add("nav-link--active");
    activeItem = clickedItem;
});


//Observe if a section is visible in the viewport(50% of it is visible)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.toggle("nav-link--active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { threshold: 0.5 } // visibilty threshold
);

sections.forEach(section => observer.observe(section));