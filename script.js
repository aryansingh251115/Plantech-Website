const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// Function to add a product to the cart
function addToCart() {
    // Retrieve the current cart from localStorage (you can use server-side storage as well)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        // If the product is already in the cart, increase the quantity
        existingProduct.quantity += 1;
    } else {
        // If it's not in the cart, add it with a quantity of 1
        product.quantity = 1;
        cart.push(product);
    }

    // Update the cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Optionally, display a message to the user
    alert("Product added to cart!");
}

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

/* Bottom to Top button */

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})