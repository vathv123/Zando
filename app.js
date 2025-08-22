let cursor = document.querySelector("#cursor");
let womenDD = document.querySelector(".WOMEN");
let menDD = document.querySelector(".MEN");
let boyDD = document.querySelector(".BOYS");
let girlDD = document.querySelector(".GIRLS");
let arrow = document.querySelector(".arrow");
let arrow2 = document.querySelector(".arrow2");
let arrow3 = document.querySelector(".arrow3");
let arrow4 = document.querySelector(".arrow4");
const toggleShow1 = document.querySelector(".toggleShow1");
const toggleShow2 = document.querySelector(".toggleShow2");
const toggleShow3 = document.querySelector(".toggleShow3");
const toggleShow4 = document.querySelector(".toggleShow4");

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out(1.7)",
  });
});

let button = true;
let toggleAction = () => {
  womenDD.addEventListener("click", (e) => {
    if (button) {
      arrow.style.rotate = "-360deg";
      toggleShow1.style.height = "auto";
      toggleShow1.style.padding = "16px";
      button = false;
    } else if (button != true) {
      arrow.style.rotate = "-90deg";
      toggleShow1.style.height = "0";
      toggleShow1.style.padding = "0px";
      button = true;
    }
  });
  menDD.addEventListener("click", () => {
    if (button) {
      arrow2.style.rotate = "-360deg";
      toggleShow2.style.height = "auto";
      toggleShow2.style.padding = "16px";
      button = false;
    } else if (button != true) {
      arrow2.style.rotate = "-90deg";
      toggleShow2.style.height = "0";
      toggleShow2.style.padding = "0px";
      button = true;
    }
  });
  boyDD.addEventListener("click", () => {
    if (button) {
      arrow3.style.rotate = "-360deg";
      toggleShow3.style.height = "auto";
      toggleShow3.style.padding = "16px";
      button = false;
    } else if (button != true) {
      arrow3.style.rotate = "-90deg";
      toggleShow3.style.height = "0";
      toggleShow3.style.padding = "0px";
      button = true;
    }
  });
  girlDD.addEventListener("click", () => {
    if (button) {
      arrow4.style.rotate = "-360deg";
      toggleShow4.style.height = "auto";
      toggleShow4.style.padding = "16px";
      button = false;
    } else if (button != true) {
      arrow4.style.rotate = "-90deg";
      toggleShow4.style.height = "0";
      toggleShow4.style.padding = "0px";
      button = true;
    }
  });
};
toggleAction();

const navItems = document.querySelectorAll(".navItem");
const glider = document.getElementById("glider");

let activeIndex = 0;

function updateColors() {
  navItems.forEach((item, idx) => {
    if (idx === activeIndex) {
      item.style.color = "black";
    } else {
      item.style.color = "white";
    }
  });
}

function moveGliderTo(el, index) {
  const rect = el.getBoundingClientRect();
  const parentRect = el.parentElement.getBoundingClientRect();
  glider.style.width = `${rect.width}px`;
  glider.style.left = `${rect.left - parentRect.left}px`;

  activeIndex = index;
  updateColors();
}

navItems.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    moveGliderTo(item, index);

    if (index === 0) {
      toggleShow1.style.display = "grid";
    } else {
      toggleShow1.style.display = "none";
    }
    if (index === 1) {
      toggleShow2.style.display = "grid";
    } else {
      toggleShow2.style.display = "none";
    }
    if (index === 2) {
      toggleShow3.style.display = "grid";
    } else {
      toggleShow3.style.display = "none";
    }
    if (index === 3) {
      toggleShow4.style.display = "grid";
    } else {
      toggleShow4.style.display = "none";
    }
  });
});

moveGliderTo(navItems[0], 0);

var swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  allowTouchMove: false,
  autoplay: {
    delay: 12000, // 5000ms = 5 seconds
    disableOnInteraction: false,
  },
});

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth curve
  smooth: true,
  direction: "vertical",
  gestureDirection: "vertical",
  scrollElements: ['.lenis-scrollable'],
  smoothTouch: true,
  touchMultiplier: 1.5,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

let lastY = 0;

addEventListener("scroll", () => {
  let scrolling = lastY < scrollY ? "down" : "up";
  if (scrolling === "down" || scrolling < 100) {
    gsap.to("nav", {
      y: -250,
    });
  } else {
    gsap.to("nav", {
      y: 0,
    });
  }
  lastY = scrollY;
});
document.addEventListener("DOMContentLoaded", () => {
  var swiper0 = new Swiper(".swiper0", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    allowTouchMove: false,
    autoplay: {
      delay: 5000, // 5000ms = 5 seconds
      disableOnInteraction: false,
    },
  });
  const swiper2 = new Swiper(".swiper2", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 600,
    allowTouchMove: false,
    navigation: {
      nextEl: ".swiper2-button-next",
      prevEl: ".swiper2-button-prev",
    },
     breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    // autoplay: {
    //   delay: 500, // 0.5 seconds
    //   disableOnInteraction: false,
    // },
  });
  const swiper3 = new Swiper(".swiper3", {
    loop: false,
    slidesPerView: 1,
    allowTouchMove: false,
    spaceBetween: 20,
    speed: 600,
    navigation: {
      nextEl: ".swiper3-button-next",
      prevEl: ".swiper3-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    // autoplay: {
    //   delay: 500, // 0.5 seconds
    //   disableOnInteraction: false,
    // },
  });
  const swiper4 = new Swiper(".swiper4", {
    loop: false,
    slidesPerView: 1,
    allowTouchMove: false,
    spaceBetween: 20,
    speed: 400,
    navigation: {
      nextEl: ".swiper4-button-next",
      prevEl: ".swiper4-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    // autoplay: {
    //   delay: 500, // 0.5 seconds
    //   disableOnInteraction: false,
    // },
  });
});

// gsap.utils.toArray(".swiper-slide video").forEach((video) => {
//   gsap.fromTo(
//     video,
//     {
//       height: "70vh",
//     },
//     {
//       height: "100vh",
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: video,
//         start: "top 70%",
//         end: "bottom center",
//         scrub: 1,
//       },
//     }
//   );
// });

gsap.set('.settingList', { x: 500 });

let isOpen = false;

const toggleElements = document.querySelectorAll('.setting, .settingDuplicated');
toggleElements.forEach(el => {
  el.addEventListener('click', () => {
    if (!isOpen) {
      gsap.to('.settingList', {
        x: 0,
        duration: 0.5,
        // onStart: () => {
        //   lenis.stop(); // Pause smooth scroll
        // }
      });
    } else {
      gsap.to('.settingList', {
        x: 500,
        duration: 0.5,
        // onComplete: () => {
        //   lenis.start(); // Resume smooth scroll
        // }
      });
    }
    isOpen = !isOpen;
  });
});

const cancelElements = document.querySelectorAll('.cancelSetting');
cancelElements.forEach(el => {
  el.addEventListener('click', () => {
    if (isOpen) {
      gsap.to('.settingList', {
        x: 500,
        duration: 0.5,
        // onComplete: () => {
        //   lenis.start(); // Resume smooth scroll
        // }
      });
      isOpen = false;
    }
  });
});
let elClick = true
document.querySelectorAll('.item').forEach((el, index) => {
  el.setAttribute('onclick', `showItemDetail(${index})`);
    el.addEventListener('click', () => {
      document.querySelector('.button').style.display = 'block'
    })
  document.querySelector('.button').addEventListener('click', () => {
    document.querySelector('.button').style.display = 'none'
  })
});

