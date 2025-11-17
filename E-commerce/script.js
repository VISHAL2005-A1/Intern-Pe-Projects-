
  //  SALE COUNTDOWN TIMER

function startSaleTimer() {
  const countdown = document.getElementById("countdown");

  if (!countdown) return;

  let time = 3600; // 1 hour

  setInterval(() => {
    let hrs = Math.floor(time / 3600);
    let mins = Math.floor((time % 3600) / 60);
    let secs = time % 60;

    countdown.textContent =
      `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

    time--;

    if (time < 0) time = 0;
  }, 1000);
}

startSaleTimer();


  //  QUANTITY BUTTON

const qtyDisplay = document.getElementById("qty");
const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const shop=document.querySelector(".shop-btn")

if (qtyDisplay && minusBtn && plusBtn) {
  let qty = 1;

  plusBtn.addEventListener("click", () => {
    qty++;
    qtyDisplay.textContent = qty;
  });

  minusBtn.addEventListener("click", () => {
    if (qty > 1) qty--;
    qtyDisplay.textContent = qty;
  });
}

/* ---------------------------
   ADD TO CART BUTTON
---------------------------- */
const addCartBtn = document.querySelector(".add-cart");

if (addCartBtn) {
  addCartBtn.addEventListener("click", () => {
    alert("Item added to cart!");
  });
}
// Make openProduct available globally for inline onclick
window.openProduct = function(name, price, imagePath) {
  // save data to localStorage
  localStorage.setItem("productName", name);
  localStorage.setItem("productPrice", price);
  localStorage.setItem("productImage", imagePath);

  // go to product page
  window.location.href = "product.html";
};

// When on product.html, load stored product info
(function loadProductPage() {
  if (!window.location.pathname.includes("product.html")) return;

  const name = localStorage.getItem("productName") ;
  const price = localStorage.getItem("productPrice") || "0";
  const image = localStorage.getItem("productImage") || "images/placeholder.png";

  const elName = document.getElementById("product-name");
  const elPrice = document.getElementById("product-price");
  const elImage = document.getElementById("product-image");

  if (elName) elName.textContent = name;
  if (elPrice) elPrice.textContent = "$" + price;
  if (elImage) elImage.src = image;
})();
//customer reviews

// Scroll Reviews Left
function scrollLeft() {
    document.getElementById("reviewBox").scrollBy({
        left: -300,
        behavior: "smooth"
    });
}

// Scroll Reviews Right
function scrollRight() {
    document.getElementById("reviewBox").scrollBy({
        left: 300,
        behavior: "smooth"
    });
}
