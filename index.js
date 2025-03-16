const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let products = [
  { id: 1, name: "Product A", price: 29.99 },
  { id: 2, name: "Product B", price: 19.99 },
  { id: 3, name: "Product C", price: 39.99 },
  { id: 4, name: "Product D", price: 9.99 },
  { id: 5, name: "Product E", price: 24.99 },
  { id: 6, name: "Product F", price: 14.99 },
];

let cart = [];

function renderProducts() {
  productList.innerHTML = "";
  let searchTerm = searchInput.value.toLowerCase();
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button data-id="${product.id}">Add to Cart</button>
    `;
    productCard
      .querySelector("button")
      .addEventListener("click", () => addToCart(product.id));
    productList.appendChild(productCard);
  });
}

function addToCart(productId) {
  let product = products.find((p) => p.id === productId);
  cart.push(product);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

searchInput.addEventListener("input", renderProducts);

renderProducts();
renderCart();
