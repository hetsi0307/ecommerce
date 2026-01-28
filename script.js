let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
}

function displayCart() {
  let cartItems = document.getElementById("cart-items");
  let totalElement = document.getElementById("total");

  if (!cartItems || !totalElement) return;

  cartItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty</p>";
    totalElement.innerText = "";
    return;
  }

  cart.forEach(item => {
    cartItems.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    total += item.price;
  });

  totalElement.innerText = "Total: ₹" + total;
}
