// Enhanced cart functionality
function getCart() {
    const cart = localStorage.getItem('goDownHerbsCart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('goDownHerbsCart', JSON.stringify(cart));
    updateCartCount();
    if (window.updateCartDisplay) {
        updateCartDisplay();
    }
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function addToCart(product, quantity = 1) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    saveCart(cart);
    return true;
}

function removeFromCart(productId) {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    saveCart(updatedCart);
}

function updateCartQuantity(productId, quantity) {
    if (quantity < 1) {
        removeFromCart(productId);
        return;
    }

    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity = quantity;
        saveCart(cart);
    }
}

function clearCart() {
    localStorage.removeItem('goDownHerbsCart');
    updateCartCount();
    if (window.updateCartDisplay) {
        updateCartDisplay();
    }
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace('R', '').replace(',', ''));
        return total + (price * item.quantity);
    }, 0);
}

// Export functions for use in other files
window.cartFunctions = {
    getCart,
    saveCart,
    updateCartCount,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    getCartTotal
};

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Initialize cart page if we're on the cart page
    if (document.querySelector('.cart-page')) {
        initCartPage();
    }
});

// Cart page functionality
function initCartPage() {
    updateCartDisplay();
    setupCartEventListeners();
}

function updateCartDisplay() {
    const cart = getCart();
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const recommendedSection = document.getElementById('recommendedSection');
    
    if (cart.length === 0) {
        if (cartItems) cartItems.innerHTML = '';
        if (emptyCart) emptyCart.classList.add('active');
        if (recommendedSection) recommendedSection.classList.remove('active');
        updateOrderSummary(0);
        return;
    }
    
    if (emptyCart) emptyCart.classList.remove('active');
    if (recommendedSection) recommendedSection.classList.add('active');
    
    // Render cart items
    if (cartItems) {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" data-product-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3 class="cart-item-name">${item.name}</h3>
                    <span class="cart-item-category">${item.category}</span>
                    <div class="cart-item-price">${item.price}</div>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease-btn" onclick="cartFunctions.updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn increase-btn" onclick="cartFunctions.updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-btn" onclick="cartFunctions.removeFromCart(${item.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        </svg>
                        Remove
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    // Update order summary
    const subtotal = getCartTotal();
    updateOrderSummary(subtotal);
    
    // Render recommended products
    renderRecommendedProducts();
}

function updateOrderSummary(subtotal) {
    const shipping = 50; // R50 flat rate
    const tax = subtotal * 0.15; // 15% VAT
    const total = subtotal + shipping + tax;
    
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');
    
    if (subtotalEl) subtotalEl.textContent = `R${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = `R${shipping.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `R${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `R${total.toFixed(2)}`;
}

function renderRecommendedProducts() {
    const recommendedProducts = document.getElementById('recommendedProducts');
    if (!recommendedProducts) return;
    
    // Sample recommended products (in a real app, this would be based on cart contents)
    const recommendations = [
        {
            id: 11,
            name: 'Herbal Wellness Kit',
            price: 'R450',
            image: 'images/Product1.jpg',
            description: 'Complete herbal wellness package'
        },
        {
            id: 12,
            name: 'Energy Boost Pack',
            price: 'R320',
            image: 'images/silentHerb.jpg',
            description: 'Natural energy and vitality'
        },
        {
            id: 13,
            name: 'Immunity Support',
            price: 'R280',
            image: 'images/mpesu.jpg',
            description: 'Boost your immune system naturally'
        }
    ];
    
    recommendedProducts.innerHTML = recommendations.map(product => `
        <div class="product-card" onclick="window.location.href='shop.html'">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">${product.price}</div>
                </div>
            </div>
        </div>
    `).join('');
}

function setupCartEventListeners() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }
}

function handleCheckout() {
    const cart = getCart();
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // In a real application, this would redirect to a checkout page
    // For now, we'll simulate a checkout process
    alert('Proceeding to checkout... This would redirect to a secure payment gateway in a real application.');
    
    // Clear cart after successful checkout
    // clearCart();
}