// Product Details Page JavaScript

// Product Data (same as shop.js)
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
        description: "Premium herbal blend for natural wellness and vitality. This authentic herbal formulation combines traditional wisdom with modern wellness needs, providing comprehensive support for your body's natural balance and energy levels.",
        instruction: "Take one cup daily after meals. Mix with warm water and consume slowly for best absorption. For optimal results, maintain consistent daily usage.",
        benefits: [
            "Supports natural energy levels",
            "Promotes overall wellness",
            "Traditional herbal formulation",
            "Natural vitality enhancement",
            "Supports body's natural balance"
        ],
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
        description: "Potent underground herb extract with traditional healing properties. Sourced from rare underground herbs, this formulation offers deep nourishment and restorative benefits for comprehensive wellness support.",
        instruction: "Take one cup in the morning on an empty stomach. Allow 30 minutes before eating. Can be taken with warm water or herbal tea for enhanced absorption.",
        benefits: [
            "Deep restorative properties",
            "Traditional healing support",
            "Rare underground herb extract",
            "Comprehensive wellness benefits",
            "Natural healing enhancement"
        ],
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
        description: "Gentle yet effective herbal formulation for inner balance. This calming blend supports emotional wellness and promotes peaceful inner harmony through natural herbal synergy.",
        instruction: "Take one cup in the evening, 1 hour before bedtime. Mix with warm water and consume slowly. Best taken consistently for optimal calming effects.",
        benefits: [
            "Supports emotional wellness",
            "Promotes inner peace",
            "Natural calming effects",
            "Gentle herbal formulation",
            "Inner balance restoration"
        ],
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
        description: "Fast-acting herbal solution for digestive comfort. This specialized formulation provides quick relief for digestive discomfort and supports healthy stomach function.",
        instruction: "Take one cup as needed for digestive discomfort. Can be taken up to 3 times daily. Mix with warm water for best results. Take 30 minutes before or after meals.",
        benefits: [
            "Fast digestive relief",
            "Supports stomach comfort",
            "Natural digestive support",
            "Quick-acting formulation",
            "Healthy digestion promotion"
        ],
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
        description: "Traditional Mpesu herbal blend for vitality support. This time-honored formulation combines traditional herbs known for their vitality-enhancing properties.",
        instruction: "Take one cup daily in the morning. Mix with warm water and consume on an empty stomach for maximum absorption and vitality benefits.",
        benefits: [
            "Traditional vitality support",
            "Natural energy enhancement",
            "Time-honored formulation",
            "Morning vitality boost",
            "Natural wellness support"
        ],
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
        description: "Special anointed herbal oil blend for spiritual wellness. This sacred formulation combines anointed herbs with traditional oils for comprehensive spiritual and physical support.",
        instruction: "Apply externally as needed or take internally as directed. For external use, massage into skin. For internal use, take 1 teaspoon daily with meals.",
        benefits: [
            "Spiritual wellness support",
            "Traditional anointed formulation",
            "Comprehensive support blend",
            "Natural spiritual enhancement",
            "Sacred herbal combination"
        ],
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
        description: "Crisp, refreshing 550ml spring water sourced from natural springs. Pure, clean water that hydrates and refreshes naturally.",
        instruction: "Drink as needed throughout the day. Keep refrigerated for best taste. Consume within 24 hours of opening for optimal freshness.",
        benefits: [
            "Natural spring water source",
            "Pure hydration support",
            "Refreshing crisp taste",
            "Natural mineral content",
            "Clean and pure water"
        ],
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
        description: "1 litre of pure spring water for daily hydration. Natural spring water in a convenient larger size for all-day hydration needs.",
        instruction: "Drink throughout the day as needed. Store in cool place. Best consumed within 48 hours of opening for maximum freshness.",
        benefits: [
            "Convenient 1 litre size",
            "Natural spring water",
            "All-day hydration support",
            "Pure and clean water",
            "Natural mineral balance"
        ],
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
        description: "Premium cotton t-shirt with Go Down Herbs logo. Comfortable, durable, and stylish merchandise that represents natural wellness.",
        instruction: "Machine wash cold, tumble dry low. Do not bleach. Iron on reverse side if needed. Wear and share the message of natural wellness.",
        benefits: [
            "Premium cotton material",
            "Comfortable fit and wear",
            "Durable construction",
            "Natural wellness representation",
            "Stylish design"
        ],
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
        description: "Premium cotton t-shirt with Go Down Herbs logo. Clean, classic design that promotes natural wellness and healthy living.",
        instruction: "Machine wash cold with like colors. Tumble dry low. Do not use bleach. Wear proudly to support natural wellness initiatives.",
        benefits: [
            "Classic white design",
            "Premium cotton comfort",
            "Natural wellness promotion",
            "Durable and long-lasting",
            "Comfortable everyday wear"
        ],
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
        description: "Premium cotton t-shirt with Go Down Herbs logo. Vibrant green design that symbolizes natural growth and wellness.",
        instruction: "Wash in cold water, hang dry preferred. Low iron if needed. Wear to connect with nature and promote healthy living.",
        benefits: [
            "Vibrant green symbolism",
            "Premium cotton quality",
            "Natural wellness connection",
            "Comfortable and stylish",
            "Durable merchandise"
        ],
        image: "images/merch/green-shirt.png",
        inStock: true,
        featured: false,
        badge: "Limited"
    }
];

