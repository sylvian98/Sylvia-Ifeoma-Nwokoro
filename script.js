//hamburger menu (Mobile)
document.addEventListener("DOMContentLoaded", function(){
  const mobileNav = document.querySelector(".mobile-navigation");
  const burgerMenu = document.querySelector(".mobile-burger-menu");
  const closeBtn = document.querySelector(".close-btn");
  const menuList = document.querySelector(".mobile-nav-bar");
  const navLinks = document.querySelectorAll(".mobile-nav-bar li a");
  burgerMenu.addEventListener("click", function(){
    burgerMenu.style.display="none";
    closeBtn.style.display="block";
    menuList.style.display="block";
    mobileNav.classList.add("open");
  });
  closeBtn.addEventListener("click", function(){
    burgerMenu.style.display="block";
    closeBtn.style.display="none";
    menuList.style.display="none";
    mobileNav.classList.remove("open");
  });
  navLinks.forEach(link => {
    link.addEventListener("click", function(){
      burgerMenu.style.display="block";
      closeBtn.style.display="none";
      menuList.style.display="none";
      mobileNav.classList.remove("open");
    })
  })
});
//Navigation scroll menu
window.addEventListener("scroll", () => {
  const navigationBar = document.querySelector(".navigation-bar");
  if (window.scrollY > 50) {
    navigationBar.classList.add("scrolled");
  } else {
    navigationBar.classList.remove("scrolled");
  }
});
//scroll trigger for work section
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  const navigation = document.querySelector(".navigation-bar");
  const heading = document.querySelector("h1");
  const services = document.querySelectorAll(".services-content");
  const sectionTitle = document.querySelector(".intro-title");
  const sectionContent = document.querySelector(".content");
  const servicesBlock = gsap.utils.toArray(".services-content");
  //for loop for scroll trigger
  servicesBlock.forEach((block) => {
    gsap.from(block, {
      y: 200,
      scrollTrigger: {
        // will start the animation when it reaches to the class name
        trigger: block,
      },
    });
  });
  var tl = gsap.timeline({ defaults: { opacity: 0 } }); // by default it will start with an opacity of 0
  //navigation bar animation
  tl.from(navigation, {
    y: -200,
    duration: 0.6,
    ease: "sine.out",
    yoyo: true,
  });
  //heading animation
  tl.from(
    heading,
    {
      x: -500,
      duration: 1,
      ease: "sine.out",
      yoyo: true,
    },
    "-=0.8"
  );
  tl.from(sectionTitle, {
    x: -200,
    duration: 0.5,
    ease: "back",
  });
  tl.from(sectionContent, {
    x: 200,
    duration: 0.5,
    ease: "back",
    yoyo: true,
  });
  //my services block
  tl.from(services, {
    duration: 0.5, // it will last for 5 seconds
    ease: "back",
    delay: 0.2,
    stagger: {
      // it will stagger in one by one for 1 second
      each: 0.2,
      amount: 1, // will start within 1 second
    },
  });
});
