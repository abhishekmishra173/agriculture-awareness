document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Mobile Menu Toggle ---
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Burger Animation
    burger.classList.toggle("toggle");
  });

  // Close mobile menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle");
    });
  });

  // --- 2. Scroll Animations (Intersection Observer) ---
  // Select all elements that have animation classes
  const animatedElements = document.querySelectorAll(".fade-in, .slide-up");

  // Setup options for the observer
  const observerOptions = {
    root: null, // use the viewport
    threshold: 0.2, // Trigger when 20% of the item is visible
    rootMargin: "0px 0px -50px 0px",
  };

  const scrollObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        // Add the 'appear' class to trigger CSS transitions
        entry.target.classList.add("appear");
        // Stop observing once it has appeared
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply the observer to all selected elements
  animatedElements.forEach((element) => {
    scrollObserver.observe(element);
  });

  // --- 3. Smooth Scrolling for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Account for the fixed navbar height (approx 70px)
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