const products = [
  {
    images: [
      "https://zandokh.com/image/catalog/products/2025-05/12225031196%20Replace/ZANDO2804202519833.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/12225031196/013.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/12225031196%20Replace/ZANDO2804202519836.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/12225031196%20Replace/ZANDO2502251410.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/12225031196%20Replace/ZANDO2804202519844.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/12225031196%20Replace/ZANDO2804202519842.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/12225031196/ZANDO2804202519843.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/12225031196/013.5.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/12225031196/013.3.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/12225031196/013.2.jpg",

    ],
    mainImage: "https://zandokh.com/image/catalog/products/2025-05/12225031196%20Replace/ZANDO2804202519833.jpg",
    price: 15.81,
    oldPrice: 23.59,
    code: 12225031196,
    colors: 1,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    typeColors: 'blue',
    size5: 'XXL',
    description: 'Straight fit cargo denim jean featuring side pockets with cargo pockets and front button with zispper-up fastening.',
    discount: '-33%',
    name: "Straight Fit Cargo Denim jean",
    // description: "Cool sneakers for skating."
  },
  {
    images: [
      "https://zandokh.com/image/catalog/products/2025-05/21225031204/ZANDO2005202525593.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/21225031204/ZANDO2005202525603.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/21225031204/ZANDO2005202525596.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/21225031204/ZANDO2005202525595.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/21225031204/ZANDO2005202525592.jpg",
    ],
    typeColors: 'white',
    typeColors0: 'Beige',
    mainImage: "https://zandokh.com/image/catalog/products/2025-05/21225031204/ZANDO2005202525603.jpg",
    price: 15.81,
    colors: 2,
    oldPrice: 23.59,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: 'XXL',
    code: 12225031196,
    description: "Regular Print Crew Neck T-Shirt featuring short sleeves with front graphic design printed and round neckline.",
    discount: '-33%',
    name: "Regular Print Crew Neck T-Shirt",
  },
  {
    images: [
      "https://zandokh.com/image/catalog/products/2025-05/12225041306/ZANDO30.05.20250169.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/12225041306/ZANDO30.05.20250170.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/12225041306/ZANDO30.05.20250163.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/12225041306/ZANDO30.05.20250161.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/12225041306/ZANDO30.05.20250162.jpg"
    ],
    name: "Regular Short Sleeves T-Shirt",
    typeColors: 'white',
    typeColors0: 'Dark gray',
    typeColors1: 'Mid blue',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/12225041306/ZANDO30.05.20250169.jpg',
    price: 4.42,
    oldPrice: 6.59,
    discount: '-33%',
    colors: 5,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: 'XXL',
    code: 12225041306,
    description: 'Regular t-shirt featuring short sleeves and round neck.',

  },
  {
    images: [
      "https://zandokh.com/image/catalog/products/2025-05/21225031216/ZANDO1905202525506.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/21225031216/ZANDO1905202525515.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/21225031216/ZANDO1905202525512.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/21225031216/ZANDO1905202525518.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/21225031216/ZANDO1905202525516.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/21225031216/ZANDO1905202525517.jpg"
    ],
    name: "Wide Leg Cargo Trouser",
    typeColors: 'black',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/12225041306/ZANDO30.05.20250169.jpg',
    price: 16.48,
    oldPrice: 24.59,
    discount: '-33%',
    colors: 1,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: 'XXL',
    code: 21225031216,
    description: 'Wide leg cargo trouser featuring side pockets with cargo pockets and front button with zipper up fastening and elstic waistband.',
  },
  {
    images: [
      "https://zandokh.com/image/catalog/products/2025-04/1122502904/Shirt%20063.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/1122502904%20replace/ZANDO2804202519827.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/1122502904%20replace/ZANDO2804202519823.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/1122502904%20replace/ZANDO2804202519818.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/1122502904%20replace/ZANDO2804202519817.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/1122502904%20replace/ZANDO2804202519816.jpg",
      "https://zandokh.com/image/catalog/products/2025-04/1122502904/Shirt%20066.jpg",
    ],
    name: "Oversized T-Shirts",
    typeColors: 'White',
    typeColors0: 'Black',
    typeColors1: 'Darkgray',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-04/1122502904/Shirt%20063.jpg',
    price: 9.95,
    oldPrice: 12.95,
    discount: '-23.17%',
    colors: 3,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: 'XXL',
    code:  1122502904,
    description: 'Oversized t-shirt featuring short sleeves and round neck.', 
  },
  {
    images: [
      "https://zandokh.com/image/catalog/products/2025-01/1122412599/IMG_0019.jpg",
      "https://zandokh.com/image/catalog/products/2025-01/1122412599/IMG_0020.jpg",
      "https://zandokh.com/image/catalog/products/2025-01/1122412599/IMG_0019%20-%20Copy.jpg",
      "https://zandokh.com/image/catalog/products/2025-01/1122412599%20Replace/IMG_0282.jpg",
      "https://zandokh.com/image/catalog/products/2025-01/1122412599%20Replace/IMG_0291.jpg",
      "https://zandokh.com/image/catalog/products/2025-01/1122412599%20Replace/IMG_0280.jpg",
      "https://zandokh.com/image/catalog/products/2025-01/1122412599%20Replace/IMG_0278.jpg",
      "https://zandokh.com/image/catalog/products/2025-01/1122412599%20Replace/IMG_0277.jpg"
    ],
    name: "Slim Fit Polo Shirts",
    typeColors: 'White',
    typeColors0: 'Black',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-01/1122412599/IMG_0019.jpg',
    price: 12.46,
    oldPrice: 18.59,
    discount: '-33%',
    colors: 2,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: 'XXL',
    code:   1122412599,
    description: 'Slim fit polo shirt featuring short sleeves with shirt collar and front button fastening.', 
  },
  {
    images: [
      "https://zandokh.com/image/catalog/products/2025-03/4122411275/10S25DPA014_L%20Indigo%20(1).jpg",
      "https://zandokh.com/image/catalog/products/2025-03/4122411275/10S25DPA014_L%20Indigo%20(2).jpg",
      "https://zandokh.com/image/catalog/products/2025-03/4122411275/10S25DPA014_L%20Indigo%20(3).jpg",
      "https://zandokh.com/image/catalog/products/2025-03/4122411275/10S25DPA014_L%20Indigo%20(4).jpg",
      "https://zandokh.com/image/catalog/products/2025-03/4122411275/10S25DPA014_L%20Indigo%20(5).jpg",
      "https://zandokh.com/image/catalog/products/2025-01/1122412599%20Replace/IMG_0280.jpg",
      "https://zandokh.com/image/catalog/products/2025-01/1122412599%20Replace/IMG_0278.jpg",
      "https://zandokh.com/image/catalog/products/2025-01/1122412599%20Replace/IMG_0277.jpg"
    ],
    name: "Wide Leg Denim Jean",
    typeColors: 'Light Blue',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-01/1122412599/IMG_0019.jpg',
    price: 16.72,
    oldPrice: 24.95,
    discount: '-33%',
    colors: 1,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: 'XXL',
    code: 4122411275,
    description: 'Wide leg denim jean featuring side pockets with front button and zipper-up fastening.', 
  },
  {
     images: [
      "https://zandokh.com/image/catalog/products/2025-05/4222503067/10S25SHLW004_Blue-White-(6).jpg",
      "https://zandokh.com/image/catalog/products/2025-05/4222503067/10S25SHLW004_Blue-White-(1).jpg",
      "https://zandokh.com/image/catalog/products/2025-05/4222503067/10S25SHLW004_Blue-White-(3).jpg",
      "https://zandokh.com/image/catalog/products/2025-05/4222503067/10S25SHLW004_Blue-White-(4).jpg",
      "https://zandokh.com/image/catalog/products/2025-05/4222503067/10S25SHLW004_Blue-White-(5).jpg",
    ],
    name: "Cropped Stripes Long Sleeves Shirt",
    typeColors: 'Sky Blue',
    typeColors0: 'Baby Pink',
    mainImage: "https://zandokh.com/image/catalog/products/2025-05/4222503067/10S25SHLW004_Blue-White-(6).jpg",
    price: 13.37,
    oldPrice: 19.95,
    discount: '-33%',
    colors: 2,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: 'XXL',
    code: 4222503067,
    description: 'Cropped stripes shirt featuring long sleeves with shirt collar and front button fastening.',  
  },
  {
    images: [
      "https://zandokh.com/image/catalog/products/2025-05/4122502019/10S25SHS009_Natural%20(1).jpg",
      "https://zandokh.com/image/catalog/products/2025-05/4122502019/10S25SHS009_Natural%20(2).jpg",
      "https://zandokh.com/image/catalog/products/2025-05/4122502019/10S25SHS009_Natural%20(4).jpg",
      "https://zandokh.com/image/catalog/products/2025-05/4122502019/10S25SHS009_Natural%20(5).jpg",
      "https://zandokh.com/image/catalog/products/2025-05/4122502019/10S25SHS009_Natural%20(6).jpg",
    ],
    name: "Regular Short Sleeves Shirt",
    typeColors: 'Beige',
    typeColors0: 'Light Green Wash',
    mainImage: "https://zandokh.com/image/catalog/products/2025-05/4122502019/10S25SHS009_Natural%20(1).jpg",
    price: 15.38,
    oldPrice: 22.95,
    discount: '-33%',
    colors: 2,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: 'XXL',
    code: 4122502019,
    description: 'Regular shirt featuring short sleeves with shirt collar, pocket at left chest and front button fastening.',  
  },
  {
    images: [
      "https://zandokh.com/image/catalog/products/2025-05/5252411094/ZANDO0805202523545.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/5252411094/ZANDO0805202523537.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/5252411094/ZANDO0805202523547.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/4122502019/10S25SHS009_Natural%20(5).jpg",
      "https://zandokh.com/image/catalog/products/2025-05/5252411094/ZANDO0805202523546.jpg",
    ],
    name: "Sport Life Skirt With Elastic Waistband",
    typeColors: 'Gray',
    typeColors0: 'Black',
    mainImage: "https://zandokh.com/image/catalog/products/2025-05/4122502019/10S25SHS009_Natural%20(1).jpg",
    price: 41.59,
    colors: 2,
    size1: 'S',
    discount: '',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: 'XXL',
    code:  5252411094,
    description: 'Sport life skirt featuring side pockets with printed and front ruched detail and elastic waistband.',  
  },
  {
    images: [
      "https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523040.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523035.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523041.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523046.jpg",
      'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523045.jpg',
    ],
    name: "Cropped Tank Top",
    typeColors: 'White',
    typeColors0: 'Black',
    typeColors1: 'Light Pink',
    typeColors2: 'Light BLue',
    typeColors3: 'Beige',
    typeColors4: 'Light Beige',
    mainImage: "https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523040.jpg",
    price: 4.95,
    discount: '-16.81%',
    oldPrice: 5.95,
    colors: 6,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: 'XXL',
    code: 12225041301,
    description: 'Cropped tank top featuring sleeveless and round neck.',  
  },
  {
    images: [
      'https://zandokh.com/image/catalog/products/2025-05/21225031218/ZANDO2605202527279.jpg',
      "https://zandokh.com/image/catalog/products/2025-05/21225031218/ZANDO2605202527277.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/21225031218/ZANDO2605202527273.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/21225031218/ZANDO2605202527275.jpg",
      "https://zandokh.com/image/catalog/products/2025-05/21225031218/ZANDO2605202527278.jpg",
    ],
    name: "Baggy Denim Jean",
    typeColors: 'Blue',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/21225031218/ZANDO2605202527279.jpg',
    price: 15.81,
    discount: '-33%',
    oldPrice: 23.59,
    colors: 1,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: 'XXL',
    code: 21225031218,
    description: 'Baggy denim jean featuring side pockets with side-two strap-line and front button with zipper-up fastening.',  
  },
  {
    images: [
      'https://zandokh.com/image/catalog/products/2025-03/22225011151/IMG_0502%20copy04.jpg',
      'https://zandokh.com/image/catalog/products/2025-03/22225011151/IMG_0502%20copy05.jpg',
      "https://zandokh.com/image/catalog/products/2025-03/22225011151/ZANDO270320259644.jpg",
      "https://zandokh.com/image/catalog/products/2025-03/22225011151/ZANDO270320259645.jpg",
      "https://zandokh.com/image/catalog/products/2025-03/22225011151/ZANDO270320259637.jpg",
      "https://zandokh.com/image/catalog/products/2025-03/22225011151/ZANDO270320259639.jpg",
      'https://zandokh.com/image/catalog/products/2025-03/22225011151/ZANDO270320259640.jpg',
      'https://zandokh.com/image/catalog/products/2025-03/22225011151/ZANDO270320259638.jpg'
    ],
    name: "Loose Fit T-Shirt With Printed",
    typeColors: 'Black',
    typeColors0: 'Dark Blue',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-03/22225011151/IMG_0502%20copy04.jpg',
    price: 9.78,
    discount: '-33%',
    oldPrice: 14.59,
    colors: 2,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: 'XXL',
    code: 2122411981,
    description: 'Loose fit t-shirt featuring short sleeves with front graphic design printed and crew-neckline.',  
  },
  {
    images: [
      'https://zandokh.com/image/catalog/products/2025-02/2122411981%20Replace/boxy%20T%20Shirt%20front%2005.jpg',
      'https://zandokh.com/image/catalog/products/2025-02/2122411981%20Replace/boxy%20T%20Shirt%20front%2006.jpg',
      'https://zandokh.com/image/catalog/products/2025-02/2122411981%20Replace/ZANDO2602251713.jpg',
      "https://zandokh.com/image/catalog/products/2025-02/2122411981%20Replace/ZANDO2602251704.jpg",
      "https://zandokh.com/image/catalog/products/2025-02/2122411981%20Replace/ZANDO2602251703.jpg",
      "https://zandokh.com/image/catalog/products/2025-02/2122411981%20Replace/ZANDO2602251700.jpg",
      "https://zandokh.com/image/catalog/products/2025-03/22225011151/ZANDO270320259639.jpg",
      'https://zandokh.com/image/catalog/products/2025-03/22225011151/ZANDO270320259640.jpg',
      'https://zandokh.com/image/catalog/products/2025-03/22225011151/ZANDO270320259638.jpg',
      'https://zandokh.com/image/catalog/products/2025-02/2122411981%20Replace/ZANDO2602251706.jpg'
    ],
    name: "Regular Denim Short",
    typeColors: 'Dark Gray',
    typeColors0: 'Black',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-02/2122411981%20Replace/boxy%20T%20Shirt%20front%2005.jpg',
    price: 12.70,
    discount: '-33%',
    oldPrice: 18.95,
    colors: 2,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: 'XXL',
    code: 22225011151,
    description: 'Regular denim short featuring side pockets with front printed on hem and front button with zipper-up fastening.',  
  },
  {
   images: [
      'https://zandokh.com/image/catalog/products/2025-05/4222503083/10F24DPAW034_L-Indigo_quan-jean-nu-(2).jpg',
      'https://zandokh.com/image/catalog/products/2025-05/4222503083/10F24DPAW034_L-Indigo_quan-jean-nu-(1).jpg',
      'https://zandokh.com/image/catalog/products/2025-05/4222503083/10F24DPAW034_L-Indigo_quan-jean-nu-(3).jpg',
      "https://zandokh.com/image/catalog/products/2025-05/4222503083/10F24DPAW034_L-Indigo_quan-jean-nu-(4).jpg",
      "https://zandokh.com/image/catalog/products/2025-05/4222503083/10F24DPAW034_L-Indigo_quan-jean-nu-(5).jpg",
      "https://zandokh.com/image/catalog/products/2025-05/4222503083/10F24DPAW034_L-Indigo_quan-jean-nu-(6).jpg",
    ],
    name: "Straight Cropped Jeans",
    typeColors: 'Sky Blue',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/4222503083/10F24DPAW034_L-Indigo_quan-jean-nu-(2).jpg',
    price: 16.48,
    discount: '-33%',
    oldPrice: 24.59,
    colors: 1,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: 'XXL',
    code: 4222503083,
    description: 'Straight cropped jean featuring side pockets with heart-embroidery printed at right pocket and front button with zipper-up',   
  },
  {
   images: [
      'https://zandokh.com/image/catalog/products/2025-05/4222411085/10F24DPAW024_Navy%20(1).jpg',
      'https://zandokh.com/image/catalog/products/2025-05/4222411085/10F24DPAW024_Navy%20(2).jpg',
      'https://zandokh.com/image/catalog/products/2025-05/4222411085/10F24DPAW024_Navy%20(3).jpg',
      "https://zandokh.com/image/catalog/products/2025-05/4222411085/10F24DPAW024_Navy%20(4).jpg",
      "https://zandokh.com/image/catalog/products/2025-05/4222411085/10F24DPAW024_Navy%20(5).jpg",
    ],
    name: "Loose Fit Denim Jeans",
    typeColors: 'Sky Blue',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/4222503083/10F24DPAW034_L-Indigo_quan-jean-nu-(2).jpg',
    price: 17.15,
    discount: '-33%',
    oldPrice: 25.59,
    colors: 1,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: 'XXL',
    code:  4222411085,
    description: 'Loose fit denim jean featuring side pockets with front button and zipper-up fastening.',   
  },
  {
   images: [
     'https://zandokh.com/image/catalog/products/2023-09/1522307001/Crochet-Bucket-Hat%20(5).jpg',
     'https://zandokh.com/image/catalog/products/2023-09/1522307001/Crochet-Bucket-Hat%20(8).jpg',
     'https://zandokh.com/image/catalog/products/2023-09/1522307001/Crochet-Bucket-Hat%20(6).jpg',
      "https://zandokh.com/image/catalog/products/2023-09/1522307001/Crochet-Bucket-Hat%20(7).jpg",
    ],
    name: "Crochet Bucket hat",
    typeColors: 'Beige',
    typeColors0: 'Black',
    typeColors1: 'Light Brown',
    mainImage: 'https://zandokh.com/image/catalog/products/2023-09/1522307001/Crochet-Bucket-Hat%20(5).jpg',
    price: 2.59,
    discount: '-33%',
    oldPrice: 12.95,
    colors: 3,
    size1: 'One Size',
    size2: '',
    size3: '',
    size4: '',
    size5: '',
    code: 1522307001,
    description: 'Crochet bucket hat with an adjustable straps inside.',   
  },
  {
   images: [
     'https://zandokh.com/image/catalog/products/2025-05/22225031317/013.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/22225031317/014.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/22225031317/016.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/22225031317/015.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/22225031317/ZANDO2805202528279.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/22225031317/ZANDO2805202528271.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/22225031317/ZANDO2805202528278.jpg',
     "https://zandokh.com/image/catalog/products/2025-05/22225031317/ZANDO2805202528275.jpg",
     'https://zandokh.com/image/catalog/products/2025-05/22225031317/ZANDO2805202528280.jpg',
    ],
    name: "Wide Leg Trouser",
    typeColors: 'Brown',
    typeColors0: 'Black',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/22225031317/013.jpg',
    price: 13.37,
    discount: '-33%',
    oldPrice: 19.95,
    colors: 2,
    size1: '24',
    size2: '26',
    size3: '28',
    size4: '32',
    size5: '',
    code: 22225031317,
    description: 'Wide leg trouser featuring side pockets with front botton and zipper-up fastening.',   
  },
  {
   images: [
     'https://zandokh.com/image/catalog/products/2025-05/11225041034/ZANDO2305202526516.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/11225041034/ZANDO2305202526520.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/11225041034/ZANDO2305202526522.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/11225041034/ZANDO2305202526521.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/11225041034/ZANDO2305202526517.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/11225041034/ZANDO2305202526517.jpg',
    ],
    name: "Wide Leg Trouser",
    typeColors: 'White',
    typeColors0: 'Blue',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/11225041034/ZANDO2305202526516.jpg',
    price: 13.37,
    discount: '-33%',
    oldPrice: 19.95,
    colors: 2,
    size1: 'XS',
    size2: 'S',
    size3: 'M',
    size4: 'L',
    size5: '',
    code: 11225041034,
    description: 'Loose fit cropped t-shirt featuring short sleeves with front graphic design printed and crew-neck.',   
  },
  {
   images: [
     'https://zandokh.com/image/catalog/products/2025-05/4122412014/10S25TSS022_White%20(1).jpg',
     'https://zandokh.com/image/catalog/products/2025-05/4122412014/10S25TSS022_White%20(2).jpg',
     'https://zandokh.com/image/catalog/products/2025-05/4122412014/10S25TSS022_White%20(3).jpg',
    ],
    name: "Regular Fitted T-Shirt",
    typeColors: 'White',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/4122412014/10S25TSS022_White%20(1).jpg',
    price: 10.69,
    discount: '-33%',
    oldPrice: 15.95,
    colors: 2,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'L',
    size5: 'XXL',
    code: 4122412014,
    description: 'Regular fitted t-shirt featuring short sleeves with front graphic design printed and round neck.',   
  },
  {
   images: [
     'https://zandokh.com/image/catalog/products/2025-03/3222411547/ZANDO19MAR20254969.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/3222411547/ZANDO19MAR20254958.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/3222411547/ZANDO19MAR20254959.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/3222411547/ZANDO19MAR20254970.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/3222411547/ZANDO19MAR20254963.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/3222411547/ZANDO19MAR20254971.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/3222411547/DSC09284.jpg',
    ],
    name: "Mexi Dresses",
    typeColors: 'Dark Turquoise',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-03/3222411547/ZANDO19MAR20254969.jpg',
    price: 39.26,
    discount: '-33%',
    oldPrice: 58.59,
    colors: 1,
    size1: 'S',
    size2: 'M',
    size3: '',
    size4: '',
    size5: '',
    code: 3222411547,
    description: 'Mexi dress featuring long sleeves with pleats and front tie detail with button fastening.',   
  },
  {
   images: [
     'https://zandokh.com/image/catalog/products/2025-05/4122503003/10S25POL026_Navy%20(1).jpg',
     'https://zandokh.com/image/catalog/products/2025-05/4122503003/10S25POL026_Navy%20(2).jpg',
     'https://zandokh.com/image/catalog/products/2025-05/4122503003/10S25POL026_Navy%20(3).jpg',
     'https://zandokh.com/image/catalog/products/2025-05/4122503003/10S25POL026_Navy%20(4).jpg',
     'https://zandokh.com/image/catalog/products/2025-05/4122503003/10S25POL026_Navy%20(5).jpg',
    ],
    name: "Regular Fit Polo Shirt",
    typeColors: 'Blue',
    typeColors0: 'White',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/4122503003/10S25POL026_Navy%20(1).jpg',
    price: 19.15,
    discount: '-33%',
    oldPrice: 28.59,
    colors: 2,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: 'XXL',
    code: 4122503003,
    description: 'Regular fit polo shirt featuring short sleeves with shirt collar and front button fastening.',   
  },
  {
   images: [
     'https://zandokh.com/image/catalog/products/2025-05/4122501230/10S25POL020_Tofu%20(5).jpg',
     'https://zandokh.com/image/catalog/products/2025-05/4122501230/10S25POL020_Tofu%20(3).jpg',
     'https://zandokh.com/image/catalog/products/2025-05/4122501230/10S25POL020_Tofu%20(2).jpg',
     'https://zandokh.com/image/catalog/products/2025-05/4122501230/10S25POL020_Tofu%20(4).jpg',
     'https://zandokh.com/image/catalog/products/2025-05/4122501230/10S25POL020_Tofu%20(4).jpg',
    ],
    name: "Loose Fit Polo Shirt",
    typeColors: 'Beige',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/4122501230/10S25POL020_Tofu%20(5).jpg',
    price: 13.36,
    discount: '-33%',
    oldPrice: 19.95,
    colors: 1,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: '',
    code:  4122501230,
    description: 'Loose fit polo shirt featuring short sleeves with shirt collar, embroidery print patch at left chest and front button fastening.',   
  },
  {
   images: [
     'https://zandokh.com/image/catalog/products/2025-05/1122503937/ZANDO2805202528205.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/1122503937/ZANDO2805202528203.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/1122503937/ZANDO2805202528206.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/1122503937/ZANDO2805202528209.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/1122503937/ZANDO2805202528208.jpg',
    ],
    name: "Slim Cropped Trouser",
    typeColors: 'Beige',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/1122503937/ZANDO2805202528205.jpg',
    price: 7.25,
    discount: '-33%',
    oldPrice: 21.95,
    colors: 2,
    size1: '29',
    size2: '30',
    size3: '31',
    size4: '32',
    size5: '33',
    code: 1122503937,
    description: 'Slim cropped trouser featuring side pockets with front botton and zipper-up fastening.',   
  },
  {
   images: [
     'https://zandokh.com/image/catalog/products/2025-05/11225041029/ZANDO290520250426.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/11225041029/ZANDO290520250430.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/11225041029/ZANDO290520250433.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/11225041029/ZANDO290520250424.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/11225041029/ZANDO290520250423.jpg',
    ],
    name: "Regular T-Shirt With Printed",
    typeColors: 'Beige',
    typeColors0: 'Black',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/11225041029/ZANDO290520250430.jpg',
    price: 10.00,
    discount: '-33%',
    oldPrice: 14.95,
    colors: 2,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: 'XXL',
    code: 11225041029,
    description: 'Regular t-shirt featuring short sleeves with printed at the front and round neck.',   
  },
  {
    images: [
     'https://zandokh.com/image/catalog/products/2025-05/11225041038/ZANDO290520250312.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/11225041038/ZANDO290520250319.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/11225041038/ZANDO290520250311.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/11225041038/ZANDO290520250309.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/11225041038/ZANDO290520250308.jpg',
    ],
    name: "Knitted Polo Shirt",
    typeColors: 'Brown',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/11225041038/ZANDO290520250312.jpg',
    price: 5.00,
    discount: '-33%',
    oldPrice: 17.59,
    colors: 1,
    size1: 'S',
    size2: 'M',
    size3: 'L',
    size4: 'XL',
    size5: '',
    code: 11225041038,
    description: 'Knitted polo shirt featuring short sleeves, shirt collar and v-neck.',   
  },
  {
    images: [
     'https://zandokh.com/image/catalog/products/2025-03/53112503015/ZANDO26.03.20258969.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/53112503015/ZANDO26.03.20258973.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/53112503015/ZANDO26.03.20258972.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/53112503015/ZANDO26.03.20258970.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/53112503015/ZANDO26.03.20258971.jpg',
    ],
    name: "Running Sneaker",
    typeColors: 'Blue',
    typeColors0: 'Purple',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-03/53112503015/ZANDO26.03.20258969.jpg',
    price: 14.38,
    discount: '-33%',
    oldPrice: 47.95,
    colors: 2,
    size1: '35',
    size2: '',
    size3: '',
    size4: '',
    size5: '',
    code: 53112503015,
    description: 'Running Sneaker With Astonishing design',   
  },
  {
    images: [
     'https://zandokh.com/image/catalog/products/2025-03/53112503016/ZANDO150320253688.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/53112503016/ZANDO150320253686.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/53112503016/ZANDO150320253692.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/53112503016/ZANDO150320253689.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/53112503016/ZANDO150320253690.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/53112503016/ZANDO150320253691.jpg'
    ],
    name: "Running Sneaker",
    typeColors: 'SKy Blue',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-03/53112503016/ZANDO150320253688.jpg',
    price: 18.59,
    discount: '-70%',
    oldPrice: 61.95,
    colors: 1,
    size1: '36',
    size2: '',
    size3: '',
    size4: '',
    size5: '',
    code: 53112503016,
    description: 'Running Sneaker With Astonishing design',   
  },
  {
    images: [
     'https://zandokh.com/image/catalog/products/2025-01/5172408002/IMG_0068.jpg',
     'https://zandokh.com/image/catalog/products/2025-02/5172408002%20out-door/8J6A0428.jpg',
     'https://zandokh.com/image/catalog/products/2025-01/5172408002/IMG_0066.jpg',
     'https://zandokh.com/image/catalog/products/2025-01/5172408002/IMG_0079.jpg',
     'https://zandokh.com/image/catalog/products/2025-01/5172408002/IMG_0071.jpg',
     'https://zandokh.com/image/catalog/products/2025-01/5172408002/IMG_0070.jpg',
     'https://zandokh.com/image/catalog/products/2025-01/5172408002/IMG_0069.jpg'
    ],
    name: "Multifunctional Outdoor",
    typeColors: 'Black',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-01/5172408002/IMG_0068.jpg',
    price: 37.51,
    discount: '-30%',
    oldPrice: 53.59,
    colors: 1,
    size1: '41',
    size2: '43',
    size3: '44',
    size4: '45',
    size5: '',
    code: 5172408002,
    description: 'Multifunctional Outdoor Shoes With Astonishing design',   
  },
  {
    images: [
     'https://zandokh.com/image/catalog/products/2025-05/5172411005/AFTERNOON22323.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5172411005/AFTERNOON22327.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5172411005/AFTERNOON22328.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5172411005/AFTERNOON22324.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5172411005/AFTERNOON22326.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5172411005/AFTERNOON22325.jpg',
    ],
    name: "Multifunctional Outdoor Sneaker",
    typeColors: 'Black',
    typeColors0: 'Army Green',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-01/5172408002/IMG_0068.jpg',
    price: 32.79,
    discount: '-30%',
    oldPrice: 48.95,
    colors: 2,
    size1: '41',
    size2: '42',
    size3: '43',
    size4: '44',
    size5: '',
    code: 5172411005,
    description: 'Multifunctional Outdoor Sneaker With Astonishing design',   
  },
  {
    images: [
     'https://zandokh.com/image/catalog/products/2025-03/5172411007/ZANDO280320259844.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/5172411007/ZANDO280320259848.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/5172411007/ZANDO280320259850.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/5172411007/ZANDO280320259845.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/5172411007/ZANDO280320259847.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/5172411007/ZANDO280320259846.jpg',
    ],
    name: "Multifunctional Outdoor Sneaker",
    typeColors: 'Beige',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-01/5172408002/IMG_0068.jpg',
    price: 37.77,
    discount: '-30%',
    oldPrice: 53.95,
    colors: 1,
    size1: '41',
    size2: '42',
    size3: '43',
    size4: '',
    size5: '',
    code: 5172411007,
    description: 'Multifunctional Outdoor Sneaker With Astonishing design',   
  },
  {
    images: [
     'https://zandokh.com/image/catalog/products/2025-05/5152411100/ZANDO26052025(afternoon)27313.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5152411100/ZANDO26052025(afternoon)27317.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5152411100/ZANDO26052025(afternoon)27314.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5152411100/ZANDO26052025(afternoon)27315.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5152411100/ZANDO26052025(afternoon)27316.jpg',
    ],
    name: "Sport Life Sandal",
    typeColors: 'Black',
    typeColors0: 'Light Brown',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/5152411100/ZANDO26052025(afternoon)27313.jpg',
    price: 19.15,
    discount: '-30%',
    oldPrice: 28.59,
    colors: 2,
    size1: '40',
    size2: '44',
    size3: '42',
    size4: '43',
    size5: '44',
    code: 5172411007,
    description: 'Sport Life Sandle With Astonishing design',   
  },
  {
    images: [
     'https://zandokh.com/image/catalog/products/2025-05/5152411101/ZANDO0905202523933.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5152411101/ZANDO0905202523937.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5152411101/ZANDO0905202523935.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5152411101/ZANDO0905202523936.jpg',
    ],
    name: "Big3-Sport Life Hold Sandals",
    typeColors: 'White',
    typeColors0: 'Light Brown',
    typeColors1: 'MultiColor',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/5152411101/ZANDO0905202523933.jpg',
    price: 20.73,
    discount: '-30%',
    oldPrice: 30.95,
    colors: 3,
    size1: '40',
    size2: '44',
    size3: '42',
    size4: '43',
    size5: '44',
    code: 5152411101,
    description: 'Big3-Sport Life Hold Sandals With Astonishing Design',   
  },
  {
    images: [
     'https://zandokh.com/image/catalog/products/2025-03/2522412601/ZANDO170320254158.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/2522412601/ZANDO170320254162.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/2522412601/ZANDO170320254159.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/2522412601/ZANDO170320254161.jpg',
     'https://zandokh.com/image/catalog/products/2025-03/2522412601/ZANDO170320254160.jpg'
    ],
    name: "Cross Srap Low Block Heels",
    typeColors: 'White',
    typeColors0: 'Light Brown',
    typeColors1: 'MultiColor',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/5152411101/ZANDO0905202523933.jpg',
    price: 11.78,
    discount: '-30%',
    oldPrice: 17.59,
    colors: 1,
    size1: '36',
    size2: '37',
    size3: '38',
    size4: '39',
    size5: '',
    code:  2522412601,
    description: 'Cross Srap Low Block Heels With Astonishing Design',   
  },
  {
    images: [
     'https://zandokh.com/image/catalog/products/2025-05/5142411062%20replace/ZANDO2105202525831.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5142411062%20replace/ZANDO2105202525834.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5142411062%20replace/ZANDO2105202525832.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5142411062%20replace/ZANDO2105202525832%20copy.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5142411062%20replace/ZANDO2105202525833.jpg'
    ],
    name: "Basektball Sandal",
    typeColors: 'Black',
    typeColors0: 'Gray',
    typeColors1: 'Yellow',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/5142411062%20replace/ZANDO2105202525831.jpg',
    price: 22.50,
    discount: '-30%',
    oldPrice: 33.59,
    colors: 3,
    size1: '40',
    size2: '41',
    size3: '42',
    size4: '43',
    size5: '44',
    code: 5142411062,
    description: 'Basktball Sandle With Astonishing and Eye-Catching Design',   
  },
  {
    images: [
     'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(1).jpg',
     'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(6).jpg',
     'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(3).jpg',
     'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(5).jpg',
     'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(4).jpg',
     'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(2).jpg'
    ],
    name: "Basketball Slipper",
    typeColors: 'Black',
    typeColors0: 'Gray',
    typeColors1: 'Wood Brown',
    mainImage: 'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(1).jpg',
    price: 15.96,
    discount: '-30%',
    oldPrice: 17.95,
    colors: 3,
    size1: '40',
    size2: '41',
    size3: '42',
    size4: '43',
    size5: '44',
    code: 5142310011,
    description: 'Basketball Sandle With Astonishing and Eye-Catching Design',   
  },
  {
    images: [
     'https://zandokh.com/image/catalog/products/2025-05/5262411062/ZANDO2105202525962.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5262411062/ZANDO2105202525966.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5262411062/ZANDO2105202525963.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5262411062/ZANDO2105202525965.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5262411062/ZANDO2105202525963%20copy.jpg',
     'https://zandokh.com/image/catalog/products/2025-05/5262411062/ZANDO2105202525964.jpg'
    ],
    name: "Lightspeed Running Sneaker",
    typeColors: 'hotpink',
    mainImage: 'https://zandokh.com/image/catalog/products/2025-05/5262411062/ZANDO2105202525962.jpg',
    price: 35.72,
    discount: '-30%',
    oldPrice: 48.95,
    colors: 1,
    size1: '39',
    size2: '',
    size3: '',
    size4: '',
    size5: '',
    code: 5262411062,
    description: 'Lightspeed Running Sneaker With Astonishing and Eye-Catching Design',   
  },
];
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    // some code here that reloads or resets content — remove or modify it
  }
});

