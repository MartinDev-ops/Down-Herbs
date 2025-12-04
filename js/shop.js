// Shop Page JavaScript

// Product Data
const products = [
    // Herbal Drinks (6 products)
    {
        id: 1,
        name: "PRODUCT NO. 1 GO DOWN HERB (NDAA)",
        category: "herbal-drinks",
        price: 150.00,
        oldPrice: null,
        rating: 4.5,
        reviews: 128,
        description: "Premium herbal blend for natural wellness and vitality.",
         instruction: "Take one cup daily after meals.",
        image: "images/product/Product1.jpg",
        inStock: true,
        featured: true,
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "PRODUCT NO. 2 UNDERGROUND HERB (NDAA)",
        category: "herbal-drinks",
        price: 200.00,
        oldPrice: null,
        rating: 4.8,
        reviews: 89,
        description: "Potent underground herb extract with traditional healing properties.",
        image: "images/product/Product1.jpg",
        inStock: true,
        featured: true,
        badge: "Popular"
    },
    {
        id: 3,
        name: "PRODUCT NO. 3 SILENT HERB",
        category: "herbal-drinks",
        price: 250.00,
        oldPrice: null,
        rating: 4.7,
        reviews: 204,
        description: "Gentle yet effective herbal formulation for inner balance.",
        image: "images/product/silentHerb.jpg",
        inStock: true,
        featured: false,
        badge: "Premium"
    },
    {
        id: 4,
        name: "PRODUCT NO. 4 RUNNING STOMACH",
        category: "herbal-drinks",
        price: 50.00,
        oldPrice: null,
        rating: 4.2,
        reviews: 95,
        description: "Fast-acting herbal solution for digestive comfort.",
        image: "images/product/cleaner.png",
        inStock: true,
        featured: false,
        badge: "Fast Relief"
    },
    {
        id: 5,
        name: "PRODUCT NO. 5 GO DOWN MPESU",
        category: "herbal-drinks",
        price: 50.00,
        oldPrice: null,
        rating: 4.3,
        reviews: 142,
        description: "Traditional Mpesu herbal blend for vitality support.",
        image: "images/product/mpesu.png",
        inStock: true,
        featured: false,
        badge: "Traditional"
    },
    {
        id: 6,
        name: "PRODUCT NO. 6 ANOINTED GO DOWN OIL",
        category: "herbal-drinks",
        price: 200.00,
        oldPrice: null,
        rating: 4.6,
        reviews: 167,
        description: "Special anointed herbal oil blend for spiritual wellness.",
        image: "images/products/oil.png",
        inStock: true,
        featured: true,
        badge: "Special"
    },
    // Bottled Water (2 products)
    {
        id: 7,
        name: "Pure Spring Water 550ml",
        category: "water",
        price: 15.00,
        oldPrice: null,
        rating: 4.9,
        reviews: 256,
        description: "Crisp, refreshing 550ml spring water.",
        image: "images/products/blue-refreshment.png",
        inStock: true,
        featured: false,
        badge: "Pure"
    },
    {
        id: 8,
        name: "Pure Spring Water 1 Litre",
        category: "water",
        price: 25.00,
        oldPrice: null,
        rating: 4.9,
        reviews: 189,
        description: "1 litre of pure spring water for daily hydration.",
        image: "images/products/waters.png",
        inStock: true,
        featured: false,
        badge: "Value"
    },
    // Merchandise (3 products)
    {
        id: 9,
        name: "Go Down Merchandise Black T-Shirt",
        category: "merchandise",
        price: 199.99,
        oldPrice: 249.99,
        rating: 4.7,
        reviews: 56,
        description: "Premium cotton t-shirt with Go Down Herbs logo.",
        image: "images/merch/black-shirt.png",
        inStock: true,
        featured: false,
        badge: "Limited"
    },
    {
        id: 10,
        name: "Go Down Merchandise White T-Shirt",
        category: "merchandise",
        price: 199.99,
        oldPrice: 249.99,
        rating: 4.7,
        reviews: 56,
        description: "Premium cotton t-shirt with Go Down Herbs logo.",
        image: "images/merch/white-shirt.png",
        inStock: true,
        featured: false,
        badge: "Limited"
    },
    {
        id: 11,
        name: "Go Down Merchandise Green T-Shirt",
        category: "merchandise",
        price: 199.99,
        oldPrice: 249.99,
        rating: 4.7,
        reviews: 56,
        description: "Premium cotton t-shirt with Go Down Herbs logo.",
        image: "images/merch/green-shirt.png",
        inStock: true,
        featured: false,
        badge: "Limited"
    }
];

