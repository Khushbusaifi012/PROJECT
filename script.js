// Simulated product data
const products = [
    { id: 1, name: "Laptop", price: 1000, imageUrl: "https://www.brilliantnews.com/wp-content/uploads/2016/02/laptop.jpg" },
    { id: 2, name: "Headphones", price: 200, imageUrl: "https://i5.walmartimages.com/asr/183858fb-2bb5-4eb8-b26d-0abebdb1da13.b7f604429140c19276c2b2dc27a75ba9.jpeg" },
    { id: 3, name: "Smartphone", price: 800, imageUrl: "https://tse2.mm.bing.net/th?id=OIP.6FcXFZPjqJaGtjCOxMXOBwHaHa&pid=Api&P=0&h=180" },
    { id: 4, name: "Camera", price: 500, imageUrl: "https://tse2.mm.bing.net/th?id=OIP.YTqPQMspWKbViExYSOA0-AHaHa&pid=Api&P=0&h=180" }
];

// Initialize cart
let cart = [];

// Function to render products
function renderProducts() {
    const productContainer = document.getElementById("products");
    productContainer.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productContainer.appendChild(productCard);
    });
}

// Function to add product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);

    if (product) {
        cart.push(product);
        renderCart();
    }
}

// Function to render the cart
function renderCart() {
    const cartContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const cartItem = document.createElement("li");
        cartItem.innerHTML = `
            ${item.name} - $${item.price}
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    totalPriceElement.textContent = `Total: $${total}`;
}

// Function to remove product from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// Function to handle checkout
function handleCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert(`Thank you for your purchase! Total: $${cart.reduce((sum, item) => sum + item.price, 0)}`);
    cart = []; // Clear the cart
    renderCart();
}

// Add event listener for checkout button
document.getElementById("checkout").addEventListener("click", handleCheckout);

// Initial rendering
renderProducts();
renderCart();