window.addEventListener('focus', () => {
  // some code that resets or reloads page — remove or modify it
});

let isZoomed = false;
let isSliding = false;

const mainFigure = document.getElementById('mainFigure');
const sidebar = document.getElementById('sidebar');

function showItemDetail(index, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const view = document.querySelector('.view');
  const itemDetail = document.getElementById('itemDetail');
  const infoBox = document.getElementById('infoBox');
  const bagGrab = document.querySelector('.bagGrab')
  

   requestAnimationFrame(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      console.log('Scroll triggered');
    }, 500);
  });
    requestAnimationFrame(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50); 
    });

  bagGrab.classList.remove('hidden')
  view.style.display = 'none';
  itemDetail.classList.remove('hidden');

  const product = products[index];

  // Update sidebar boxes with images
  const sidebarBoxes = sidebar.querySelectorAll('div');
  sidebarBoxes.forEach((box, i) => {
    if (product.images[i]) {
      box.innerHTML = `
        <img src="${product.images[i]}" 
             class="object-cover w-full h-full cursor-pointer" 
             data-index="${i}" />
      `;
    } else {
      box.innerHTML = ''; // Clear extra boxes
    }
    box.classList.remove('border-2', 'border-black'); // Reset border
  });

  // Initialize Swiper markup inside mainFigure
  mainFigure.innerHTML = `
  <div class="bottom-[80px] text-[0.9rem] text-black right-[-20px] z-[250] rotate-[-90deg] absolute font-normal">
    ZANDO / NewIn
  </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        ${product.images.map(img => `
          <div class="swiper-slide relative group">
            <img src="${img}" class="w-full h-full object-cover" data-zoomable />
          </div>
        `).join('')}
      </div>
      <div class="swiper-button-next z-[250]"></div>
      <div class="swiper-button-prev z-[250]"></div>
    </div>
  `;

  // Destroy old swiper if exists to prevent duplicates
  if (swiper) swiper.destroy(true, true);

  swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: false,
    on: {
      slideChangeTransitionStart: () => {
        isSliding = true;
        // Reset zoom
        isZoomed = false;
        swiper.slides.forEach(slide => {
          const img = slide.querySelector('img[data-zoomable]');
          if (img) {
            img.style.transition = 'transform 0.2s ease';
            img.style.transform = 'scale(1)';
            img.style.transformOrigin = 'center center';
          }
        });
        mainFigure.style.cursor = 'zoom-in';
        updateSidebarHighlight(swiper.activeIndex);
      },
      slideChangeTransitionEnd: () => {
        isSliding = false;
      }
    }
  });

  // Highlight the first sidebar image by default
  updateSidebarHighlight(0);

  // Add click events on sidebar images to change swiper slide
  sidebar.querySelectorAll('img').forEach(imgEl => {
    imgEl.onclick = () => {
      const idx = +imgEl.dataset.index;
      swiper.slideTo(idx);
    };
  });

  // Update info box
  let incre = 1
  // let colorTypeSet = product.colors
  // let setRes = (colorTypeSet != 1) ? '' : '' 
  products.forEach((product, index) => {
    const totalColors = product.colors || 1;
    for (let i = 0; i < totalColors - 1; i++) {
      const key = `images${i}`;
      if (index == 1) {
        product[key] = [
        "https://zandokh.com/image/catalog/products/2025-05/21225031204/ZANDO2005202525583.jpg",
        "https://zandokh.com/image/catalog/products/2025-05/21225031204/ZANDO2005202525588.jpg",
        "https://zandokh.com/image/catalog/products/2025-05/21225031204/ZANDO2005202525585.jpg",
        "https://zandokh.com/image/catalog/products/2025-05/21225031204/ZANDO2005202525584.jpg",
        "https://zandokh.com/image/catalog/products/2025-05/21225031204/ZANDO2005202525582.jpg",        
        ];
      }

      if (index == 2) {
        if (i == 0) { 
          product[key] = [
            "https://zandokh.com/image/catalog/products/2025-05/12225041306/ZANDO30.05.20250207.jpg",
            "https://zandokh.com/image/catalog/products/2025-05/12225041306/ZANDO30.05.20250209.jpg",
            "https://zandokh.com/image/catalog/products/2025-05/12225041306/ZANDO30.05.20250204.jpg",
            "https://zandokh.com/image/catalog/products/2025-05/12225041306/ZANDO30.05.20250203.jpg",
            "https://zandokh.com/image/catalog/products/2025-05/12225041306/ZANDO30.05.20250202.jpg",
          ]
        }
        else if (i == 1 ) {
          product[key] = [
            "https://zandokh.com/image/catalog/products/2025-05/12225041306/ZANDO0805202523610.jpg",
            "https://zandokh.com/image/catalog/products/2025-05/12225041306/ZANDO0805202523615.jpg",
            "https://zandokh.com/image/catalog/products/2025-05/12225041306/ZANDO0805202523609.jpg",
            "https://zandokh.com/image/catalog/products/2025-05/12225041306/ZANDO0805202523606.jpg",
            "https://zandokh.com/image/catalog/products/2025-05/12225041306/ZANDO0805202523605.jpg",
          ]
        }
      }

      if (index == 4) {
        if ( i == 0 ) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2025-04/1122502904/Shirt%20058.jpg',
            'https://zandokh.com/image/catalog/products/2025-04/1122502904/ZANDO2404202518035.jpg',
            'https://zandokh.com/image/catalog/products/2025-04/1122502904/ZANDO2404202518031.jpg',
            'https://zandokh.com/image/catalog/products/2025-04/1122502904/ZANDO2404202518026.jpg',
            'https://zandokh.com/image/catalog/products/2025-04/1122502904/ZANDO2404202518025.jpg',
            'https://zandokh.com/image/catalog/products/2025-04/1122502904/ZANDO2404202518024.jpg',
            'https://zandokh.com/image/catalog/products/2025-04/1122502904/Shirt%20064.jpg'
          ]
        }
        else if ( i == 1 ) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2025-04/1122502904/Shirt%20061.jpg',
            'https://zandokh.com/image/catalog/products/2025-04/1122502904/ZANDO2404202518063.jpg',
            'https://zandokh.com/image/catalog/products/2025-04/1122502904/ZANDO2404202518073.jpg',
            'https://zandokh.com/image/catalog/products/2025-04/1122502904/ZANDO2404202518076.jpg',
            'https://zandokh.com/image/catalog/products/2025-04/1122502904/ZANDO2404202518075.jpg',
            'https://zandokh.com/image/catalog/products/2025-04/1122502904/Shirt%20065.jpg'
          ]
        } 
      }

      if (index == 5) {
        if ( i == 0 ) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2025-01/1122412599/IMG_0017.jpg',
            'https://zandokh.com/image/catalog/products/2025-01/1122412599/IMG_0018.jpg',
            'https://zandokh.com/image/catalog/products/2025-01/1122412599/IMG_0017%20-%20Copy.jpg',
            'https://zandokh.com/image/catalog/products/2025-01/1122412599%20Replace/IMG_0188.jpg',
            'https://zandokh.com/image/catalog/products/2025-01/1122412599%20Replace/IMG_0195.jpg',
            'https://zandokh.com/image/catalog/products/2025-01/1122412599%20Replace/IMG_0187.jpg',
            'https://zandokh.com/image/catalog/products/2025-01/1122412599%20Replace/IMG_0186.jpg',
            'https://zandokh.com/image/catalog/products/2025-01/1122412599%20Replace/IMG_0184.jpg'
          ]
        }
      }
      
      if (index == 7) {
        if ( i == 0 ) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2025-05/4222503067/10S25SHLW004_Pink-White-(1).jpg',
            'https://zandokh.com/image/catalog/products/2025-05/4222503067/10S25SHLW004_Pink-White-(2).jpg',
          ]
        }
      }

      if (index == 8) {
        if ( i == 0 ) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2025-05/4122502019/10S25SHS009_Tea%20(2).jpg',
            'https://zandokh.com/image/catalog/products/2025-05/4122502019/10S25SHS009_Tea%20(3).jpg',
          ]
        }
      }

      if (index == 9) {
        if ( i == 0 ) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2025-05/5252411094/ZANDO0805202523475.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5252411094/ZANDO0805202523468.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5252411094/ZANDO0805202523479.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5252411094/ZANDO0805202523476.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5252411094/ZANDO0805202523478.jpg' 
          ]
        }
      }

      if (index == 10) {
        if ( i == 0 ) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523002.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523015.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523008.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523001.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523016.jpg',
          ]
        } else if (i == 1) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523024.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523020.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523028.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523032.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523031.jpg',
          ]
        } else if (i == 2) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2025-05/12225041301%20Replace/afternoon27945.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301%20Replace/afternoon27947.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301%20Replace/afternoon27941.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301%20Replace/afternoon27940.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301%20Replace/afternoon27939.jpg',
          ]
        } else if (i == 3) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523069.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523074.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523065.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523062.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523061.jpg',
          ]
        } else if (i == 4) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523081.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523075.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523075.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523084.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523087.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523088.jpg',
          ]
        } else if (i == 5) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523024.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523020.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523028.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523028.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523032.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/12225041301/ZANDO0705202523031.jpg',
          ]
        }
      }

      if ( index == 12 ) {
        product[key] = [
          'https://zandokh.com/image/catalog/products/2025-03/22225011151/IMG_0502%20copy02.jpg',
          'https://zandokh.com/image/catalog/products/2025-03/22225011151/ZANDO270320259659.jpg',
          'https://zandokh.com/image/catalog/products/2025-03/22225011151/ZANDO270320259652.jpg',
          'https://zandokh.com/image/catalog/products/2025-03/22225011151/ZANDO270320259661.jpg',
          'https://zandokh.com/image/catalog/products/2025-03/22225011151/ZANDO270320259663.jpg',
          'https://zandokh.com/image/catalog/products/2025-03/22225011151/ZANDO270320259664.jpg',
          'https://zandokh.com/image/catalog/products/2025-03/22225011151/IMG_0502%20copy03.jpg'
        ]
      }

      if ( index == 13) {
        product[key] = [
          'https://zandokh.com/image/catalog/products/2025-02/2122411981%20Replace/boxy%20T%20Shirt%20front%2004.jpg',
          'https://zandokh.com/image/catalog/products/2025-02/2122411981%20Replace/boxy%20T%20Shirt%20front%2003.jpg',
          'https://zandokh.com/image/catalog/products/2025-02/2122411981%20Replace/ZANDO2602251722.jpg',
          'https://zandokh.com/image/catalog/products/2025-02/2122411981%20Replace/ZANDO2602251725.jpg',
          'https://zandokh.com/image/catalog/products/2025-02/2122411981%20Replace/ZANDO2602251730.jpg',
          'https://zandokh.com/image/catalog/products/2025-02/2122411981%20Replace/ZANDO2602251735.jpg',
          'https://zandokh.com/image/catalog/products/2025-02/2122411981%20Replace/ZANDO2602251734.jpg'
        ]
      }

      if (index == 16) {
        if (i == 0) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2023-09/1522307001/Crochet-Bucket-Hat%20(9).jpg',
            'https://zandokh.com/image/catalog/products/2023-09/1522307001/Crochet-Bucket-Hat%20(12).jpg',
            'https://zandokh.com/image/catalog/products/2023-09/1522307001/Crochet-Bucket-Hat%20(10).jpg',
            'https://zandokh.com/image/catalog/products/2023-09/1522307001/Crochet-Bucket-Hat%20(11).jpg'
          ]
        } else if (i == 1) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2023-09/1522307001/Crochet-Bucket-Hat%20(1).jpg',
            'https://zandokh.com/image/catalog/products/2023-09/1522307001/Crochet-Bucket-Hat%20(4).jpg',
            'https://zandokh.com/image/catalog/products/2023-09/1522307001/Crochet-Bucket-Hat%20(2).jpg',
            'https://zandokh.com/image/catalog/products/2023-09/1522307001/Crochet-Bucket-Hat%20(3).jpg'
          ]
        }
      }

      if (index == 17) {
        product[key] = [
          'https://zandokh.com/image/catalog/products/2025-05/22225031317/09.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/22225031317/010.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/22225031317/012.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/22225031317/011.jpg'
        ]
      }

      if (index == 18) {
        product[key] = [
          'https://zandokh.com/image/catalog/products/2025-05/11225041034/ZANDO2305202526526.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/11225041034/ZANDO2305202526528.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/11225041034/ZANDO2305202526537.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/11225041034/ZANDO2305202526532.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/11225041034/ZANDO2305202526527.jpg'
        ]
      }

      if (index == 21) {
        product[key] = [
          'https://zandokh.com/image/catalog/products/2025-05/4122503003/10S25POL026_White-(1).jpg',
          'https://zandokh.com/image/catalog/products/2025-05/4122503003/10S25POL026_White-(2).jpg'
        ]
      }

      if (index == 23) {
        product[key] = [
          'https://zandokh.com/image/catalog/products/2025-05/1122503937/ZANDO290520250275.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/1122503937/ZANDO290520250270.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/1122503937/ZANDO290520250277.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/1122503937/ZANDO290520250279.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/1122503937/ZANDO290520250278.jpg'
        ]
      }

      if (index == 24) {
        product[key] = [
          'https://zandokh.com/image/catalog/products/2025-05/11225041029/ZANDO290520250411.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/11225041029/ZANDO290520250419.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/11225041029/ZANDO290520250415.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/11225041029/ZANDO290520250410.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/11225041029/ZANDO290520250409.jpg'
        ]
      }

      if (index == 26) {
        product[key] = [
          'https://zandokh.com/image/catalog/products/2025-03/53112503015/ZANDO1104202513731.jpg',
          'https://zandokh.com/image/catalog/products/2025-03/53112503015/ZANDO1104202513737.jpg',
          'https://zandokh.com/image/catalog/products/2025-03/53112503015/ZANDO1104202513736.jpg',
          'https://zandokh.com/image/catalog/products/2025-03/53112503015/ZANDO1104202513733.jpg', 
          'https://zandokh.com/image/catalog/products/2025-03/53112503015/ZANDO1104202513735.jpg',
          'https://zandokh.com/image/catalog/products/2025-03/53112503015/ZANDO1104202513734.jpg'
        ]
      }

      if (index == 29) {
        product[key] = [
          'https://zandokh.com/image/catalog/products/2025-05/5172411005%20Replace/ZANDO3004202520829.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/5172411005%20Replace/ZANDO3004202520833.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/5172411005%20Replace/ZANDO3004202520834.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/5172411005%20Replace/ZANDO3004202520830.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/5172411005%20Replace/ZANDO3004202520832.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/5172411005%20Replace/ZANDO3004202520831.jpg'
        ]
      }

      if (index == 31) {
        product[key] = [
          'https://zandokh.com/image/catalog/products/2025-05/5152411100/ZANDO26052025(afternoon)27302.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/5152411100/ZANDO26052025(afternoon)27308.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/5152411100/ZANDO26052025(afternoon)27303.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/5152411100/ZANDO26052025(afternoon)27304.jpg',
          'https://zandokh.com/image/catalog/products/2025-05/5152411100/ZANDO26052025(afternoon)27309.jpg',
        ]
      }

      if (index == 32) {
        if (i == 0) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2025-05/5152411101/ZANDO0905202523938.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5152411101/ZANDO0905202523941.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5152411101/ZANDO0905202523939.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5152411101/ZANDO0905202523940.jpg'
          ]
        } else if (i == 1) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2025-05/5152411101%20replace/ZANDO2105202525840.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5152411101%20replace/ZANDO2105202525844.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5152411101%20replace/ZANDO2105202525842.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5152411101%20replace/ZANDO2105202525842%20copy.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5152411101%20replace/ZANDO2105202525843.jpg',
          ]
        }
      }

      if (index == 34) {
        if (i == 0) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2025-05/5142411062%20replace/ZANDO2105202525835.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5142411062%20replace/ZANDO2105202525838.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5142411062%20replace/ZANDO2105202525836.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5142411062%20replace/ZANDO2105202525836%20copy.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5142411062%20replace/ZANDO2105202525837.jpg'
          ]
        } else if (i == 1) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2025-05/5142411062%20replace/ZANDO2105202525822.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5142411062%20replace/ZANDO2105202525826.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5142411062%20replace/ZANDO2105202525823.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5142411062%20replace/ZANDO2105202525823%20copy.jpg',
            'https://zandokh.com/image/catalog/products/2025-05/5142411062%20replace/ZANDO2105202525825.jpg'
          ]
        }
      }

      if (index == 35) {
        if (i == 0) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(7).jpg',
            'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(12).jpg',
            'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(11).jpg',
            'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(9).jpg',
            'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(10).jpg',
            'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(8).jpg'
          ]
        } else if (i == 1) {
          product[key] = [
            'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(13).jpg',
            'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(18).jpg',
            'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(15).jpg',
            'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(17).jpg',
            'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(16).jpg',
            'https://zandokh.com/image/catalog/products/2024-09/5142310011/Slipper%20(14).jpg'
          ]
        }
      }

    }
  });

  function renderProductInfo() {
  infoBox.innerHTML = `
    <p class=" text-red-600 flex gap-3" style="font-size: clamp(1.2rem, 1vw + 0.5rem, 1.5rem);">
      <span> US $${product.price.toFixed(2)}
        ${product.discount != '' ? `<span class="font-bold text-black"> ${product.discount} </span>` : ''}
        ${product.oldPrice >= 0 ? `<del class="font-normal text-black">$${product.oldPrice.toFixed(2)}</del>` : ''}
      </span>

    </p>
    <p class="font-normal"> ${product.name} <p/>
    <div class="mt-[40px]">
      <p class="font-bold text-[1.1rem]">
        ${product.colors} Colors available
      </p>
       <div class="flex gap-3">
        <figure class="w-[110px] h-[140px] border-[2px] border-black selectColors">
          <img src="${product.images[0]}" alt="${product.name}" class="object-cover object-[50%_0%] w-full h-full" />
          <p class="text-center w-full text-[0.9rem] text-black mt-2 font-light">
            ${product.typeColors || 'Default'}
          </p>
        </figure>
        ${(() => {
          let extraFigures = '';
          for (let i = 0; i < (product.colors - 1); i++) {
            const imagesKey = `images${i}`;
            const typeColorKey = `typeColors${i}`;
            if (product[imagesKey]?.length) {
              extraFigures += `
                <figure class="w-[110px] h-[140px] selectColors border-[2px] border-black">
                  <img src="${product[imagesKey][0]}" alt="${product.name}" class="object-cover object-[50%_0%] w-full h-full" />
                  <p class="text-center w-full text-[0.9rem] text-black mt-2 font-light">
                    ${product[typeColorKey] || `Color ${i + 2}`}
                  </p>
                </figure>
              `;
            }
          }
          return extraFigures;
        })()}
    </div>
    </div>
    <div class="mt-12">
      <p>Size</p>
      <div class="flex gap-[8px] font-normal text-[0.9rem] flex-wrap sizeSet">
        ${[1,2,3,4,5].map(n => {
          const sizeVal = product[`size${n}`] || '';
          return sizeVal ? `<div class="cursor-pointer p-[10px_30px] bg-gray-100 rounded-sm ">${sizeVal}</div>` : '';
        }).join('')}
      </div>
    </div>
    <div class="mt-6">
      <p>Quantity</p>
      <div class="flex gap-[8px] font-normal text-[0.9rem] flex-wrap">
        <div id="decrease" class="disabled cursor-pointer select-none p-[10px_30px] bg-gray-100 rounded-sm">-</div>
        <div id="quantity" class="cursor-pointer p-[10px_30px] select-none bg-gray-100 rounded-sm qty">${incre || 1}</div>
        <button id="increase" class="cursor-pointer disabled p-[10px_30px] bg-gray-100 select-none rounded-sm">+</button>
      </div>
    </div>
    <div class="flex gap-3 mt-6">
      <button class="w-[350px] h-[40px] cursor-pointer bg-black rounded-sm text-white flex justify-center items-center AddToFav gap-4">
        <span>Add to bag </span>
        <span class="opacity-70 text-white text-[0.8rem] font-normal">(1 Left in Stock)</span>
      </button>
      <div class="w-[60px] cursor-pointer h-[40px] bg-gray-200 flex justify-center items-center p-2 rounded-sm">
        <i class="fa-regular fa-heart heartSaveInfo cursor-pointer" style="color:   #c91269"></i>
      </div>
    </div>
  <div class="w-full moreContainer bg-gray-100 relative mt-6 p-6 font-normal grid grid-cols-2 gap-[40px] items-center justify-center" style="border-bottom: 1px solid #A0A1A4">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="absolute right-4 top-4 cursor-pointer arrowInfo" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg>
      <div class="gap-2 items-center hidden wrapItem">
        <img src="https://zandokh.com/image/catalog/logo/feature-block/fast-delivery.svg" alt="" class="w-[30px] h-[30px] object-contain" />
        <div>
          <p class="text-[1.1rem]">Fast Delivery</p>
          <p class="text-[0.8rem]">From 1 -3 days</p>
        </div>
      </div>
      <div class="gap-2 items-center hidden wrapItem">
        <img src="https://zandokh.com/image/catalog/logo/feature-block/hotline.svg" alt="" class="w-[30px] h-[30px] object-contain" />
        <div>
          <p class="text-[1.1rem]">Support hotline</p>
          <p class="text-[0.8rem]">(+855) 081 999 716</p>
        </div>
      </div>
      <div class="gap-2 items-center hidden wrapItem">
        <img src="https://zandokh.com/image/catalog/logo/feature-block/payment-form.svg" alt="" class="w-[30px] h-[30px] object-contain" />
        <div>
          <p class="text-[1.1rem]">Easy payment</p>
          <p class="text-[0.8rem]">many forms</p>
        </div>
      </div>
    </div>
    <div class="w-full moreContainer bg-gray-100 relative flex flex-col p-6 gap-[12px] items-start justify-center font-normal" style="border-bottom: 1px solid #A0A1A4">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="absolute right-4 top-4 cursor-pointer arrowInfo" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg>
      <p class="font-bold text-[1rem] font-[fm] absolute top-0 cursor-pointer hovering" style="margin-top: 10px">Model info</p>
      <p class="text-[0.8rem] hidden  mt-12 wrapItem2">Model is 161cm tall /43kg weight and is wearing size 24.</p>
    </div>
    <div class="w-full moreContainer bg-gray-100 relative flex flex-col p-6 gap-[12px] items-start justify-center font-normal" style="border-bottom: 1px solid #A0A1A4">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="absolute right-4 top-4 cursor-pointer arrowInfo" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg>
      <p class="font-bold text-[1rem] font-[fm]  absolute top-0 hovering" style="margin-top: 10px;">Product details</p>
      <div class="text-[0.8rem] hidden mt-12 wrapItem3 flex-col gap-[30px]">
        <p>Code. ${product.code}</p>
        <p>${product.description}</p>
      </div>
    </div>
    <div class="w-full moreContainer bg-gray-100 relative p-6 flex flex-col gap-[12px] items-start justify-center font-normal" style="border-bottom: 1px solid #A0A1A4">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="absolute right-4 top-4 cursor-pointer arrowInfo" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg>
      <p class="font-bold text-[1rem] font-[fm] absolute top-0 hovering" style="margin-top: 10px">Size guide</p>
      <div class="max-[546px]:scale-[0.65] scale-100">
        <div class="text-[0.8rem] hidden mt-12 wrapItem4 relative flex-col gap-[20px] w-full justify-center items-start sm:ml-0 ml-[-70px]">
          <div style="display: flex; font-size: 12px" class="mt-[-20px] w-full h-auto">
            <div style="display: flex; flex-direction: column; gap: 12px; position: relative">
            <div style="height: 40.06px; padding-top: 15px; width: 40px; position: absolute; top: -40px; right 0;">
                <label
                  style="
                    font-weight: bold;
                    display: inline-block;
                    transform: rotateZ(0deg);
                    white-space: nowrap;
                  "
                  >Height</label
                >
              </div>
              <div style="height: 40.06px; padding-top: 15px; width: 40px;">
                <label
                  style="
                    display: inline-block;
                    transform: rotateZ(-45deg);
                    white-space: nowrap;
                  "
                  >171-175</label
                >
              </div>
              <div style="height: 40.06px; padding-top: 15px; width: 40px">
                <label
                  style="
                    display: inline-block;
                    transform: rotateZ(-45deg);
                    white-space: nowrap;
                  "
                  >166-170</label
                >
              </div>
              <div style="height: 40.06px; padding-top: 15px; width: 40px">
                <label
                  style="
                    display: inline-block;
                    transform: rotateZ(-45deg);
                    white-space: nowrap;
                  "
                  >161-165</label
                >
              </div>
              <div style="height: 40.06px; padding-top: 15px; width: 40px">
                <label
                  style="
                    display: inline-block;
                    transform: rotateZ(-45deg);
                    white-space: nowrap;
                  "
                  >156-160</label
                >
              </div>
              <div style="height: 40.06px; padding-top: 15px; width: 40px">
                <label
                  style="
                    display: inline-block;
                    transform: rotateZ(-45deg);
                    white-space: nowrap;
                  "
                  >150-155</label
                >
              </div>
              <div style="height: 40.06px; padding-top: 15px; width: 40px; position: absolute; bottom: -10px; right 0;">
                <label
                  style="
                    font-weight: bold;
                    display: inline-block;
                    transform: rotateZ(0deg);
                    white-space: nowrap;
                  "
                  >Width</label
                >
              </div>
            </div>
            <div
              class="ProductDetailsDescription_tableStyles__CjRuU indiana-scroll-container indiana-scroll-container--hide-scrollbars relative"
            >
              <div
                style="
                  display: grid;
                  grid-template-columns: repeat(5, 40px);
                  padding: 1px;
                  gap: 10px;
                "
              >
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center"></div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center"></div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">L</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">L</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">L</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center"></div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">M</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">M</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">L</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center"></div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">S</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">S</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">M</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">M</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">L</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">XS</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">S</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">S</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">M</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">L</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">XS</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">XS</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">S</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">M</div>
                <div class="ProductDetailsDescription_sizeLabelCell__3ju0R" style="height: 40.06px;  width: 40px; background: #e0e0e0; display: flex; justify-content: center; align-items: center">M</div>
                <div style="position: relative; rotate: -45deg">
                  <label class="ProductDetailsDescription_weightLabel__2fMja"
                    >40-45</label
                  >
                </div>
                <div style="position: relative; rotate: -45deg">
                  <label class="ProductDetailsDescription_weightLabel__2fMja"
                    >46-50</label
                  >
                </div>
                <div style="position: relative; rotate: -45deg">
                  <label class="ProductDetailsDescription_weightLabel__2fMja"
                    >51-55</label
                  >
                </div>
                <div style="position: relative; rotate: -45deg">
                  <label class="ProductDetailsDescription_weightLabel__2fMja"
                    >56-60</label
                  >
                </div>
                <div style="position: relative; rotate: -45deg">
                  <label class="ProductDetailsDescription_weightLabel__2fMja"
                    >61-65</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full moreContainer bg-[#f0f0f0ae] relative flex flex-col p-6 gap-[12px] items-start justify-center font-normal" style="border-bottom: 1px solid #A0A1A4">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="absolute right-4 top-4 cursor-pointer arrowInfo" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg>
      <p class="font-bold text-[1rem] font-[fm]  absolute top-0 hovering" style="margin-top: 10px">Product details</p>
      <div class="text-[0.8rem] hidden mt-12 wrapItem4 flex-col gap-[30px]">
        <p>Online exchange policy</p>
      </div>
    </div>
    `;
    const color = (product.typeColors || product.color || '').toString().trim().toLowerCase();
    const size = (product.size1 || product.size || '').toString().trim().toLowerCase();

    const itemToSave = {
      imageSrc: product.images[0],
      name: product.name,
      code: product.code,
      color: color,
      size: size,
      price: product.price,
      oldPrice: product.oldPrice || 0,
      discount: product.discount || ''
    };

    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    // Remove any existing item with the same code, color, and size
    savedItems = savedItems.filter(item =>
      !(String(item.code) === String(itemToSave.code) &&
        (item.color || '').toLowerCase() === color &&
        (item.size || '').toLowerCase() === size)
    );

    // Add the new item
    savedItems.push(itemToSave);

    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    rendersavedItems();

    function rendersavedItems() {
      let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    }
    let selectedIndex = 0;
    let selectedSize = '';
    const colorFigurez = infoBox.querySelectorAll('.selectColors');
    const sizeSet = document.querySelectorAll('.sizeSet div');
    colorFigurez.forEach((figure, i) => {
      figure.style.border = (i === 0) ? '2px solid black' : 'none';
      figure.addEventListener('click', () => {
        if (selectedIndex === i) return;
      })
    })
    // for (let i = 0; i < sizeSet.length; i++) {
    //   const text = sizeSet[i].textContent.trim();
    //   if (text !== '') {
    //     selectedSize = text;
    //     sizeSet[i].style.border = '2px solid black';
    //     break;
    //   }
    // }
    let selectedIndexC = 0;

  sizeSet.forEach((e, i) => {
    e.style.border = (i === 0) ? '2px solid black' : 'none';

    e.addEventListener("click", () => {
      if (selectedIndexC !== i) {
        sizeSet[selectedIndexC].style.border = 'none'; 
      }
      if (selectedIndexC === i) return;
      e.style.border = '2px solid black';
      selectedIndexC = i;
    });
  });
  const decreaseBtn = document.getElementById("decrease");
  const increaseBtn = document.getElementById("increase");

  function showOutOfStockAlert() {
    alert("This item is unavailable. Only 1 unit is left in stock.");
  }

  decreaseBtn.addEventListener("click", showOutOfStockAlert);
  increaseBtn.addEventListener("click", showOutOfStockAlert);

    function updateSelectedFigure(i) {
      if (selectedIndex !== i) {
        colorFigurez[selectedIndex].style.border = 'none';
      }
      colorFigurez[i].style.border = '2px solid black';
      selectedIndex = i;
      
      const keyImg = i === 0 ? 'images' : `images${i - 1}`;
      const keyColor = i === 0 ? 'typeColors' : `typeColors${i - 1}`;
      const imageSrc = product[keyImg][0];
      const colorBag = product[keyColor];
      document.querySelector('.bagGrab').innerHTML = `
      <div class='flex gap-4 w-auto h-[250px] mt-12 relative cursor-auto'>
        <figure class='w-[150px] h-[200px] relative border-[2px] border-black'>
          <img src="${imageSrc}" alt="${product.name}" class="object-cover w-full h-full aspect-[2/3]" />
        </figure>
        <div class='flex gap-[12px] flex-col'>
          <p class='text-[2rem] font-normal'>Added to bag</p>
          <div style="font-size: clamp(1rem, 1vw + 0.5rem, 1.1em);" class='font-normal'>
            <p>${product.name}</p>
            <p>${colorBag} / <span class="selected-size-text">${selectedSize} / 1</span> </p> 
            <span>
              <span class='text-red-600 font-bold'>US $${product.price.toFixed(2)}</span>
              ${product.discount !== '' ? `<span class="font-bold text-black">${product.discount}</span>` : ''}
              ${product.oldPrice >= 0 ? `<del class="font-normal text-black">$${product.oldPrice.toFixed(2)}</del>` : ''}
            </span>
          </div>
          <button class='w-[230px] h-[40px] cursor-pointer saveBag bg-black outline-none border-none rounded-sm text-white text-[1rem]'>Go to bag</button>
        </div>
      </div>
    `;
    const saveBagBtn = document.querySelector('.saveBag');
    saveBagBtn.addEventListener('click', () => {
      document.querySelector('.Bag').style.right = '0px';
      bagGrab.style.bottom = '-450px'
      updateBag(imageSrc, product, colorBag, selectedSize);
      renderBag();
    });
    const colorFigures = document.querySelectorAll('.selectColors');

  colorFigures.forEach((figure, colorIndex) => {
    figure.style.cursor = 'pointer';

    figure.onclick = () => {
      // Determine which images key to use
      const key = colorIndex === 0 ? 'images' : `images${colorIndex - 1}`;
      const imagesToUse = product[key] || product.images;

      // Update sidebar thumbnails
      const sidebarBoxes = sidebar.querySelectorAll('div');
      sidebarBoxes.forEach((box, i) => {
        if (imagesToUse[i]) {
          box.innerHTML = `
            <img src="${imagesToUse[i]}" 
                class="object-cover w-full h-full cursor-pointer" 
                data-index="${i}" 
                data-group="${key}" />
          `;
        } else {
          box.innerHTML = '';
        }
        box.classList.remove('border-2', 'border-black');
      });

      // Re-initialize swiper slides with the selected color images
      mainFigure.innerHTML = `
        <div class="bottom-[80px] text-[0.9rem] text-black right-[-20px] z-[250] rotate-[-90deg] absolute font-normal">
          ZANDO / NewIn
        </div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            ${imagesToUse.map(img => `
              <div class="swiper-slide relative group">
                <img src="${img}" class="w-full h-full object-cover" data-zoomable />
              </div>
            `).join('')}
          </div>
          <div class="swiper-button-next z-[250]"></div>
          <div class="swiper-button-prev z-[250]"></div>
        </div>
      `;

      // Destroy old swiper and create new one for the new images
      if (swiper) swiper.destroy(true, true);
      swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: false,
        on: {
          slideChangeTransitionStart: () => {
            isSliding = true;
            // Reset zoom
            isZoomed = false;
            swiper.slides.forEach(slide => {
              const img = slide.querySelector('img[data-zoomable]');
              if (img) {
                img.style.transition = 'transform 0.2s ease';
                img.style.transform = 'scale(1)';
                img.style.transformOrigin = 'center center';
              }
            });
            mainFigure.style.cursor = 'zoom-in';
            updateSidebarHighlight(swiper.activeIndex);
          },
          slideChangeTransitionEnd: () => {
            isSliding = false;
          }
        }
      });

      // Highlight first sidebar thumbnail by default
      updateSidebarHighlight(0);

      // Add click event to sidebar thumbnails for new images
      sidebar.querySelectorAll('img').forEach(imgEl => {
        imgEl.onclick = () => {
          const idx = +imgEl.dataset.index;
          swiper.slideTo(idx);
        };
      });
    };
  });
    function updateBag(imageSrc, product, colorBag, sizeBag) {
      const Bag = document.querySelector('.Bag');
      let bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];

      const existingItem = bagItems.find(item =>
        item.name === product.name &&
        item.color === colorBag
      );

      if (existingItem) {
        existingItem.size = sizeBag; 
        existingItem.quantity = 1;  
      } else {
        bagItems.push({
          imageSrc,
          name: product.name,
          code: product.code,
          color: colorBag,
          size: sizeBag,
          price: product.price,
          oldPrice: product.oldPrice,
          discount: product.discount,
          quantity: 1
        });
        localStorage.setItem('bagItems', JSON.stringify(bagItems));
        renderBag();
      }
      let bagIcon = document.querySelector('.bagIcon');
      if (bagIcon) {
        bagIcon.addEventListener('click', (e) => {
          e.stopPropagation();
          renderBag();
        });
      }
      const totalPrice = bagItems.reduce((sum, item) => sum + item.price, 0);
      const totalOldPrice = bagItems.reduce((sum, item) => sum + (item.oldPrice || 0), 0);
      const save = totalOldPrice - totalPrice;
      const deliveryFee = 1.25;
      const amountToPay = totalPrice + deliveryFee;
      if (!document.querySelector('.addBag-list')) {
        Bag.innerHTML = `
          <div class='w-full h-[40px] bg-black border-[1px] border-black flex justify-between items-center p-2'>
            <i class="fa-solid fa-xmark text-white text-[1.1rem] cursor-pointer return"></i>
            <i class="fa-solid fa-heart text-white text-[1.1rem] cursor-pointer remove"></i>
          </div>
          <div class="w-full h-full bg-transparent overflow-auto p-3">
            <div class="flex flex-col gap-[40px] addBag-list lenis-scrollable"  style="max-height: 100%; overflow-y: auto; scrollbar-width: none; -ms-overflow-style: none;">></div>
          </div>
          <div class="w-full h-auto min-h-[230px] bottom-0 p-3 left-0">
            <div class="w-full h-full flex flex-col">
              <div class="bg-black w-full h-1 rounded-full"></div>
              <div class="w-full h-full gap-2 flex flex-col">
                <div class="w-full flex justify-between text-[1.1rem]">
                  <span>Total</span>
                  <span>${totalOldPrice.toFixed(2) !== '' ? `US $${totalOldPrice.toFixed(2)}` : 'US $0'}</span>
                </div>
                <div class="w-full flex justify-between text-[0.9rem] font-normal">
                  <span>Save</span>
                  <span>${save.toFixed(2) !== '' ? `US $${save.toFixed(2)}` : 'US $0'}</span>
                </div>
                <div class="w-full flex justify-between text-[0.9rem] font-normal">
                  <span>Delivery fee</span>
                  <span>${totalPrice > 0 ? `US $${deliveryFee.toFixed(2)}` : 'US $0.00'}</span>
                </div>
                <hr/>
                <div class="w-full flex justify-between text-[1.1rem]">
                  <span>Amount to pay</span>
                  <span>${totalPrice > 0 ? `US $${amountToPay.toFixed(2)}` : 'US $0.00'}</span>
                </div>
                <button class="w-full h-[40px] bg-black text-white rounded-lg">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        `;
      }
      

      const list = document.querySelector('.addBag-list');
      list.innerHTML = '';

      bagItems.forEach(item => {
        list.insertAdjacentHTML('beforeend', `
          <div class="flex gap-3 addBag w-full h-[450px]">
            <figure class="w-[290px] h-[220px] bg-black relative border-[2px] borde-black">
              <img src="${item.imageSrc}" alt="${item.name}" class="object-cover w-full h-full aspect-[2/3]" />
            </figure>
            <div class="flex justify-between w-full h-auto">
              <div class="w-auto h-full flex flex-col gap-1 text-[0.9rem] font-normal">
                <span class="max-w-[140px] truncate whitespace-nowrap overflow-hidden font-bold text-[1.1rem]">${item.name}</span>
                <span class="max-w-[180px] truncate whitespace-nowrap overflow-hidden">Code. ${item.code}</span>
                <span class="max-w-[180px] truncate whitespace-nowrap overflow-hidden">Color. ${item.color}</span>
                <span class="max-w-[180px] truncate whitespace-nowrap overflow-hidden">Size. ${item.size}</span>
                <p><del>US $${item.oldPrice}</del></p>
                <p>(${item.discount} off) &ndash; US $${item.oldPrice}</p>
                <p class="font-bold text-[1.1rem] text-red-600">US $${item.price}</p>
              </div>
              <div class="cursor-pointer removeBag">
                <i class="fa-solid fa-trash" style="color: #000000;"></i>
              </div>
            </div>
          </div>
        `);
      });

      list.addEventListener('wheel', (e) => {
        const delta = e.deltaY;
        const up = delta < 0;
        const down = delta > 0;

        const atTop = list.scrollTop === 0;
        const atBottom = list.scrollHeight - list.clientHeight === list.scrollTop;

        if ((up && atTop) || (down && atBottom)) {
        } else {
          e.stopPropagation();
        }
      });
      document.querySelector('.return').addEventListener('click', () => {
        Bag.style.right = '-450px'
      })
      Bag.querySelectorAll('.removeBag').forEach((removeBtn) => {
        removeBtn.addEventListener('click', (e) => {
          const addBagDiv = removeBtn.closest('.addBag');
          const code = addBagDiv.querySelector('span:nth-child(2)').textContent.replace('Code. ', '').trim();
          const color = addBagDiv.querySelector('span:nth-child(3)').textContent.replace('Color. ', '').trim();
          const size = addBagDiv.querySelector('span:nth-child(4)').textContent.replace('Size. ', '').trim();
          bagItems = bagItems.filter(item =>
            String(item.code) !== code ||
            item.color !== color ||
            item.size !== size
          );
          localStorage.setItem('bagItems', JSON.stringify(bagItems));
          renderBag();
        });
      });
      const containers = document.querySelectorAll(".moreContainer");
    const Itemcontainers = document.querySelectorAll(".wrapItem");
    const arrows = document.querySelectorAll(".arrowInfo");
    const toggledStates = [];

    containers.forEach((container, index) => {
      container.style.height = "40px";
      container.style.overflow = "hidden";
      container.style.transition = "height 0.8s cubic-bezier(0.85, 0, 0.15, 1)";
      container.style.cursor = "pointer"; // All containers clickable
      toggledStates[index] = false;

      const toggleContainer = () => {
        const isCollapsed = toggledStates[index];

        // Rotate arrows and reset others
        containers.forEach((c, i) => {
          if (i !== index) {
            c.style.height = "40px";
            toggledStates[i] = false;
            arrows[i].style.rotate = "0deg";
          }
        });

        // Hide all items
        Itemcontainers.forEach(e => e.style.display = "none");
        document.querySelector('.wrapItem2').style.display = "none";
        document.querySelector('.wrapItem3').style.display = "none";
        document.querySelector('.wrapItem4').style.display = "none";

        if (!isCollapsed) {
          // Expand selected container
          if (index === 0) {
            container.style.height = "180px";
            setTimeout(() => {
              Itemcontainers.forEach((e) => {
                e.style.display = "flex";
                e.style.cursor = "pointer";
              });
            }, 500);
          } else if (index === 1) {
            container.style.height = "120px";
            setTimeout(() => {
              document.querySelector(".wrapItem2").style.display = "flex";
            }, 500);
          } else if (index === 2) {
            container.style.height = "250px";
            setTimeout(() => {
              document.querySelector(".wrapItem3").style.display = "flex";
            }, 500);
          } else if (index === 3) {
            container.style.height = "420px";
            setTimeout(() => {
              document.querySelector(".wrapItem4").style.display = "flex";
            }, 500);
          }
          arrows[index].style.rotate = "90deg";
        } else {
          container.style.height = "40px";
          arrows[index].style.rotate = "0deg";
        }

        toggledStates[index] = !isCollapsed;
      };

      // Clicking container toggles it
      container.addEventListener("click", toggleContainer);
      // Clicking arrow toggles it (optional if arrow is inside container)
      arrows[index].addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent double trigger if arrow is inside container
        toggleContainer();
      });
    });

    }


    sizeSet.forEach((sizeBtn) => {
      sizeBtn.addEventListener('click', (e) => {
          // e.stopPropagation()
          selectedSize = sizeBtn.textContent;
          document.querySelector('.selected-size-text').textContent = selectedSize;
        });
      });
    }
    colorFigurez.forEach((figure, i) => {
      figure.addEventListener('click', () => {
        updateSelectedFigure(i);
      });
    });
    if (colorFigurez.length > 0) {
      updateSelectedFigure(0);  
    }
    const AddToFav =  document.querySelector('.AddToFav')
    const itemWrapper = document.querySelector('.itemWrapper')
    
    AddToFav.addEventListener('click', (e) => {
      e.stopPropagation()
      bagGrab.style.bottom = '0px'
      bagGrab.style.minHeight = '300px'
    })
    itemWrapper.addEventListener('click', () => {
      bagGrab.style.bottom = '-450px'
    })
    const heartWrap = document.querySelector('.heartWrap');
    const heart = document.querySelector('.heart');
    heart.style.color = 'gray'; 

    heartWrap.addEventListener('click', (e) => {
      e.stopPropagation()
      if (heart.style.color === 'black') {
        heart.style.color = 'gray'; 
      } else {
        heart.style.color = 'black'; 
      }
    });
    sizeSet.forEach(option => {
      option.addEventListener('click', () => {
        sizeSet.forEach(o => {
          o.style.border = "none";
        });
        option.style.border = "2px solid black";
      });
    });
    

    


    // <p>${product.description}</p>
    // document.getElementById("increase").onclick = () => {
    //   incre++;
    //   document.getElementById("quantity").textContent = incre;
    // };
    
    // document.getElementById("decrease").onclick = () => {
    //   if (incre > 1) {
    //     incre--;
    //     document.getElementById("quantity").textContent = incre;
    //   }
    // };
  }
    // --- Existing part in your showItemDetail ---
  renderProductInfo();
  

  // ADD THIS HERE: Attach click listeners to color selectors
  
}