// State Variables
let cart = JSON.parse(localStorage.getItem('herbalCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('herbalWishlist')) || [];

// DOM Elements
const productDetails = document.getElementById('productDetails');
const productDescription = document.getElementById('productDescription');
const productUsage = document.getElementById('productUsage');
const productBenefits = document.getElementById('productBenefits');
const reviewsList = document.getElementById('reviewsList');
const relatedProducts = document.getElementById('relatedProducts');
const cartCount = document.querySelector('.cart-count');
const wishlistCount = document.querySelector('.wishlist-count');

// Initialize Product Details Page
function initProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (productId) {
        loadProductDetails(productId);
    } else {
        // Redirect to shop if no product ID
        window.location.href = 'shop.html';
    }

    updateCartUI();
    updateWishlistUI();
    attachEventListeners();
}

// Load Product Details
function loadProductDetails(productId) {
    const product = products.find(p => p.id === productId);

    if (!product) {
        window.location.href = 'shop.html';
        return;
    }

    // Update page title
    document.title = `${product.name} | Go Down Herbs`;

    // Render product details
    renderProductDetails(product);

    // Load related products
    loadRelatedProducts(product);

    // Load reviews
    loadReviews(product);
}

// Render Product Details
function renderProductDetails(product) {
    const stars = generateStars(product.rating);
    const oldPrice = product.oldPrice ?
        `<span class="old-price">R${product.oldPrice.toFixed(2)}</span>` : '';

    productDetails.innerHTML = `
        <div class="product-gallery">
            <div class="main-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
        </div>
        <div class="product-info">
            <div class="product-category">${product.category.replace('-', ' ')}</div>
            <h1 class="product-title">${product.name}</h1>

            <div class="product-rating">
                <div class="stars">${stars}</div>
                <span class="reviews">(${product.reviews} reviews)</span>
            </div>

            <div class="product-price">
                ${oldPrice}
                <span class="current-price">R${product.price.toFixed(2)}</span>
            </div>

            <div class="product-description">
                ${product.description}
            </div>

            <div class="product-actions">
                <div class="quantity-selector">
                    <button class="quantity-btn minus"><i class="fas fa-minus"></i></button>
                    <input type="number" class="quantity-input" value="1" min="1" max="10">
                    <button class="quantity-btn plus"><i class="fas fa-plus"></i></button>
                </div>
                <button class="btn btn-primary add-to-cart-btn"
                        ${!product.inStock ? 'disabled' : ''}>
                    <i class="fas fa-shopping-basket"></i>
                    ${!product.inStock ? 'Out of Stock' : 'Add to Cart'}
                </button>
                <button class="btn btn-outline wishlist-btn">
                    <i class="far fa-heart"></i>
                    Add to Wishlist
                </button>
            </div>

            <div class="product-meta">
                <div class="meta-item">
                    <i class="fas fa-shipping-fast"></i>
                    <span>Free shipping on orders over R500</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-undo"></i>
                    <span>30-day return policy</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-shield-alt"></i>
                    <span>100% natural ingredients</span>
                </div>
            </div>
        </div>
    `;

    // Add event listeners for quantity selector
    const quantityInput = productDetails.querySelector('.quantity-input');
    const minusBtn = productDetails.querySelector('.quantity-btn.minus');
    const plusBtn = productDetails.querySelector('.quantity-btn.plus');
    const addToCartBtn = productDetails.querySelector('.add-to-cart-btn');
    const wishlistBtn = productDetails.querySelector('.wishlist-btn');

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
        });
    }

    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', () => {
            toggleWishlist(product.id);
            updateWishlistButton(wishlistBtn, product.id);
        });
        updateWishlistButton(wishlistBtn, product.id);
    }

    // Update tab content
    productDescription.textContent = product.description;
    productUsage.textContent = product.instruction;

    // Update benefits
    productBenefits.innerHTML = product.benefits.map(benefit =>
        `<li><i class="fas fa-check"></i> ${benefit}</li>`
    ).join('');
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

    return stars;
}

