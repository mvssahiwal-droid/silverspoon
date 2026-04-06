// Sticky Navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Mobile Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = mobileBtn.querySelectorAll('.hamburger');
    if(navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const spans = mobileBtn.querySelectorAll('.hamburger');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
}));

// Add subtle reveal animations on scroll
const revealElements = document.querySelectorAll('.service-card, .menu-teaser-card, .about-text, .about-image-wrapper');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
};

const revealObserver = new IntersectionObserver(revealCallback, {
    root: null,
    threshold: 0.15
});

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    revealObserver.observe(el);
});


/* --- CART & WHATSAPP ORDERING LOGIC --- */

let cart = JSON.parse(localStorage.getItem('restaurant_cart')) || [];

// DOM Elements
const cartBtn = document.getElementById('cart-float-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const whatsappOrderBtn = document.getElementById('whatsapp-order-btn');

// 1. Inject "Add to Cart" buttons into all menu items
function injectAddButtons() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const id = item.querySelector('.item-id').innerText.replace('.', '').trim();
        const name = item.querySelector('.item-name').innerText.trim();
        const priceStr = item.querySelector('.item-price').innerText.replace('€', '').replace(',', '.').trim();
        const price = parseFloat(priceStr);

        const addBtn = document.createElement('button');
        addBtn.className = 'add-to-cart-btn';
        addBtn.innerHTML = '<span class="plus-icon">+</span> Add';
        addBtn.onclick = () => addToCart(id, name, price);
        
        item.appendChild(addBtn);
    });
}

// 2. Add to Cart
function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
    openCart();
    
    // Bounce effect for the cart button
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => cartBtn.style.transform = 'scale(1)', 200);
}

// 3. Update Cart UI & Storage
function updateCart() {
    localStorage.setItem('restaurant_cart', JSON.stringify(cart));
    
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;
    
    // Render list
    renderCartItems();
    
    // Update total price
    const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalPrice.innerText = `€ ${totalSum.toFixed(2).replace('.', ',')}`;
}

// 4. Render Cart Items
function renderCartItems() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
        return;
    }

    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>€ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemEl);
    });
}

// 5. Change Quantity
window.changeQty = function(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
        updateCart();
    }
};

// 6. WhatsApp Order
whatsappOrderBtn.onclick = function() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Get customer details
    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const address = document.getElementById('customer-address').value.trim();

    if (!name || !phone) {
        alert("Please provide your Name and Phone Number to complete the order.");
        return;
    }

    const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Minimum Order Check for Delivery
    if (totalSum < 30) {
        const confirmResult = confirm(`Der Mindestbestellwert für die Zustellung beträgt € 30,-. Ihr aktueller Betrag ist € ${totalSum.toFixed(2).replace('.', ',')}.\n\nMöchten Sie trotzdem fortfahren (nur zur Abholung)?`);
        if (!confirmResult) return;
    }

    let message = "*Silver Spoon Order* 🍽️\n";
    message += "--------------------------\n";
    
    cart.forEach(item => {
        message += `${item.quantity}x ${item.name} - € ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });
    
    message += "--------------------------\n";
    message += `*Total: € ${totalSum.toFixed(2).replace('.', ',')}*\n\n`;
    
    message += "*Customer Details:*\n";
    message += `👤 Name: ${name}\n`;
    message += `📱 Phone: ${phone}\n`;
    if (address) {
        message += `📍 Address: ${address}\n`;
    } else {
        message += `📍 Pickup (Abholung)\n`;
    }
    
    message += "\nPlease confirm my order. Thank you!";

    const waPhoneNumber = "436769831675";
    const whatsappUrl = `https://wa.me/${waPhoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
};

// UI Toggles
function openCart() { cartSidebar.classList.add('active'); }
function closeCart() { cartSidebar.classList.remove('active'); }

cartBtn.onclick = openCart;
closeCartBtn.onclick = closeCart;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    injectAddButtons();
    updateCart();
});