function updateSidebarHighlight(activeIndex) {
  const sidebarBoxes = sidebar.querySelectorAll('div');
  sidebarBoxes.forEach((box, i) => {
    box.classList.toggle('border-2', i === activeIndex);
    box.classList.toggle('border-black', i === activeIndex);
  });
}

mainFigure.addEventListener('click', (e) => {
  if (!swiper) return;
  if (isSliding) return;  // Prevent zoom toggle during slide animation

  const img = swiper.slides[swiper.activeIndex].querySelector('img[data-zoomable]');
  if (!img) return;

  isZoomed = !isZoomed;
  if (isZoomed) {
    img.style.transition = 'transform 0.2s ease';
    img.style.transform = 'scale(2)';
    img.style.transformOrigin = 'center center';
    mainFigure.style.cursor = 'zoom-out';
  } else {
    img.style.transition = 'transform 0.2s ease';
    img.style.transform = 'scale(1)';
    mainFigure.style.cursor = 'zoom-in';
  }
});

mainFigure.addEventListener('mousemove', (e) => {
  if (!isZoomed) return;
  if (!swiper) return;
  const img = swiper.slides[swiper.activeIndex].querySelector('img[data-zoomable]');
  if (!img) return;

  const rect = img.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

  const percentX = offsetX / rect.width;
  const percentY = offsetY / rect.height;

  const originX = percentX * 100;
  const originY = percentY * 100;

  img.style.transformOrigin = `${originX}% ${originY}%`;
});

