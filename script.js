/* ==========================================
   Shopping Cart Project
   HTML + CSS + JavaScript

   This file contains all functionality
==========================================*/


// ================================
// Product Data
// Normally comes from database/API
// ================================

// Product Data
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 899,
        image: "images/laptop.jpg"
    },
    {
        id: 2,
        name: "Phone",
        price: 599,
        image: "images/phone.jpg"
    },
    {
        id: 3,
        name: "Headphones",
        price: 99,
        image: "images/headphones.jpg"
    },
    {
        id: 4,
        name: "Keyboard",
        price: 49,
        image: "images/keyboard.jpg"
    }
];


// ================================
// Cart Array
// Stores added products
// ================================

let cart = [];


// ================================
// DOM Elements
// ================================

const productContainer = document.getElementById("products");

const cartItems = document.getElementById("cartItems");

const total = document.getElementById("total");

const clearCartBtn = document.getElementById("clearCart");


// =======================================
// Display Products
// =======================================

function displayProducts() {

    products.forEach(product => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <!-- Product Image -->
            <img src="${product.image}"
                 alt="${product.name}"
                 class="product-image">

            <h3>${product.name}</h3>

            <p>$${product.price}</p>

            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>
        `;

        productContainer.appendChild(card);

    });

}


// =======================================
// Add Product to Cart
// =======================================

function addToCart(id) {

    // Find selected product
    const product = products.find(item => item.id === id);

    // Push product into cart
    cart.push(product);

    // Refresh UI
    updateCart();

}


// =======================================
// Remove Product
// =======================================

function removeItem(index) {

    // Remove item using index
    cart.splice(index, 1);

    // Refresh UI
    updateCart();

}


// =======================================
// Update Cart UI
// =======================================

function updateCart() {

    // Empty previous list
    cartItems.innerHTML = "";

    // Variable for total amount
    let totalPrice = 0;

    // Loop through cart
    cart.forEach((item, index) => {

        // Add price
        totalPrice += item.price;

        // Create list item
        const li = document.createElement("li");

        li.innerHTML = `
    <div class="cart-item">

        <img src="${item.image}"
             alt="${item.name}"
             class="cart-image">

        <div>

            <h4>${item.name}</h4>

            <p>$${item.price}</p>

        </div>

    </div>

    <button
        class="removeBtn"
        onclick="removeItem(${index})">
        Remove
    </button>
`;

        cartItems.appendChild(li);

    });

    // Display total
    total.textContent = totalPrice;

}


// =======================================
// Clear Entire Cart
// =======================================

clearCartBtn.addEventListener("click", () => {

    // Empty array
    cart = [];

    // Update UI
    updateCart();

});


// =======================================
// Initial Function Call
// =======================================

displayProducts();