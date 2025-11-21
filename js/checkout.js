// Checkout functionality
let cart = JSON.parse(localStorage.getItem('herbalCart')) || [];

// DOM Elements
const checkoutItems = document.getElementById('checkoutItems');
const checkoutSubtotal = document.getElementById('checkoutSubtotal');
const shippingCost = document.getElementById('shippingCost');
const taxAmount = document.getElementById('taxAmount');
const checkoutTotal = document.getElementById('checkoutTotal');
const finalTotal = document.getElementById('finalTotal');
const checkoutForm = document.getElementById('checkoutForm');
const cardDetails = document.getElementById('cardDetails');

// Initialize checkout
function initCheckout() {
    renderCheckoutItems();
    updateCheckoutTotals();
    attachCheckoutEventListeners();
}

// Render checkout items
function renderCheckoutItems() {
    if (!checkoutItems) return;
    
    checkoutItems.innerHTML = '';
    
    if (cart.length === 0) {
        checkoutItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <h4>Your cart is empty</h4>
                <p>Add some products to continue</p>
                <button class="btn btn-primary" onclick="location.href='shop.html'">Continue Shopping</button>
            </div>
        `;
        return;
    }
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'order-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="order-item-details">
                <div class="order-item-name">${item.name}</div>
                <div class="order-item-price">R${item.price.toFixed(2)}</div>
                <div class="order-item-quantity">Quantity: ${item.quantity}</div>
            </div>
        `;
        checkoutItems.appendChild(itemElement);
    });
}

// Update checkout totals
function updateCheckoutTotals() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 500 ? 0 : 50; // Free shipping over R500
    const tax = subtotal * 0.15; // 15% tax
    const total = subtotal + shipping + tax;
    
    if (checkoutSubtotal) checkoutSubtotal.textContent = `R${subtotal.toFixed(2)}`;
    if (shippingCost) shippingCost.textContent = `R${shipping.toFixed(2)}`;
    if (taxAmount) taxAmount.textContent = `R${tax.toFixed(2)}`;
    if (checkoutTotal) checkoutTotal.textContent = `R${total.toFixed(2)}`;
    if (finalTotal) finalTotal.textContent = total.toFixed(2);
}

// Attach checkout event listeners
function attachCheckoutEventListeners() {
    // Shipping method changes
    document.querySelectorAll('input[name="shipping"]').forEach(input => {
        input.addEventListener('change', updateShipping);
    });
    
    // Payment method changes
    document.querySelectorAll('input[name="payment"]').forEach(input => {
        input.addEventListener('change', handlePaymentChange);
    });
    
    // Form submission
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    }
}

// Update shipping costs
function updateShipping() {
    const selectedShipping = document.querySelector('input[name="shipping"]:checked').value;
    let shipping = 0;
    
    if (selectedShipping === 'standard') {
        shipping = 50;
    } else if (selectedShipping === 'express') {
        shipping = 100;
    }
    
    // Apply free shipping over R500
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    if (subtotal > 500) {
        shipping = 0;
    }
    
    if (shippingCost) shippingCost.textContent = `R${shipping.toFixed(2)}`;
    updateFinalTotal();
}

// Handle payment method change
function handlePaymentChange() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
    
    if (selectedPayment === 'card') {
        cardDetails.style.display = 'block';
    } else {
        cardDetails.style.display = 'none';
    }
}

// Update final total
function updateFinalTotal() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shippingText = shippingCost ? shippingCost.textContent : 'R0.00';
    const shipping = parseFloat(shippingText.replace('R', ''));
    const tax = subtotal * 0.15;
    const total = subtotal + shipping + tax;
    
    if (checkoutTotal) checkoutTotal.textContent = `R${total.toFixed(2)}`;
    if (finalTotal) finalTotal.textContent = total.toFixed(2);
}

// Handle checkout submission
function handleCheckoutSubmit(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        alert('Your cart is empty. Please add some products before checking out.');
        return;
    }
    
    // Validate form
    if (!validateCheckoutForm()) {
        return;
    }
    
    // Simulate payment processing
    processPayment();
}

// Validate checkout form
function validateCheckoutForm() {
    const email = document.getElementById('email').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const postalCode = document.getElementById('postalCode').value;
    const country = document.getElementById('country').value;
    const phone = document.getElementById('phone').value;
    
    // Basic validation
    if (!email || !firstName || !lastName || !address || !city || !postalCode || !country || !phone) {
        alert('Please fill in all required fields.');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    // Phone validation (basic)
    if (phone.length < 10) {
        alert('Please enter a valid phone number.');
        return false;
    }
    
    // Card validation if card payment selected
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('cardNumber').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;
        const cardName = document.getElementById('cardName').value;
        
        if (!cardNumber || !expiry || !cvv || !cardName) {
            alert('Please fill in all card details.');
            return false;
        }
        
        // Basic card number validation
        if (cardNumber.replace(/\s/g, '').length !== 16) {
            alert('Please enter a valid 16-digit card number.');
            return false;
        }
        
        // Basic expiry validation
        const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
        if (!expiryRegex.test(expiry)) {
            alert('Please enter a valid expiry date (MM/YY).');
            return false;
        }
        
        // Basic CVV validation
        if (cvv.length !== 3) {
            alert('Please enter a valid 3-digit CVV.');
            return false;
        }
    }
    
    return true;
}