// Load Related Products
function loadRelatedProducts(product) {
    const related = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    relatedProducts.innerHTML = related.map(p => createRelatedProductElement(p)).join('');
}

// Create Related Product Element
function createRelatedProductElement(product) {
    const stars = generateStars(product.rating);
    const oldPrice = product.oldPrice ?
        `<span class="product-old-price">R${product.oldPrice.toFixed(2)}</span>` : '';

    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-content">
                <div class="product-category">${product.category.replace('-', ' ')}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description.substring(0, 80)}...</p>
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
        </div>
    `;
}

// Load Reviews
function loadReviews(product) {
    // Mock reviews data - in a real app, this would come from an API
    const mockReviews = [
        {
            name: "Sarah M.",
            rating: 5,
            date: "2024-01-15",
            text: "Amazing product! I've noticed significant improvement in my energy levels. The natural ingredients really make a difference."
        },
        {
            name: "John D.",
            rating: 4,
            date: "2024-01-10",
            text: "Good quality herbal product. Takes some time to see results but definitely worth it. Will purchase again."
        },
        {
            name: "Mary K.",
            rating: 5,
            date: "2024-01-08",
            text: "Excellent customer service and product quality. The herbs are fresh and potent. Highly recommend!"
        },
        {
            name: "David L.",
            rating: 4,
            date: "2024-01-05",
            text: "Solid product with good results. The instructions are clear and easy to follow. Natural wellness at its best."
        }
    ];

    reviewsList.innerHTML = mockReviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <div class="reviewer-name">${review.name}</div>
                <div class="review-date">${formatDate(review.date)}</div>
            </div>
            <div class="review-rating">
                ${generateStars(review.rating)}
            </div>
            <div class="review-text">${review.text}</div>
        </div>
    `).join('');

    // Update average rating display
    document.getElementById('averageRating').textContent = product.rating.toFixed(1);
    document.getElementById('ratingStars').innerHTML = generateStars(product.rating);
    document.getElementById('totalReviews').textContent = `${product.reviews} reviews`;
}

// Format Date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Attach Event Listeners
function attachEventListeners() {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', handleTabSwitch);
    });

    // Related products add to cart
    document.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-cart')) {
            const btn = e.target.closest('.add-to-cart');
            const productId = parseInt(btn.dataset.id);
            if (productId && !btn.disabled) {
                addToCart(productId);
            }
        }
    });

    // Mobile menu
    initMobileMenu();

    // Back to top
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', scrollToTop);
        window.addEventListener('scroll', handleScroll);
    }
}

// Handle Tab Switching
function handleTabSwitch(e) {
    const tabName = e.target.dataset.tab;

    // Update active tab button
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn === e.target);
    });

    // Update active tab panel
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === tabName);
    });
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

// Wishlist Functions
function toggleWishlist(productId) {
    const index = wishlist.findIndex(item => item.id === productId);
    const product = products.find(p => p.id === productId);

    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification(`Removed ${product.name} from wishlist`, 'info');
    } else {
        wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        });
        showNotification(`Added ${product.name} to wishlist`, 'success');
    }

    localStorage.setItem('herbalWishlist', JSON.stringify(wishlist));
    updateWishlistUI();
}

function updateWishlistUI() {
    if (wishlistCount) wishlistCount.textContent = wishlist.length;
}

function updateWishlistButton(btn, productId) {
    const isInWishlist = wishlist.some(item => item.id === productId);
    const icon = btn.querySelector('i');
    const text = btn.querySelector('span') || btn;

    if (isInWishlist) {
        icon.className = 'fas fa-heart';
        btn.classList.add('active');
        if (text.tagName === 'SPAN') text.textContent = 'In Wishlist';
    } else {
        icon.className = 'far fa-heart';
        btn.classList.remove('active');
        if (text.tagName === 'SPAN') text.textContent = 'Add to Wishlist';
    }
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

// Scroll Handlers
function handleScroll() {
    const backToTop = document.getElementById('backToTop');
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
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

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

    document.body.appendChild(notification);

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
document.addEventListener('DOMContentLoaded', initProductDetails);