function goBack() {
  const view = document.querySelector('.view');
  const itemDetail = document.getElementById('itemDetail');
  const bagGrab = document.querySelector('.bagGrab')

  // Show the list container again
  view.style.display = '';
  itemDetail.classList.add('hidden');
  bagGrab.classList.add('hidden')
}

const form = document.getElementById('languageForm');
const savedLang = localStorage.getItem('selectedLanguage');

if (savedLang) {
  const savedInput = document.querySelector(`input[value="${savedLang}"]`);
  if (savedInput) savedInput.checked = true;
}

form.addEventListener('change', (e) => {
  if (e.target.name === 'language') {
    localStorage.setItem('selectedLanguage', e.target.value);
  }
});


function renderBag() {
  const Bag = document.querySelector('.Bag');
  let bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];

  const totalPrice = bagItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalOldPrice = bagItems.reduce((sum, item) => sum + (item.oldPrice || 0) * item.quantity, 0);
  const save = totalOldPrice - totalPrice;
  const deliveryFee = 1.25;
  const amountToPay = totalPrice + deliveryFee;

  // 1. Set Bag HTML first
  Bag.innerHTML = `
    <div class='w-full h-[40px] bg-black border-[1px] border-black flex justify-between items-center p-2'>
      <i class="fa-solid fa-xmark text-white text-[1.1rem] cursor-pointer return"></i>
      <i class="fa-solid fa-heart text-white text-[1.1rem] cursor-pointer saved"></i>
    </div>
    <div class="w-full h-full bg-transparent overflow-auto p-3">
      <div class="flex flex-col gap-[40px] addBag-list lenis-scrollable"  style="max-height: 100%; overflow-y: auto; scrollbar-width: none; -ms-overflow-style: none;"></div>
    </div>
    <div class="w-full h-auto min-h-[230px] bottom-0 p-3 left-0">
      <div class="w-full h-full flex flex-col">
        <div class="bg-black w-full h-1 rounded-full"></div>
        <div class="w-full h-full gap-2 flex flex-col">
          <div class="w-full flex justify-between text-[1.1rem]">
            <span>Total</span>
            <span>US $${totalOldPrice.toFixed(2)}</span>
          </div>
          <div class="w-full flex justify-between text-[0.9rem] font-normal">
            <span>Save</span>
            <span>US $${save.toFixed(2)}</span>
          </div>
          <div class="w-full flex justify-between text-[0.9rem] font-normal">
            <span>Delivery fee</span>
            <span>${totalPrice > 0 ? `US $${deliveryFee.toFixed(2)}` : 'US $0.00'}</span>
          </div>
          <hr/>
          <div class="w-full flex justify-between text-[1.1rem]">
            <span>Amount to pay</span>
            <span>${totalPrice > 0 ? `US $${amountToPay.toFixed(2)}` : 'US $0.00'}</span>
          </div>
          <button class="w-full h-[40px] bg-black text-white rounded-lg">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  `;

  // 2. Now update scroll lock and Bag position