// State Variables
let filteredProducts = [...products];
let currentView = 'grid';
let cart = JSON.parse(localStorage.getItem('herbalCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('herbalWishlist')) || [];
let filters = {
    search: '',
    category: 'all',
    minPrice: 0,
    maxPrice: 1000,
    sort: 'featured',
    inStock: true
};

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const loadingState = document.getElementById('loadingState');
const noResults = document.getElementById('noResults');
const resultsCount = document.getElementById('resultsCount');
const activeFilters = document.getElementById('activeFilters');
const productSearch = document.getElementById('productSearch');
const clearFiltersBtn = document.getElementById('clearFilters');
const resetSearchBtn = document.getElementById('resetSearch');
const filterToggle = document.getElementById('filterToggle');
const filtersSidebar = document.getElementById('filtersSidebar');
const viewButtons = document.querySelectorAll('.view-btn');
const quickViewModal = document.getElementById('quickViewModal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');
const backToTop = document.getElementById('backToTop');
const cartCount = document.querySelector('.cart-count');
const wishlistCount = document.querySelector('.wishlist-count');

// Initialize Shop
function initShop() {
    renderProducts();
    updateCartUI();
    updateWishlistUI();
    attachEventListeners();
    updateActiveFilters();
    
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.add('loaded');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
        loadingState.style.display = 'none';
    }, 1500);
}

// Attach Event Listeners
function attachEventListeners() {
    // Filter events
    if (productSearch) {
        productSearch.addEventListener('input', handleSearch);
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', resetFilters);
    }

    if (resetSearchBtn) {
        resetSearchBtn.addEventListener('click', resetFilters);
    }

    // Category filter
    document.querySelectorAll('input[name="category"]').forEach(input => {
        input.addEventListener('change', handleCategoryChange);
    });

    // Price filter
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    if (minPriceInput) minPriceInput.addEventListener('change', handlePriceChange);
    if (maxPriceInput) maxPriceInput.addEventListener('change', handlePriceChange);

    // Sort filter
    document.querySelectorAll('input[name="sort"]').forEach(input => {
        input.addEventListener('change', handleSortChange);
    });

    // Stock filter
    const inStockFilter = document.getElementById('inStockFilter');
    if (inStockFilter) {
        inStockFilter.addEventListener('change', handleStockChange);
    }

    // View toggle
    viewButtons.forEach(btn => {
        btn.addEventListener('click', handleViewChange);
    });

    // Filter toggle for mobile
    if (filterToggle) {
        filterToggle.addEventListener('click', () => {
            filtersSidebar.classList.toggle('active');
        });
    }

    // Quick categories
    document.querySelectorAll('.category-card[data-category]').forEach(card => {
        card.addEventListener('click', handleQuickCategory);
    });

    // Modal close
    if (closeModal) {
        closeModal.addEventListener('click', closeQuickView);
    }

    // Close modal on outside click
    if (quickViewModal) {
        quickViewModal.addEventListener('click', (e) => {
            if (e.target === quickViewModal) closeQuickView();
        });
    }

    // Back to top
    if (backToTop) {
        backToTop.addEventListener('click', scrollToTop);
        window.addEventListener('scroll', handleScroll);
    }

    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletter);
    }

    // Mobile menu
    initMobileMenu();
}

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && mobileMenuBtn) {
            if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
}

// Render Products
function renderProducts() {
    if (!productsGrid) return;
    
    // Apply filters and sort
    filterAndSortProducts();
    
    // Clear grid
    productsGrid.innerHTML = '';
    
    // Show/hide states
    if (filteredProducts.length === 0) {
        noResults.style.display = 'block';
        loadingState.style.display = 'none';
        return;
    }
    
    noResults.style.display = 'none';
    loadingState.style.display = 'none';
    
    // Render products
    filteredProducts.forEach(product => {
        const productElement = createProductElement(product);
        productsGrid.appendChild(productElement);
    });
    
    // Update view class
    productsGrid.className = `products-grid ${currentView === 'list' ? 'list-view' : ''}`;
    
    // Update results count
    updateResultsCount();
}