// Process payment
function processPayment() {
    // Show loading state
    const submitBtn = document.querySelector('.checkout-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Create order object
        const order = {
            id: generateOrderId(),
            items: [...cart],
            customer: {
                email: document.getElementById('email').value,
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                postalCode: document.getElementById('postalCode').value,
                country: document.getElementById('country').value,
                phone: document.getElementById('phone').value
            },
            shipping: document.querySelector('input[name="shipping"]:checked').value,
            payment: document.querySelector('input[name="payment"]:checked').value,
            subtotal: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
            shippingCost: parseFloat(shippingCost.textContent.replace('R', '')),
            tax: cart.reduce((total, item) => total + (item.price * item.quantity), 0) * 0.15,
            total: parseFloat(checkoutTotal.textContent.replace('R', '')),
            date: new Date().toISOString()
        };
        
        // Save order to localStorage
        const orders = JSON.parse(localStorage.getItem('herbalOrders')) || [];
        orders.push(order);
        localStorage.setItem('herbalOrders', JSON.stringify(orders));
        
        // Clear cart
        cart = [];
        localStorage.setItem('herbalCart', JSON.stringify(cart));
        
        // Show success message
        showCheckoutSuccess(order);
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
    }, 2000);
}

// Generate order ID
function generateOrderId() {
    return 'GDH' + Date.now() + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Show checkout success
function showCheckoutSuccess(order) {
    const successHTML = `
        <div class="checkout-success">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2>Order Confirmed!</h2>
            <p>Thank you for your purchase. Your order has been successfully processed.</p>
            
            <div class="order-details">
                <div class="detail-row">
                    <span>Order Number:</span>
                    <strong>${order.id}</strong>
                </div>
                <div class="detail-row">
                    <span>Total Amount:</span>
                    <strong>R${order.total.toFixed(2)}</strong>
                </div>
                <div class="detail-row">
                    <span>Shipping to:</span>
                    <strong>${order.customer.firstName} ${order.customer.lastName}</strong>
                </div>
            </div>
            
            <div class="success-actions">
                <button class="btn btn-primary" onclick="location.href='index.html'">
                    <i class="fas fa-home"></i>
                    Continue Shopping
                </button>
                <button class="btn btn-outline" onclick="printOrder('${order.id}')">
                    <i class="fas fa-print"></i>
                    Print Receipt
                </button>
            </div>
        </div>
    `;
    
    // Replace checkout form with success message
    checkoutForm.innerHTML = successHTML;
    
    // Update progress steps
    document.querySelectorAll('.progress-steps .step').forEach((step, index) => {
        if (index < 3) {
            step.classList.add('active');
        }
    });
}

// Print order receipt
function printOrder(orderId) {
    const orders = JSON.parse(localStorage.getItem('herbalOrders')) || [];
    const order = orders.find(o => o.id === orderId);
    
    if (!order) return;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Order Receipt - ${order.id}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .header { text-align: center; margin-bottom: 30px; }
                .order-info { margin-bottom: 20px; }
                .items-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                .items-table th, .items-table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                .items-table th { background-color: #f5f5f5; }
                .totals { margin-top: 20px; text-align: right; }
                .footer { margin-top: 30px; text-align: center; color: #666; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>The Go Down Herbs</h1>
                <h2>Order Receipt</h2>
            </div>
            
            <div class="order-info">
                <p><strong>Order Number:</strong> ${order.id}</p>
                <p><strong>Date:</strong> ${new Date(order.date).toLocaleDateString()}</p>
                <p><strong>Customer:</strong> ${order.customer.firstName} ${order.customer.lastName}</p>
                <p><strong>Email:</strong> ${order.customer.email}</p>
                <p><strong>Shipping Address:</strong> ${order.customer.address}, ${order.customer.city}, ${order.customer.postalCode}</p>
            </div>
            
            <table class="items-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${order.items.map(item => `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.quantity}</td>
                            <td>R${item.price.toFixed(2)}</td>
                            <td>R${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            
            <div class="totals">
                <p><strong>Subtotal:</strong> R${order.subtotal.toFixed(2)}</p>
                <p><strong>Shipping:</strong> R${order.shippingCost.toFixed(2)}</p>
                <p><strong>Tax:</strong> R${order.tax.toFixed(2)}</p>
                <p><strong>Total:</strong> R${order.total.toFixed(2)}</p>
            </div>
            
            <div class="footer">
                <p>Thank you for your purchase!</p>
                <p>The Go Down Herbs - Nurturing wellness naturally</p>
            </div>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
}

// Initialize checkout when DOM is loaded
document.addEventListener('DOMContentLoaded', initCheckout);