// Enhanced cart functionality (compatibility with shop.js)

// Shipping rates by courier
const SHIPPING_RATES = {
    bolt: { name: 'Bolt Courier', price: 75, description: 'Express: 1-2 Business Days' },
    postnet: { name: 'Postnet', price: 60, description: 'Standard: 3-5 Business Days' },
    fastway: { name: 'Fastway Couriers', price: 55, description: 'Economy: 2-4 Business Days' },
    'courier-guy': { name: 'The Courier Guy', price: 85, description: 'Premium: 1-3 Business Days' }
};

// Read cart from localStorage: prefer 'herbalCart' (shop.js) but fallback to 'goDownHerbsCart'
function getCart() {
    const raw = localStorage.getItem('herbalCart') || localStorage.getItem('goDownHerbsCart');
    return raw ? JSON.parse(raw) : [];
}

function saveCart(cart) {
    // Write both keys for compatibility
    localStorage.setItem('herbalCart', JSON.stringify(cart));
    localStorage.setItem('goDownHerbsCart', JSON.stringify(cart));

    // Update header/cart counters
    updateCartCount();

    // If the cart page rendering function exists, call it to refresh UI immediately.
    if (typeof updateCartDisplay === 'function') {
        updateCartDisplay();
    }
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // update elements by id or by class (support both patterns in the codebase)
    const cartCountId = document.getElementById('cartCount');
    const cartCountClass = document.querySelector('.cart-count');
    const iconBadge = document.querySelector('.icon-badge');

    if (cartCountId) {
        cartCountId.textContent = totalItems;
        cartCountId.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    if (cartCountClass) {
        cartCountClass.textContent = totalItems;
        cartCountClass.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    if (iconBadge) {
        iconBadge.textContent = totalItems;
        iconBadge.style.display = totalItems > 0 ? 'flex' : 'none';
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

function removeFromCartByIndex(index) {
    const cart = getCart();
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        saveCart(cart);
    }
}

function updateCartQuantityByIndex(index, quantity) {
    if (quantity < 1) {
        removeFromCartByIndex(index);
        return;
    }

    const cart = getCart();
    if (index >= 0 && index < cart.length) {
        cart[index].quantity = quantity;
        saveCart(cart);
    }
}

function removeFromCart(productId) {
    const cart = getCart();
    const index = cart.findIndex(item => item.id === productId);
    if (index >= 0) {
        removeFromCartByIndex(index);
    }
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
    localStorage.removeItem('herbalCart');
    updateCartCount();
    if (window.updateCartDisplay) {
        updateCartDisplay();
    }
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => {
        // price might be either a number or a string like "R450" depending on source
        let price = item.price;
        if (typeof price === 'string') {
            price = parseFloat(price.replace('R', '').replace(',', '')) || 0;
        }
        return total + (price * item.quantity);
    }, 0);
}

function getSelectedShipping() {
    const select = document.getElementById('shippingSelect');
    if (!select || !select.value) {
        return null;
    }
    
    const shippingType = select.value;
    const rate = SHIPPING_RATES[shippingType];
    
    if (rate) {
        return {
            type: shippingType,
            name: rate.name,
            price: rate.price,
            description: rate.description
        };
    }
    
    return null;
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
    getCartTotal,
    removeFromCartByIndex,
    updateCartQuantityByIndex,
    getSelectedShipping,
    SHIPPING_RATES
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
    
    // Render cart items with data-index for event delegation
    if (cartItems) {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item" data-product-id="${item.id}" data-item-index="${index}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3 class="cart-item-name">${item.name}</h3>
                    <span class="cart-item-category">${item.category || ''}</span>
                    <div class="cart-item-price">${typeof item.price === 'number' ? 'R' + item.price.toFixed(2) : item.price}</div>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease-btn" data-action="decrease" data-index="${index}">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn increase-btn" data-action="increase" data-index="${index}">+</button>
                    </div>
                    <button class="remove-btn" data-action="remove" data-index="${index}">
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
        
        // Attach event delegation to cart items container
        attachCartItemListeners();
    }
    
    // Update order summary
    const subtotal = getCartTotal();
    updateOrderSummary(subtotal);
    
    // Render recommended products
    renderRecommendedProducts();
}

function attachCartItemListeners() {
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return;

    // Remove any existing listeners (re-attach when cart updates)
    cartItems.removeEventListener('click', handleCartItemClick);
    cartItems.addEventListener('click', handleCartItemClick);
}

function handleCartItemClick(e) {
    const button = e.target.closest('button[data-action]');
    if (!button) return;

    e.preventDefault();
    e.stopPropagation();

    const action = button.dataset.action;
    const index = parseInt(button.dataset.index, 10);
    const cart = getCart();

    if (isNaN(index) || index < 0 || index >= cart.length) return;

    const item = cart[index];
    const currentQty = item.quantity || 1;

    if (action === 'decrease') {
        updateCartQuantityByIndex(index, currentQty - 1);
    } else if (action === 'increase') {
        updateCartQuantityByIndex(index, currentQty + 1);
    } else if (action === 'remove') {
        removeFromCartByIndex(index);
    }
}

function updateOrderSummary(subtotal) {
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const totalEl = document.getElementById('total');
    
    // Update subtotal
    if (subtotalEl) {
        subtotalEl.textContent = `R${subtotal.toFixed(2)}`;
    }
    
    // Get selected shipping
    const shipping = getSelectedShipping();
    
    if (shipping) {
        if (shippingEl) {
            shippingEl.textContent = `R${shipping.price.toFixed(2)}`;
        }
        
        // Calculate total (subtotal + shipping, NO tax)
        const total = subtotal + shipping.price;
        
        if (totalEl) {
            totalEl.textContent = `R${total.toFixed(2)}`;
        }
    } else {
        if (shippingEl) {
            shippingEl.textContent = 'Select Option';
        }
        
        if (totalEl) {
            totalEl.textContent = `R${subtotal.toFixed(2)}`;
        }
    }
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
            image: 'images/product/Product1.jpg',
            description: 'Complete herbal wellness package'
        },
        {
            id: 12,
            name: 'Energy Boost Pack',
            price: 'R320',
            image: 'images/product/silentHerb.jpg',
            description: 'Natural energy and vitality'
        },
        {
            id: 13,
            name: 'Immunity Support',
            price: 'R280',
            image: 'images/product/mpesu.jpg',
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
    
    // Attach listeners to cart items
    attachCartItemListeners();
    
    // Setup shipping selector
    const shippingSelect = document.getElementById('shippingSelect');
    if (shippingSelect) {
        shippingSelect.addEventListener('change', handleShippingChange);
    }
}

function handleShippingChange(e) {
    const select = e.target;
    const shippingType = select.value;
    const shippingInfo = document.getElementById('shippingInfo');
    
    if (shippingType && SHIPPING_RATES[shippingType]) {
        const rate = SHIPPING_RATES[shippingType];
        
        // Show shipping info
        if (shippingInfo) {
            shippingInfo.innerHTML = `
                <div class="shipping-details">
                    <i class="fas fa-info-circle"></i>
                    <span>${rate.description}</span>
                </div>
            `;
            shippingInfo.classList.add('active');
        }
    } else {
        if (shippingInfo) {
            shippingInfo.innerHTML = '';
            shippingInfo.classList.remove('active');
        }
    }
    
    // Update totals
    const subtotal = getCartTotal();
    updateOrderSummary(subtotal);
}

function handleCheckout() {
    const cart = getCart();
    const shipping = getSelectedShipping();
    
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    if (!shipping) {
        alert('Please select a delivery network!');
        return;
    }
    
    // In a real application, this would redirect to a checkout page
    alert(`Proceeding to checkout...\nDelivery: ${shipping.name}\nShipping Cost: R${shipping.price.toFixed(2)}`);
    
    // Clear cart after successful checkout (optional)
    // clearCart();
}