window.scrollTo({ top: 0, behavior: 'smooth' });

  function lockScrollWhenAtTop() {
    if (window.scrollY <= 0) {
      document.body.classList.add('body-no-scroll');
      document.documentElement.classList.add('body-no-scroll');
      Bag.style.right = '0px';
    } else {
      requestAnimationFrame(lockScrollWhenAtTop);
    }
  }
  lockScrollWhenAtTop();

  // 3. Fill the bag items
  const list = Bag.querySelector('.addBag-list');
  list.innerHTML = '';
  bagItems.forEach(item => {
    list.insertAdjacentHTML('beforeend', `
      <div class="flex gap-3 addBag w-full h-[450px]">
        <figure class="w-[290px] h-[220px] bg-black relative border-[2px] borde-black">
          <img src="${item.imageSrc}" alt="${item.name}" class="object-cover w-full h-full aspect-[2/3]" />
        </figure>
        <div class="flex justify-between w-full h-auto">
          <div class="w-auto h-full flex flex-col gap-1 text-[0.9rem] font-normal">
            <span class="max-w-[140px] truncate whitespace-nowrap overflow-hidden font-bold text-[1.1rem]">${item.name}</span>
            <span class="max-w-[180px] truncate whitespace-nowrap overflow-hidden">Code. ${item.code}</span>
            <span class="max-w-[180px] truncate whitespace-nowrap overflow-hidden">Color. ${item.color}</span>
            <span class="max-w-[180px] truncate whitespace-nowrap overflow-hidden">Size. ${item.size}</span>
            <p><del>US $${item.oldPrice}</del></p>
            <p>(${item.discount} off) &ndash; US $${item.oldPrice}</p>
            <p class="font-bold text-[1.1rem] text-red-600">US $${item.price}</p>
          </div>
          <div class="cursor-pointer removeBag">
            <i class="fa-solid fa-trash" style="color: #000000;"></i>
          </div>
        </div>
      </div>
    `);
  });

  // 4. Attach close event after HTML is set
  Bag.querySelector('.return').addEventListener('click', () => {
    Bag.style.right = '-450px';
    document.body.classList.remove('body-no-scroll');
    document.documentElement.classList.remove('body-no-scroll');
  });

  Bag.querySelectorAll('.removeBag').forEach((removeBtn) => {
  removeBtn.addEventListener('click', (e) => {
    const addBagDiv = removeBtn.closest('.addBag');
    const code = addBagDiv.querySelector('span:nth-child(2)').textContent.replace('Code. ', '').trim();
    const color = addBagDiv.querySelector('span:nth-child(3)').textContent.replace('Color. ', '').trim();
    const size = addBagDiv.querySelector('span:nth-child(4)').textContent.replace('Size. ', '').trim();
    bagItems = bagItems.filter(item =>
      String(item.code) !== code ||
      item.color !== color ||
      item.size !== size
    );
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    renderBag();
  });
});

  list.addEventListener('wheel', (e) => {
    const delta = e.deltaY;
    const up = delta < 0;
    const down = delta > 0;
    const atTop = list.scrollTop === 0;
    const atBottom = list.scrollHeight - list.clientHeight === list.scrollTop;
    if ((up && atTop) || (down && atBottom)) {
    } else {
      e.stopPropagation();
    }
  });
}

