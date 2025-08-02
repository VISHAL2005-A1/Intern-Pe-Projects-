
let arr = [];
const header = document.getElementById("header");
const foot_1=document.getElementById("foot-1");
const scroll=document.getElementById("scroll");
const contentArea = document.getElementById("contentArea")
const originalPage = document.body.innerHTML; // Save initial full page content
const original_button=document.getElementById("original-button");
original_button.classList.add("btn-secondary");
const template = document.getElementById("Shop");
const section_1 = document.getElementById("next-1");
const bttn = document.querySelectorAll("#next-1 #box button")[1];
const shop_now = document.querySelector(".shop_now")
console.dir(header);
console.log(shop_now)
// console.dir(bttn);
// console.log(clone);
console.log(template);
// Scroll the Content
const scroll_left=document.getElementById("scroll-left");
const scroll_right=document.getElementById("scroll-right");
const scroll_box=document.getElementById("scroll-box");

scroll_left.addEventListener("click",()=>{
  scroll_box.scrollLeft-=300;
})
scroll_right.addEventListener("click",()=>{
  scroll_box.scrollLeft+=300;
})

let x = 0;
let clone1 = template.content.cloneNode(true);
shop_now.addEventListener("click", () => {
  section_1.replaceWith(clone1);
  // section_1.appendChild(clone);
  foot_1.remove();
  scroll.remove();
  header.remove();
  
  setTimeout(() => {
    for (let index = 0; index < 9; index++) {
      const img = document.querySelectorAll(".right img")[index];
      arr.push(img);
      
    }
    // console.log(arr[0]);
    const product = document.getElementById("Product");
    const Shop_btn = document.getElementById("Shop_btn");
    Shop_btn.classList.add("btn-dark");
    // Shop_btn.classList.add("collor");
    const nav_1 = document.getElementById("nav-1");
    let clone2 = product.content.cloneNode(true);
    const strong = document.querySelectorAll("strong");
    // console.log(heading);
    // console.dir(strong[0].innerText)
    
    
    
    function changeImage(path, ImgText) {
      const home_btn = document.getElementById("home_btn");
      // home_btn.classList.add("btn-outline-dark")
      const product_btn = document.getElementById("product_btn");
      product_btn.classList.add("btn-dark");
      Shop_btn.classList.remove("btn-dark")
      let heading = document.querySelector("#head");
      const product_img = document.querySelector(".product img")
      product_img.src = arr[path].src;
      heading.innerText = ImgText
    }

    arr[0].addEventListener("click", () => {
      nav_1.replaceWith(clone2);
      changeImage(0, strong[0].innerText);
    })
    arr[1].addEventListener("click", () => {
      nav_1.replaceWith(clone2);
      changeImage(1, strong[1].innerText);
    })
    arr[2].addEventListener("click", () => {
      nav_1.replaceWith(clone2);
      changeImage(2, strong[2].innerText);
    })
    arr[3].addEventListener("click", () => {
      nav_1.replaceWith(clone2);
      changeImage(3, strong[3].innerText);
    })
    arr[4].addEventListener("click", () => {
      nav_1.replaceWith(clone2);
      changeImage(4, strong[4].innerText);
    })
    arr[5].addEventListener("click", () => {
      nav_1.replaceWith(clone2);
      changeImage(5, strong[5].innerText);
    })
    arr[6].addEventListener("click", () => {
      nav_1.replaceWith(clone2);
      changeImage(6, strong[6].innerText);
    })
    arr[7].addEventListener("click", () => {
      nav_1.replaceWith(clone2);
      changeImage(7, strong[7].innerText);
    })
    arr[8].addEventListener("click", () => {
      nav_1.replaceWith(clone2);
      changeImage(8, strong[8].innerText);
    })
    home_btn.addEventListener("click", () => {
      document.body.innerHTML = originalPage;
      window.location.reload(); // Reload to re-bind all events and restore state
    });
  }, 0)
})
// import './style.css'
const track = document.getElementById("carouselTrack");
const cards = document.querySelectorAll(".card");
const totalCards = cards.length;
let currentIndex = 0;

function updateCarousel() {
  const offset = currentIndex * cards[0].offsetWidth;
  track.style.transform = `translateX(-${offset}px)`;
}

function moveLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

function moveRight() {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    updateCarousel();
  }
}
window.addEventListener("resize", updateCarousel);

