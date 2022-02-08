

window.addEventListener("load", function(){
   /*------------ chargement de la page page loader ------------------*/
   document.querySelector(".page-loader").classList.add("fade-out");
   setTimeout(function(){
      document.querySelector(".page-loader").style.display="none";
   },600);
   /* ----------- animation aos scroll -------------- */
   AOS.init();
});



/* ------------------ Quand on clic sur le burger la nav apparait toggle navbar ------------------------ */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

/* fermer la nav quand on clic dessu*/
document.addEventListener("click", function(e){
   if(e.target.closest(".nav-item")){
       toggleNav();
   }
}); 



/*------------------- menu tabs ---------------------- */
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e){
   if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
      const target = e.target.getAttribute("data-target");
      menuTabs.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      const menuSection = document.querySelector(".menu-section");
      menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
      menuSection.querySelector(target).classList.add("active");
      // animation on scroll
      AOS.init();
   }
});