let bagIcon = document.querySelector('.bagIcon');
if (!bagIcon) {
  console.error('No .bagIcon element found!');
} else {
  bagIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    renderBag();
  });
}
// Force all images to load immediately
document.querySelectorAll('img').forEach(img => {
  // Remove lazy loading if present
  img.removeAttribute('loading');
  // Force browser to start loading
  if (!img.complete && img.src) {
    const preloadImg = new Image();
    preloadImg.src = img.src;
  }
});



const saveItems = document.querySelector('.saveItems');
let saveClick = true;

document.querySelectorAll('.heartLike').forEach((heart, idx) => {
  heart.addEventListener('click', (e) => {
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    saveItemsList(savedItems);
      if (saveClick) {
        e.stopPropagation();
        // Get product info by index (assuming data-index or idx matches products array)
        const product = products[idx];
        if (!product) return;

        const keyColor = idx === 0 ? 'typeColors' : `typeColors${idx - 1}`;
        const color = product[keyColor] || product.typeColors || '';
        const itemToSave = {
          imageSrc: product.mainImage,
          name: product.name,
          code: product.code,
          color: color,
          size: product.size1 || '',
          price: product.price
        };
    
        // Get current saved items
        // Prevent duplicate saves (by code and color and size)
        const exists = savedItems.some(item =>
          item.code === itemToSave.code &&
          item.color === itemToSave.color &&
          item.size === itemToSave.size
        );
        if (!exists) {
          savedItems.push(itemToSave);
          localStorage.setItem('savedItems', JSON.stringify(savedItems));
        }
        saveClick = false
        document.querySelector('.view').style.display = 'none';
        document.querySelector('.itemWrapper').style.display = 'none';
        saveItems.style.display = 'block';
      } else {
        document.querySelector('.view').style.display = 'block';
        saveItems.style.display = 'none';
        saveClick = true;
      }
    });
});

