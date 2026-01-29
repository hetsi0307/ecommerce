let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart!");
}

function updateCartCount() {
  let count = cart.length;
  let badge = document.getElementById("cart-count");
  if (badge) badge.innerText = count;
}

function displayCart() {
  let items = document.getElementById("cart-items");
  let totalBox = document.getElementById("total");
  if (!items) return;

  items.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    items.innerHTML = "<p>Your cart is empty</p>";
    totalBox.innerText = "";
    return;
  }

  cart.forEach(item => {
    items.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    total += item.price;
  });

  totalBox.innerText = "Total: ₹" + total;
}

function clearCart() {
  localStorage.removeItem("cart");
  cart = [];
  displayCart();
  updateCartCount();
}

function searchProduct(text) {
  let products = document.querySelectorAll(".product");
  products.forEach(p => {
    p.style.display = p.innerText.toLowerCase().includes(text.toLowerCase())
      ? "block"
      : "none";
  });
}