// Create Product Element
function createProductElement(product) {
    const div = document.createElement('div');
    div.className = 'product-card';
    
    const stars = generateStars(product.rating);
    const oldPrice = product.oldPrice ? 
        `<span class="product-old-price">R${product.oldPrice.toFixed(2)}</span>` : '';
    const badge = product.badge ? 
        `<div class="product-badge">${product.badge}</div>` : '';
    
    div.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${badge}
        </div>
        <div class="product-content">
            <div class="product-category">${product.category.replace('-', ' ')}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-meta">
                <div class="product-price">
                    ${oldPrice}
                    <span class="current-price">R${product.price.toFixed(2)}</span>
                </div>
                <button class="add-to-cart ${!product.inStock ? 'disabled' : ''}" 
                        data-id="${product.id}"
                        ${!product.inStock ? 'disabled' : ''}>
                    <i class="fas fa-shopping-basket"></i>
                    ${!product.inStock ? 'Out of Stock' : 'Add to Cart'}
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners
    const addToCartBtn = div.querySelector('.add-to-cart');
    if (addToCartBtn && product.inStock) {
        addToCartBtn.addEventListener('click', () => addToCart(product.id));
    }
    
    // Add click event for quick view
    div.addEventListener('click', (e) => {
        if (!e.target.closest('.add-to-cart')) {
            openQuickView(product.id);
        }
    });
    
    return div;
}

// Generate Star Rating HTML
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return `<div class="product-rating">${stars}</div>`;
}

// Filter and Sort Products
function filterAndSortProducts() {
    // Filter
    filteredProducts = products.filter(product => {
        // Search filter
        const matchesSearch = !filters.search || 
            product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            product.description.toLowerCase().includes(filters.search.toLowerCase());
        
        // Category filter
        const matchesCategory = filters.category === 'all' || 
            product.category === filters.category;
        
        // Price filter
        const matchesPrice = product.price >= filters.minPrice && 
            product.price <= filters.maxPrice;
        
        // Stock filter
        const matchesStock = !filters.inStock || product.inStock;
        
        return matchesSearch && matchesCategory && matchesPrice && matchesStock;
    });
    
    // Sort
    switch (filters.sort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'featured':
        default:
            // Featured products first
            filteredProducts.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return 0;
            });
            break;
    }
}

// Update Results Count
function updateResultsCount() {
    if (!resultsCount) return;
    
    const total = filteredProducts.length;
    resultsCount.textContent = `Showing ${total} product${total !== 1 ? 's' : ''}`;
}

// Update Active Filters Display
function updateActiveFilters() {
    if (!activeFilters) return;
    
    activeFilters.innerHTML = '';
    
    // Category filter
    if (filters.category !== 'all') {
        const filterElement = document.createElement('div');
        filterElement.className = 'active-filter';
        filterElement.innerHTML = `
            ${filters.category.replace('-', ' ')}
            <button onclick="removeCategoryFilter()">
                <i class="fas fa-times"></i>
            </button>
        `;
        activeFilters.appendChild(filterElement);
    }
    
    // Price filter
    if (filters.minPrice > 0 || filters.maxPrice < 1000) {
        const filterElement = document.createElement('div');
        filterElement.className = 'active-filter';
        filterElement.innerHTML = `
            R${filters.minPrice} - R${filters.maxPrice}
            <button onclick="removePriceFilter()">
                <i class="fas fa-times"></i>
            </button>
        `;
        activeFilters.appendChild(filterElement);
    }
}

// Filter Handlers
function handleSearch(e) {
    filters.search = e.target.value;
    renderProducts();
    updateActiveFilters();
}

function handleCategoryChange(e) {
    filters.category = e.target.value;
    renderProducts();
    updateActiveFilters();
}

function handlePriceChange() {
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || 1000;
    
    filters.minPrice = minPrice;
    filters.maxPrice = maxPrice;
    
    // Update display
    document.getElementById('minPriceDisplay').textContent = minPrice;
    document.getElementById('maxPriceDisplay').textContent = maxPrice;
    
    renderProducts();
    updateActiveFilters();
}

function handleSortChange(e) {
    filters.sort = e.target.value;
    renderProducts();
}

function handleStockChange(e) {
    filters.inStock = e.target.checked;
    renderProducts();
    updateActiveFilters();
}

function handleViewChange(e) {
    const view = e.currentTarget.dataset.view;
    
    if (view === currentView) return;
    
    currentView = view;
    
    // Update active button
    viewButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });
    
    // Re-render products with new view
    renderProducts();
}

function handleQuickCategory(e) {
    e.preventDefault();
    const category = e.currentTarget.dataset.category;
    
    // Set category filter
    filters.category = category;
    document.querySelector(`input[name="category"][value="${category}"]`).checked = true;
    
    renderProducts();
    updateActiveFilters();
    
    // Scroll to products
    productsGrid.scrollIntoView({ behavior: 'smooth' });
}