document.querySelectorAll('.heartSave').forEach((heart, idx) => {
  // Set initial icon state based on localStorage
  let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
  const product = products[idx];
  if (!product) return;

  const isSaved = savedItems.some(item =>
    item.code === product.code &&
    item.color === (product.typeColors || '') &&
    item.size === (product.size1 || '')
  );
  heart.classList.remove('fa-solid', 'fa-regular');
  heart.classList.add(isSaved ? 'fa-solid' : 'fa-regular');

  heart.addEventListener('click', (e) => {
    e.stopPropagation();
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    const product = products[idx];
    if (!product) return;

    const itemToSave = {
      imageSrc: product.images[0],
      name: product.name,
      code: product.code,
      color: product.typeColors || '',
      amountColors: product.colors,
      size: product.size1 || '',
      price: product.price
    };

    const existsIndex = savedItems.findIndex(item =>
      item.code === itemToSave.code &&
      item.color === itemToSave.color &&
      item.size === itemToSave.size
    );

    if (existsIndex === -1) {
      // Save item and toggle icon to solid
      savedItems.push(itemToSave);
      localStorage.setItem('savedItems', JSON.stringify(savedItems));
      heart.classList.remove('fa-regular');
      heart.classList.add('fa-solid');
    } else {
      // Remove item and toggle icon to regular
      savedItems.splice(existsIndex, 1);
      localStorage.setItem('savedItems', JSON.stringify(savedItems));
      heart.classList.remove('fa-solid');
      heart.classList.add('fa-regular');
    }
    // Do NOT show saveItems or change view
  });
});

function goBack2() {
  document.querySelector('.view').style.display = 'block';
  document.querySelector('.itemWrapper').style.display = 'block';
  document.querySelector('.saveItems').style.display = 'none';
  document.querySelector('.buttonReturn').style.display = 'none';
}
function getProductColors(product) {
  const colors = [];
  let i = 0;
  while (true) {
    const key = i === 0 ? 'typeColors' : `typeColors${i}`;
    if (product[key]) {
      colors.push(product[key]);
      i++;
    } else {
      break;
    }
  }
  return colors;
}

function saveItemsList(items, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  // requestAnimationFrame(() => {
  //   setTimeout(() => {
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //     console.log('Scroll triggered');
  //   }, 500);
  // });
  requestAnimationFrame(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50); 
  });
  saveItems.innerHTML  = `
    <div class="w-full min-h-[500px] bg-white p-4 mt-12 h-auto grid gap-[20px]" style="grid-template-columns: repeat(4, 1fr)">
      ${items.map(item => `
        <div class="flex gap-y-1.5 flex-col relative cursor-pointer item savedItem">
          <figure class="w-full bg-black relative" style="height: clamp(250px, 10vw + 240px,  410px);">
              <div class="bottom-[80px] right-0 text-[0.9rem] z-[20] absolute font-normal rotate-[-90deg]" style="margin-right: -30px; margin-bottom: -30px;">
                  TEN11 /New In
              </div>
              <img src="${item.imageSrc}" alt="${item.name}" class="object-cover w-full h-full">
          </figure>
          <div>
              <div class="flex w-full justify-between text-[1.2rem]" style="font-size: clamp(1rem, 1vw + 0.5rem, 1.1rem);">
                <div class="flex gap-2">
                    <p class=" text-red-500" style="font-size: clamp(1rem, 1vw + 0.5rem, 1.1rem);">
                        US $${item.price.toFixed(2)}
                        <del class="font-normal text-black">
                            ${item.oldPrice ? `US $${item.oldPrice.toFixed(2)}` : ''}
                        </del>
                    </p>
                </div>
              <i class="fa-solid fa-heart heartSave cursor-pointer" style="color: #c91269" data-code="${item.code}" data-color="${item.color}" data-size="${item.size}"></i>
              </div>
              <p class="font-normal">${item.name}</p>
              <p class="text-[0.9rem] font-normal">Code. ${item.code}</p>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="w-full p-5 h-auto min-h-[40vh] bg-white relative">
      <div class="grid gap-[20px] w-full h-full" style="grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));">
            <div class="flex flex-wrap gap-5 items-start w-full">
              <div class="flex justify-center items-center flex-col">
                  <p class="uppercase">Zando App</p>
                  <figure class="w-[120px] h-[120px]">
                      <img src="https://zandokh.com/image/catalog/logo/qr_code_app.png" alt="" class="object-cover w-full h-full">
                  </figure>
              </div>
              <div class="flex justify-center items-center flex-col">
                  <p class="uppercase">
                      LOYALTY
                  </p>
                  <p class="font-normal text-[0.9rem] flex gap-2 justify-center items-center">
                      <img src="https://www.zandokh.com/_next/image?url=%2Ficons%2Fheart-black.svg&w=32&q=75" alt="" class="object-contain w-[1rem] h-[1rem]">
                      <span>Memberships & Benifits</span>
                  </p>
              </div>
          </div>
          <div class="gap-[20px] grid w-full justify-between items-start" style="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))">
              <div class="space-y-6">
                  <p>FOLLOW US</p>
                  <div class="text-[0.9rem] font-normal flex flex-col gap-1">
                      <div class="flex gap-2 items-center">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.001 19.9381C16.9473 19.446 20.001 16.0796 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.0796 7.05467 19.446 11.001 19.9381V14H9.00098V12H11.001V10.3458C11.001 9.00855 11.1402 8.52362 11.4017 8.03473C11.6631 7.54584 12.0468 7.16216 12.5357 6.9007C12.9184 6.69604 13.3931 6.57252 14.2227 6.51954C14.5519 6.49851 14.9781 6.52533 15.501 6.6V8.5H15.001C14.0837 8.5 13.7052 8.54332 13.4789 8.66433C13.3386 8.73939 13.2404 8.83758 13.1653 8.97793C13.0443 9.20418 13.001 9.42853 13.001 10.3458V12H15.501L15.001 14H13.001V19.9381ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22Z"></path>
                              <path d="M13.001 19.9381C16.9473 19.446 20.001 16.0796 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.0796 7.05467 19.446 11.001 19.9381V14H9.00098V12H11.001V10.3458C11.001 9.00855 11.1402 8.52362 11.4017 8.03473C11.6631 7.54584 12.0468 7.16216 12.5357 6.9007C12.9184 6.69604 13.3931 6.57252 14.2227 6.51954C14.5519 6.49851 14.9781 6.52533 15.501 6.6V8.5H15.001C14.0837 8.5 13.7052 8.54332 13.4789 8.66433C13.3386 8.73939 13.2404 8.83758 13.1653 8.97793C13.0443 9.20418 13.001 9.42853 13.001 10.3458V12H15.501L15.001 14H13.001V19.9381ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22Z"></path>
                          </svg>
                          <span>Facebook</span>
                      </div>
                      <div class="flex items-center gap-2">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                          </svg>
                          <span>Instagram</span>
                      </div>
                      <div class="flex items-center gap-2">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path></svg>
                          <span>TikTok</span>
                      </div>
                      <div class="flex items-center gap-2">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
                          <span>Youtube</span>
                      </div>  
                  </div>
              </div>
              <div class="space-y-6">
                  <p>CUSTOMER SERVICES</p>
                  <div class="text-[0.9rem] font-normal flex flex-col gap-1">
                      <div class="flex gap-2 items-center">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path></svg>
                          <span>Online exchange policy</span>
                      </div>
                      <div class="flex items-center gap-2">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path></svg>
                          <span>Privacy policy</span>
                      </div>
                      <div class="flex items-center gap-2">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path></svg>
                          <span>TikTok</span>
                      </div>
                      <div class="flex items-center gap-2">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                          <span>Find a store</span>
                      </div>  
                  </div>
              </div>
              <div class="space-y-6">
                  <p>CONTACT US</p>
                  <div class="text-[0.9rem] font-normal flex flex-col gap-1">
                      <div class="flex gap-2 items-center">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                          <span>info@zandokh.com</span>
                      </div>
                      <div class="flex items-center gap-2">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path></svg>
                          <span>(+855) 081 999 716</span>
                      </div>
                      <div class="flex items-center gap-2">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path></svg>
                          <span>(+855) 061 336 330</span>
                      </div>
                  </div>
              </div>
          </div>
          <div class="">
              <p>WE ACCEPT</p>
              <img src="https://zandokh.com/image/catalog/logo/web-footer/We-accept-payment%E2%80%93for-web-footer-1.png" alt="" class="object-contain w-full h-[120px]">
          </div>
      </div>
  </div>
  <hr>
  <div class="w-full flex relative p-4 items-center bg-white">
      <p class="font-normal text-[0.9rem] absolute right-[20px]">© 2015 - 2025 Zando. All rights reserved.</p>
  </div>
  <button onclick="goBack2()" type="button" class="col-span-full cursor-pointer w-full px-4 py-2 bg-gray-200 rounded buttonReturn">Back to list</button>
  `  
  // ...existing code that sets saveItems.innerHTML...

// Attach event listeners to all heart icons in the saved items view
document.querySelectorAll('.heartSave').forEach(icon => {
  icon.addEventListener('click', function() {
    const code = this.getAttribute('data-code');
    const color = this.getAttribute('data-color');
    const size = this.getAttribute('data-size');

    // Remove the item from savedItems in localStorage
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    savedItems = savedItems.filter(item =>
      !(String(item.code) === String(code) &&
        (item.color || '').toLowerCase() === (color || '').toLowerCase() &&
        (item.size || '').toLowerCase() === (size || '').toLowerCase())
    );
    localStorage.setItem('savedItems', JSON.stringify(savedItems));

    // Optionally, update the heart icon to default (unfilled)
    this.classList.remove('fa-solid', 'heartSave');
    this.classList.add('fa-regular', 'heartSave'); // Use your default class
    this.style.color = ''; // Reset color if needed

    // Optionally, remove the item from the DOM
    this.closest('.savedItem').remove();

    // Optionally, re-render the saved items list if needed
    // rendersavedItems();
    // After removing from localStorage...
    // Find the heart icon in the view with matching data attributes
    const viewHeart = document.querySelector(
      `.heartSave[data-code="${code}"][data-color="${color}"][data-size="${size}"]`
    );
    if (viewHeart) {
      viewHeart.classList.remove('fa-solid');
      viewHeart.classList.add('fa-regular');
      viewHeart.style.color = ''; // Reset color
    }
  });
});
 saveItems.querySelectorAll('.item.savedItem').forEach(itemDiv => {
  itemDiv.addEventListener('click', function(e) {
    if (e.target.classList.contains('heartSave')) return;

    const heart = itemDiv.querySelector('.heartSave');
    const code = heart.getAttribute('data-code');
    const color = heart.getAttribute('data-color');
    const size = heart.getAttribute('data-size');

    const product = products.find(p =>
      String(p.code) === code &&
      (p.typeColors === color || Object.values(p).includes(color)) &&
      (p.size1 === size || p.size === size)
    );

    // Debug: Check product
    console.log('Selected product:', product);

    if (product) {
      document.querySelector('.saveItems').style.display = 'none';
      document.getElementById('itemDetail').style.display = 'grid';
      renderProductInfo(product);
    }
  });
});
}
