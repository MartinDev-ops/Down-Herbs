// Products data
const products = [
    {
        id: 1,
        name: 'Go Down Herb (Ndaa)',
        price: 'R150',
        image: 'images/product/godown.jpg',
        description: 'Premium herbal mixture drink for wellness. Our signature product made from traditional South African herbs.',
        category: 'Beverages',
        quantity: 50
    },
    {
        id: 2,
        name: 'Silent Herb (Ndaa)',
        price: 'R250',
        image: 'images/product/silentHerb.jpg',
        description: 'Effective herbal beverage for health. Special formula with powerful natural properties.',
        category: 'Beverages',
        quantity: 30
    },
    {
        id: 3,
        name: 'Go Down Mpesu',
        price: 'R50',
        image: 'images/product/mpesu.jpg',
        description: 'Traditional cleansing herb mixture for natural body purification and wellness.',
        category: 'Beverages',
        quantity: 40
    },
    {
        id: 4,
        name: 'Green Shirt',
        price: 'R200',
        image: 'images/merch/green-shirt.png',
        description: 'Comfortable green shirt with Go Down Herbs logo. 100% cotton.',
        category: 'Merchandise',
        quantity: 20
    },
    {
        id: 5,
        name: 'Black Shirt',
        price: 'R200',
        image: 'images/merch/black-shirt.png',
        description: 'Stylish black shirt with Go Down Herbs logo. Premium quality fabric.',
        category: 'Merchandise',
        quantity: 25
    },
    {
        id: 6,
        name: 'White Shirt',
        price: 'R200',
        image: 'images/merch/white-shirt.png',
        description: 'Classic white shirt with Go Down Herbs logo. Perfect for everyday wear.',
        category: 'Merchandise',
        quantity: 15
    },
    {
        id: 7,
        name: 'Cooler Cap',
        price: 'R150',
        image: 'images/merch/cap-cooler.png',
        description: 'Cooler cap for outdoor activities. Features our herbal-inspired design.',
        category: 'Merchandise',
        quantity: 35
    },
    {
        id: 8,
        name: 'Herbal Oil',
        price: 'R300',
        image: 'images/products/oil.png',
        description: 'Pure herbal oil for various uses. Extracted from natural South African plants.',
        category: 'Health Products',
        quantity: 10
    },
    {
        id: 9,
        name: 'Natural Cleaner',
        price: 'R120',
        image: 'images/product/cleaner.png',
        description: 'Eco-friendly natural cleaner made from herbal extracts. Safe for home use.',
        category: 'Health Products',
        quantity: 60
    },
    {
        id: 10,
        name: 'Blue Refreshment',
        price: 'R180',
        image: 'images/products/blue-refreshment.png',
        description: 'Refreshing blue herbal drink. Perfect for hot days and wellness routines.',
        category: 'Beverages',
        quantity: 45
    }
];

// Global variables
let currentCategory = 'all';
let selectedProduct = null;

// Initialize the shop page
function initShopPage() {
    if (!document.querySelector('.shop-page')) return;

    renderProducts();
    setupEventListeners();
    updateCartCount();
}

// Render products based on current filter
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(product => product.category === currentCategory);

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <h3>No products found</h3>
                <p>Try selecting a different category or check back later for new products.</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <span class="product-category">${product.category}</span>
                <div class="product-footer">
                    <div class="product-price">${product.price}</div>
                    <div class="product-quantity">${product.quantity} in stock</div>
                </div>
            </div>
        </div>
    `).join('');

    // Add click events to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-product-id'));
            const product = products.find(p => p.id === productId);
            if (product) {
                openProductModal(product);
            }
        });
    });
}

// Open product modal
function openProductModal(product) {
    selectedProduct = product;
    
    // Update modal content
    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('modalProductImage').alt = product.name;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('modalProductCategory').textContent = product.category;
    document.getElementById('modalProductQuantity').textContent = `${product.quantity} in stock`;
    document.getElementById('modalProductPrice').textContent = product.price;
    
    // Show modal
    document.getElementById('productModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close product modal
function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    selectedProduct = null;
}

// Add product to cart
function addToCart() {
    if (!selectedProduct) return;

    const cart = getCart();
    const existingItem = cart.find(item => item.id === selectedProduct.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...selectedProduct,
            quantity: 1
        });
    }

    saveCart(cart);
    updateCartCount();
    closeProductModal();
    
    // Show success message
    showMessage('Product added to cart!', 'success');
}

// Show message
function showMessage(message, type = 'info') {
    const messageEl = document.createElement('div');
    messageEl.className = `message message-${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1001;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(messageEl);
    
    setTimeout(() => {
        messageEl.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(messageEl);
        }, 300);
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Category filter
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            currentCategory = this.value;
            renderProducts();
        });
    }

    // Modal close button
    const modalClose = document.getElementById('modalClose');
    if (modalClose) {
        modalClose.addEventListener('click', closeProductModal);
    }

    // Add to cart button
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCart);
    }

    // Close modal when clicking outside
    document.getElementById('productModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeProductModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProductModal();
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initShopPage);