// Remove Filter Functions
function removeCategoryFilter() {
    filters.category = 'all';
    document.querySelector('input[name="category"][value="all"]').checked = true;
    renderProducts();
    updateActiveFilters();
}

function removePriceFilter() {
    filters.minPrice = 0;
    filters.maxPrice = 1000;
    
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    document.getElementById('minPriceDisplay').textContent = '0';
    document.getElementById('maxPriceDisplay').textContent = '1000';
    
    renderProducts();
    updateActiveFilters();
}

// Reset All Filters
function resetFilters() {
    // Reset filter state
    filters = {
        search: '',
        category: 'all',
        minPrice: 0,
        maxPrice: 1000,
        sort: 'featured',
        inStock: true
    };
    
    // Reset UI elements
    if (productSearch) productSearch.value = '';
    document.querySelector('input[name="category"][value="all"]').checked = true;
    document.querySelector('input[name="sort"][value="featured"]').checked = true;
    document.getElementById('inStockFilter').checked = true;
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    document.getElementById('minPriceDisplay').textContent = '0';
    document.getElementById('maxPriceDisplay').textContent = '1000';
    
    renderProducts();
    updateActiveFilters();
}

// Quick View Modal
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const stars = generateStars(product.rating);
    const oldPrice = product.oldPrice ? 
        `<span class="product-old-price">R${product.oldPrice.toFixed(2)}</span>` : '';
    
    modalBody.innerHTML = `
        <div class="quick-view-content">
            <div class="product-image-large">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-details-large">
                <h2>${product.name}</h2>
                <div class="product-category-large">${product.category.replace('-', ' ')}</div>

                ${stars}

                <p class="product-description-large">${product.description}</p>

                <div class="product-price-large">
                    ${oldPrice}
                    <span class="current-price">R${product.price.toFixed(2)}</span>
                </div>

                <div class="product-actions-large">
                    <div class="quantity-selector">
                        <button class="quantity-btn minus"><i class="fas fa-minus"></i></button>
                        <input type="number" class="quantity-input" value="1" min="1" max="10">
                        <button class="quantity-btn plus"><i class="fas fa-plus"></i></button>
                    </div>
                    <button class="btn btn-primary add-to-cart-large"
                            ${!product.inStock ? 'disabled' : ''}>
                        <i class="fas fa-shopping-basket"></i>
                        ${!product.inStock ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                    <a href="product-details.html?id=${product.id}" class="btn btn-outline more-details-btn">
                        <i class="fas fa-info-circle"></i>
                        More Details
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners for quantity selector
    const quantityInput = modalBody.querySelector('.quantity-input');
    const minusBtn = modalBody.querySelector('.quantity-btn.minus');
    const plusBtn = modalBody.querySelector('.quantity-btn.plus');
    const addToCartBtn = modalBody.querySelector('.add-to-cart-large');
    
    minusBtn.addEventListener('click', () => {
        const value = parseInt(quantityInput.value);
        if (value > 1) quantityInput.value = value - 1;
    });
    
    plusBtn.addEventListener('click', () => {
        const value = parseInt(quantityInput.value);
        if (value < 10) quantityInput.value = value + 1;
    });
    
    if (addToCartBtn && product.inStock) {
        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value);
            addToCart(product.id, quantity);
            closeQuickView();
        });
    }
    
    quickViewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    quickViewModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Cart Functions
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    localStorage.setItem('herbalCart', JSON.stringify(cart));
    updateCartUI();
    showNotification(`${product.name} added to cart`, 'success');
}

function updateCartUI() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
}

function updateWishlistUI() {
    if (wishlistCount) wishlistCount.textContent = wishlist.length;
}

// Newsletter
function handleNewsletter(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    showNotification('Thank you for subscribing!', 'success');
    e.target.reset();
}

// Scroll Handlers
function handleScroll() {
    // Back to top button
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    
    // Header shadow
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show Notification
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Style notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#2E7D32' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideIn 0.3s ease;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initShop);


const box = document.getElementById("shopBox");
const wrapper = document.querySelector(".shop-wrapper");

function moveBox() {
    const maxX = wrapper.clientWidth - box.clientWidth;
    const maxY = wrapper.clientHeight - box.clientHeight;

    // Create a RIGHT-SIDE bias
    const minRightSide = maxX * 0.45;  // start movement from the middle area
    const newX = minRightSide + Math.random() * (maxX - minRightSide);

    const newY = Math.random() * maxY;

    box.style.left = newX + "px";
    box.style.top = newY + "px";
}

setInterval(moveBox, 1500);

// First movement on load
moveBox();
