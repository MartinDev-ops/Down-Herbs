// Enhanced Product Data with Herbal Theme
const products = [
    // Herbal Drinks
    {
        id: 1,
        name: "PRODUCT NO. 1 GO DOWN HERB (NDAA)",
        category: "herbal-drinks",
        price: 150.00,
        oldPrice: null,
        rating: 4.5,
        reviews: 128,
        description: "Premium herbal blend for natural wellness and vitality. Made with traditional herbs and modern extraction methods.",
        image: "images/product/Product1.jpg",
        inStock: true,
        featured: true,
        badge: "Best Seller",
        benefits: ["energy", "immunity"],
        ingredients: ["Traditional Herbs", "Natural Extracts"],
        usage: "Take as directed for optimal wellness",
        origin: "South African Herbs",
        organic: true,
        tags: ["herbal", "wellness", "natural"]
    },
    {
        id: 2,
        name: "PRODUCT NO. 2 UNDERGROUND HERB (NDAA)",
        category: "herbal-drinks",
        price: 200.00,
        oldPrice: null,
        rating: 4.8,
        reviews: 89,
        description: "Potent underground herb extract with traditional healing properties and modern wellness benefits.",
        image: "images/product/Product1.jpg",
        inStock: true,
        featured: true,
        badge: "Popular",
        benefits: ["immunity", "energy"],
        ingredients: ["Underground Herbs", "Natural Extracts"],
        usage: "Consume as needed for natural support",
        origin: "African Traditional",
        organic: true,
        tags: ["traditional", "potent", "wellness"]
    },
    {
        id: 3,
        name: "PRODUCT NO. 3 SILENT HERB",
        category: "herbal-drinks",
        price: 250.00,
        oldPrice: null,
        rating: 4.7,
        reviews: 204,
        description: "Gentle yet effective herbal formulation for quiet strength and inner balance. Perfect for daily wellness.",
        image: "images/product/silentHerb.jpg",
        inStock: true,
        featured: false,
        badge: "Premium",
        benefits: ["stress", "balance"],
        ingredients: ["Silent Herbs", "Calming Extracts"],
        usage: "Use regularly for maintained wellness",
        origin: "Traditional Formulation",
        organic: true,
        tags: ["gentle", "balance", "wellness"]
    },
    {
        id: 4,
        name: "PRODUCT NO. 4 RUNNING STOMACH",
        category: "herbal-drinks",
        price: 50.00,
        oldPrice: null,
        rating: 4.2,
        reviews: 95,
        description: "Fast-acting herbal solution for digestive comfort and stomach wellness. Quick relief when you need it.",
        image: "images/product/cleaner.png",
        inStock: true,
        featured: false,
        badge: "Fast Relief",
        benefits: ["digestion"],
        ingredients: ["Digestive Herbs", "Soothing Extracts"],
        usage: "Take as needed for digestive support",
        origin: "Traditional Remedy",
        organic: true,
        tags: ["digestive", "fast", "relief"]
    },
    {
        id: 5,
        name: "PRODUCT NO. 5 GO DOWN MPESU",
        category: "herbal-drinks",
        price: 50.00,
        oldPrice: null,
        rating: 4.3,
        reviews: 142,
        description: "Traditional Mpesu herbal blend for overall wellness and natural vitality support.",
        image: "images/product/mpesu.png",
        inStock: true,
        featured: false,
        badge: "Traditional",
        benefits: ["energy", "vitality"],
        ingredients: ["Mpesu Herbs", "Natural Blends"],
        usage: "Regular use for maintained vitality",
        origin: "Traditional African",
        organic: true,
        tags: ["traditional", "vitality", "wellness"]
    },
    {
        id: 6,
        name: "PRODUCT NO. 6 ANOINTED GO DOWN OIL",
        category: "herbal-drinks",
        price: 200.00,
        oldPrice: null,
        rating: 4.6,
        reviews: 167,
        description: "Special anointed herbal oil blend for spiritual and physical wellness. Traditional preparation methods.",
        image: "images/products/oil.png",
        inStock: true,
        featured: true,
        badge: "Special",
        benefits: ["spiritual", "wellness"],
        ingredients: ["Anointed Herbs", "Sacred Oils"],
        usage: "Use as directed for spiritual practice",
        origin: "Traditional Sacred",
        organic: true,
        tags: ["anointed", "spiritual", "sacred"]
    },
    // Bottled Water
    {
        id: 7,
        name: "Pure Spring Water 550ml",
        category: "water",
        price: 15.00,
        oldPrice: null,
        rating: 4.9,
        reviews: 256,
        description: "Crisp, refreshing 550ml spring water bottled at source for maximum purity and freshness.",
        image: "images/products/blue-refreshment.png",
        inStock: true,
        featured: false,
        badge: "Pure",
        benefits: ["hydration"],
        ingredients: ["Natural Spring Water"],
        usage: "Drink to stay hydrated throughout the day",
        origin: "Natural Springs",
        organic: true,
        tags: ["water", "hydration", "pure"]
    },
    {
        id: 8,
        name: "Pure Spring Water 1 Litre",
        category: "water",
        price: 25.00,
        oldPrice: null,
        rating: 4.9,
        reviews: 189,
        description: "1 litre of pure spring water, perfect for daily hydration and wellness routines.",
        image:  "images/products/waters.png",
        inStock: true,
        featured: false,
        badge: "Value",
        benefits: ["hydration"],
        ingredients: ["Natural Spring Water"],
        usage: "Perfect for daily hydration needs",
        origin: "Natural Springs",
        organic: true,
        tags: ["water", "hydration", "1litre"]
    },
    // Merchandise
    {
        id: 9,
        name: "Go Down Merchandise Black T-Shirt",
        category: "merchandise",
        price: 199.99,
        oldPrice: 249.99,
        rating: 4.7,
        reviews: 56,
        description: "Premium cotton t-shirt featuring the Go Down Herbs logo. Comfortable and stylish wellness wear.",
        image: "images/merch/black-shirt.png" ,
        inStock: true,
        featured: false,
        badge: "Limited",
        benefits: [],
        ingredients: ["100% Cotton"],
        usage: "Machine wash cold, tumble dry low",
        origin: "Local Production",
        organic: false,
        tags: ["tshirt", "merchandise", "clothing"]
    },
   {
        id: 10,
        name: "Go Down Merchandise White T-Shirt",
        category: "merchandise",
        price: 199.99,
        oldPrice: 249.99,
        rating: 4.7,
        reviews: 56,
        description: "Premium cotton t-shirt featuring the Go Down Herbs logo. Comfortable and stylish wellness wear.",
        image: "images/merch/white-shirt.png",
        inStock: true,
        featured: false,
        badge: "Limited",
        benefits: [],
        ingredients: ["100% Cotton"],
        usage: "Machine wash cold, tumble dry low",
        origin: "Local Production",
        organic: false,
        tags: ["tshirt", "merchandise", "clothing"]
    },
     {
        id: 11,
        name: "Go Down Merchandise Green T-Shirt",
        category: "merchandise",
        price: 199.99,
        oldPrice: 249.99,
        rating: 4.7,
        reviews: 56,
        description: "Premium cotton t-shirt featuring the Go Down Herbs logo. Comfortable and stylish wellness wear.",
        image: "images/merch/green-shirt.png",
        inStock: true,
        featured: false,
        badge: "Limited",
        benefits: [],
        ingredients: ["100% Cotton"],
        usage: "Machine wash cold, tumble dry low",
        origin: "Local Production",
        organic: false,
        tags: ["tshirt", "merchandise", "clothing"]
    }
    
];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const pagination = document.getElementById('pagination');
const resultsCount = document.getElementById('resultsCount');
const sortSelect = document.getElementById('sortSelect');
const viewButtons = document.querySelectorAll('.view-btn');
const filterToggle = document.getElementById('filterToggle');
const filtersSidebar = document.querySelector('.filters-sidebar');
const searchInput = document.getElementById('productSearch');
const clearFiltersBtn = document.getElementById('clearFilters');
const resetSearchBtn = document.getElementById('resetSearch');
const activeFilters = document.getElementById('activeFilters');
const quickViewModal = document.getElementById('quickViewModal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');
const cartBtn = document.querySelector('.cart-btn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.querySelector('.close-cart');
const cartItems = document.getElementById('cartItems');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartCount = document.querySelector('.cart-count');
const wishlistCount = document.querySelector('.wishlist-count');
const backToTop = document.getElementById('backToTop');
const loadingScreen = document.getElementById('loadingScreen');
const newsletterForm = document.getElementById('newsletterForm');

// State Variables
let currentPage = 1;
const productsPerPage = 11;
let filteredProducts = [...products];
let currentView = 'grid';
let cart = JSON.parse(localStorage.getItem('herbalCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('herbalWishlist')) || [];
let filters = {
    search: '',
    categories: ['all'],
    priceRange: [0, 1000],
    rating: 0,
    benefits: [],
    availability: ['in-stock']
};

// Initialize the shop
function initShop() {
    // Simulate loading
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.classList.add('loaded');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 1500);

    renderProducts();
    updateCartUI();
    updateWishlistUI();
    attachEventListeners();
    updateActiveFilters();
    initMobileMenu();

    // Ensure loading screen is hidden after all initialization
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 2000);
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && mobileMenuBtn) {
            if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                mobileMenu.classList.remove('active');
            }
        }
    });
}

// Attach event listeners
function attachEventListeners() {
    // Search and filters
    if (searchInput) searchInput.addEventListener('input', handleSearch);
    if (clearFiltersBtn) clearFiltersBtn.addEventListener('click', resetFilters);
    if (resetSearchBtn) resetSearchBtn.addEventListener('click', resetFilters);
    
    // Sort and view
    if (sortSelect) sortSelect.addEventListener('change', handleSortChange);
    viewButtons.forEach(btn => {
        btn.addEventListener('click', handleViewChange);
    });
    
    // Modal and cart
    if (closeModal) closeModal.addEventListener('click', closeQuickView);
    if (cartBtn) cartBtn.addEventListener('click', toggleCart);
    if (closeCart) closeCart.addEventListener('click', toggleCart);
    
    // Filter changes
    document.querySelectorAll('input[name="category"]').forEach(input => {
        input.addEventListener('change', handleCategoryChange);
    });
    
    document.querySelectorAll('input[name="rating"]').forEach(input => {
        input.addEventListener('change', handleRatingChange);
    });
    
    document.querySelectorAll('input[name="availability"]').forEach(input => {
        input.addEventListener('change', handleAvailabilityChange);
    });
    
    // Price range
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const rangeMin = document.querySelector('.range-min');
    const rangeMax = document.querySelector('.range-max');
    
    if (minPriceInput) minPriceInput.addEventListener('change', handlePriceChange);
    if (maxPriceInput) maxPriceInput.addEventListener('change', handlePriceChange);
    if (rangeMin) rangeMin.addEventListener('input', handleRangeChange);
    if (rangeMax) rangeMax.addEventListener('input', handleRangeChange);
    
    // Quick categories
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', handleQuickCategory);
    });
    
    // Newsletter
    if (newsletterForm) newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    
    // Back to top
    if (backToTop) {
        backToTop.addEventListener('click', scrollToTop);
        window.addEventListener('scroll', handleScroll);
    }
    
    // Close modals on outside click
    if (quickViewModal) {
        quickViewModal.addEventListener('click', (e) => {
            if (e.target === quickViewModal) closeQuickView();
        });
    }
    
    if (cartSidebar) {
        cartSidebar.addEventListener('click', (e) => {
            if (e.target === cartSidebar) toggleCart();
        });
    }
    
    // Filter toggle for mobile
    if (filterToggle) {
        filterToggle.addEventListener('click', () => {
            filtersSidebar.classList.toggle('active');
        });
    }
}

// Render products based on current filters and page
function renderProducts() {
    if (!productsGrid) return;
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    productsGrid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        document.getElementById('noResults').style.display = 'block';
        document.getElementById('loadingState').style.display = 'none';
        return;
    }
    
    document.getElementById('noResults').style.display = 'none';
    document.getElementById('loadingState').style.display = 'none';
    
    productsToShow.forEach((product, index) => {
        setTimeout(() => {
            const productElement = createProductElement(product);
            productsGrid.appendChild(productElement);
        }, index * 100);
    });
    
    updateResultsCount();
}

// Create product card element
function createProductElement(product) {
    const productCard = document.createElement('div');
    productCard.className = `product-card ${currentView === 'list' ? 'list-view' : ''}`;
    
    const stars = generateStarRating(product.rating);
    const oldPrice = product.oldPrice ? 
        `<span class="product-old-price">R${product.oldPrice.toFixed(2)}</span>` : '';
    const badge = product.badge ? `<div class="product-badge ${product.badge.toLowerCase().replace(' ', '-')}">${product.badge}</div>` : '';
    const isInWishlist = wishlist.includes(product.id);
    
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${badge}
            <div class="product-actions">
                <button class="action-btn quick-view" data-id="${product.id}" title="Quick View">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="action-btn wishlist-btn ${isInWishlist ? 'active' : ''}" data-id="${product.id}" title="${isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                    <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-rating">
                <div class="rating-stars">${stars}</div>
                <span class="rating-value">${product.rating} (${product.reviews})</span>
            </div>
            <div class="product-footer">
                <div class="product-price">
                    ${oldPrice}
                    R${product.price.toFixed(2)}
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
    const quickViewBtn = productCard.querySelector('.quick-view');
    const addToCartBtn = productCard.querySelector('.add-to-cart');
    const wishlistBtn = productCard.querySelector('.wishlist-btn');
    
    if (quickViewBtn) quickViewBtn.addEventListener('click', () => openQuickView(product.id));
    if (addToCartBtn) addToCartBtn.addEventListener('click', () => addToCart(product.id));
    if (wishlistBtn) wishlistBtn.addEventListener('click', () => toggleWishlist(product.id));
    
    return productCard;
}

// Generate star rating HTML
function generateStarRating(rating) {
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

// Update results count
function updateResultsCount() {
    if (!resultsCount) return;
    
    const total = filteredProducts.length;
    const start = (currentPage - 1) * productsPerPage + 1;
    const end = Math.min(currentPage * productsPerPage, total);
    
    resultsCount.textContent = `Showing ${start}-${end} of ${total} products`;
}

// Update active filters display
function updateActiveFilters() {
    if (!activeFilters) return;
    
    activeFilters.innerHTML = '';
    let activeCount = 0;

    // Search filter
    if (filters.search) {
        activeCount++;
        const filterElement = document.createElement('div');
        filterElement.className = 'active-filter';
        filterElement.innerHTML = `
            Search: "${filters.search}"
            <button onclick="removeSearchFilter()">
                <i class="fas fa-times"></i>
            </button>
        `;
        activeFilters.appendChild(filterElement);
    }

    // Category filters (excluding 'all')
    const categoryFilters = filters.categories.filter(cat => cat !== 'all');
    if (categoryFilters.length > 0) {
        activeCount++;
        const filterElement = document.createElement('div');
        filterElement.className = 'active-filter';
        filterElement.innerHTML = `
            Categories: ${categoryFilters.join(', ')}
            <button onclick="removeCategoryFilters()">
                <i class="fas fa-times"></i>
            </button>
        `;
        activeFilters.appendChild(filterElement);
    }

    // Price range
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 1000) {
        activeCount++;
        const filterElement = document.createElement('div');
        filterElement.className = 'active-filter';
        filterElement.innerHTML = `
            Price: R${filters.priceRange[0]} - R${filters.priceRange[1]}
            <button onclick="removePriceFilter()">
                <i class="fas fa-times"></i>
            </button>
        `;
        activeFilters.appendChild(filterElement);
    }

    // Rating
    if (filters.rating > 0) {
        activeCount++;
        const filterElement = document.createElement('div');
        filterElement.className = 'active-filter';
        filterElement.innerHTML = `
            Rating: ${filters.rating}+ Stars
            <button onclick="removeRatingFilter()">
                <i class="fas fa-times"></i>
            </button>
        `;
        activeFilters.appendChild(filterElement);
    }

    // Update active filters count
    document.querySelector('.active-filters-count').textContent = activeCount;
}

// Filter removal functions
function removeSearchFilter() {
    filters.search = '';
    searchInput.value = '';
    applyFilters();
}

function removeCategoryFilters() {
    filters.categories = ['all'];
    document.querySelectorAll('input[name="category"]').forEach(input => {
        input.checked = input.value === 'all';
    });
    applyFilters();
}

function removePriceFilter() {
    filters.priceRange = [0, 1000];
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    document.querySelector('.range-min').value = 0;
    document.querySelector('.range-max').value = 1000;
    updatePriceDisplay();
    applyFilters();
}

function removeRatingFilter() {
    filters.rating = 0;
    document.querySelector('input[name="rating"][value="0"]').checked = true;
    applyFilters();
}

// Handle search
function handleSearch(e) {
    filters.search = e.target.value.toLowerCase();
    applyFilters();
}

// Handle category changes
function handleCategoryChange(e) {
    const value = e.target.value;
    
    if (value === 'all') {
        // If "all" is checked, uncheck others and set categories to ['all']
        document.querySelectorAll('input[name="category"]').forEach(input => {
            if (input.value !== 'all') input.checked = false;
        });
        filters.categories = ['all'];
    } else {
        // If a specific category is checked, uncheck "all"
        const allCheckbox = document.querySelector('input[name="category"][value="all"]');
        allCheckbox.checked = false;
        
        if (e.target.checked) {
            filters.categories.push(value);
        } else {
            filters.categories = filters.categories.filter(cat => cat !== value);
        }
        
        // If no categories selected, check "all"
        if (filters.categories.length === 0) {
            allCheckbox.checked = true;
            filters.categories = ['all'];
        }
    }
    
    applyFilters();
}

// Handle rating changes
function handleRatingChange(e) {
    filters.rating = parseInt(e.target.value);
    applyFilters();
}

// Handle availability changes
function handleAvailabilityChange(e) {
    const value = e.target.value;
    
    if (e.target.checked) {
        filters.availability.push(value);
    } else {
        filters.availability = filters.availability.filter(avail => avail !== value);
    }
    
    applyFilters();
}

// Handle price changes
function handlePriceChange() {
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || 1000;
    
    filters.priceRange = [minPrice, maxPrice];
    updateRangeInputs();
    applyFilters();
}

// Handle range changes
function handleRangeChange() {
    const minRange = parseInt(document.querySelector('.range-min').value);
    const maxRange = parseInt(document.querySelector('.range-max').value);
    
    filters.priceRange = [minRange, maxRange];
    updatePriceInputs();
    updatePriceDisplay();
    applyFilters();
}

// Update range inputs based on price inputs
function updateRangeInputs() {
    document.querySelector('.range-min').value = filters.priceRange[0];
    document.querySelector('.range-max').value = filters.priceRange[1];
    updateSliderTrack();
}

// Update price inputs based on range inputs
function updatePriceInputs() {
    document.getElementById('minPrice').value = filters.priceRange[0];
    document.getElementById('maxPrice').value = filters.priceRange[1];
}

// Update price display
function updatePriceDisplay() {
    document.getElementById('minPriceDisplay').textContent = filters.priceRange[0];
    document.getElementById('maxPriceDisplay').textContent = filters.priceRange[1];
    updateSliderTrack();
}

// Update slider track
function updateSliderTrack() {
    const min = filters.priceRange[0];
    const max = filters.priceRange[1];
    const track = document.querySelector('.slider-track');
    if (track) {
        track.style.left = `${(min / 1000) * 100}%`;
        track.style.right = `${100 - (max / 1000) * 100}%`;
    }
}

// Handle quick category selection
function handleQuickCategory(e) {
    e.preventDefault();
    const category = e.currentTarget.dataset.category;
    
    // Set category filter
    filters.categories = [category];
    document.querySelectorAll('input[name="category"]').forEach(input => {
        input.checked = input.value === category;
    });
    
    applyFilters();
    
    // Scroll to products section
    document.querySelector('.products-section').scrollIntoView({
        behavior: 'smooth'
    });
}

// Apply all filters
function applyFilters() {
    const inStockSelected = filters.availability.includes('in-stock');
    const outOfStockSelected = filters.availability.includes('out-of-stock');

    filteredProducts = products.filter(product => {
        // Search filter
        const matchesSearch = !filters.search ||
            product.name.toLowerCase().includes(filters.search) ||
            product.description.toLowerCase().includes(filters.search) ||
            product.tags.some(tag => tag.includes(filters.search));

        // Category filter
        const matchesCategory = filters.categories.includes('all') ||
            filters.categories.includes(product.category);

        // Rating filter
        const matchesRating = product.rating >= filters.rating;

        // Price filter
        const matchesPrice = product.price >= filters.priceRange[0] &&
            product.price <= filters.priceRange[1];

        // Availability filter
        let matchesAvailability = false;

        if (inStockSelected && outOfStockSelected) {
            matchesAvailability = true;
        } else if (inStockSelected) {
            matchesAvailability = product.inStock;
        } else if (outOfStockSelected) {
            matchesAvailability = !product.inStock;
        }

        return matchesSearch && matchesCategory && matchesRating && matchesPrice && matchesAvailability;
    });
    
    currentPage = 1;
    renderProducts();
    updateActiveFilters();
}

// Reset all filters
function resetFilters() {
    // Reset filter state
    filters = {
        search: '',
        categories: ['all'],
        priceRange: [0, 1000],
        rating: 0,
        benefits: [],
        availability: ['in-stock']
    };
    
    // Reset UI elements
    if (searchInput) searchInput.value = '';
    document.querySelectorAll('input[name="category"]').forEach(input => {
        input.checked = input.value === 'all';
    });
    document.querySelector('input[name="rating"][value="0"]').checked = true;
    document.querySelectorAll('input[name="availability"]').forEach(input => {
        input.checked = input.value === 'in-stock';
    });
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    document.querySelector('.range-min').value = 0;
    document.querySelector('.range-max').value = 1000;
    
    updatePriceDisplay();
    applyFilters();
}

// Handle sort change
function handleSortChange() {
    const sortValue = sortSelect.value;
    
    switch (sortValue) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            // Assuming newer products have higher IDs
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case 'popular':
            // Sort by reviews (popularity)
            filteredProducts.sort((a, b) => b.reviews - a.reviews);
            break;
        case 'featured':
        default:
            // Featured products first, then by name
            filteredProducts.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return a.name.localeCompare(b.name);
            });
            break;
    }
    
    currentPage = 1;
    renderProducts();
}

// Handle view change
function handleViewChange(e) {
    const view = e.currentTarget.dataset.view;
    
    if (view === currentView) return;
    
    currentView = view;
    
    // Update active button
    viewButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });
    
    // Update products grid class
    productsGrid.classList.toggle('list-view', view === 'list');
    
    // Re-render products
    renderProducts();
}

// Open quick view modal
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const stars = generateStarRating(product.rating);
    const oldPrice = product.oldPrice ? 
        `<span class="product-old-price">R${product.oldPrice.toFixed(2)}</span>` : '';
    
    modalBody.innerHTML = `
        <div class="quick-view-content">
            <div class="product-gallery">
                <img src="${product.image}" alt="${product.name}" class="main-image">
                <div class="product-badge">${product.badge || 'Premium'}</div>
            </div>
            <div class="product-details">
                <h2>${product.name}</h2>
                <div class="product-meta">
                    <div class="product-rating">
                        <div class="rating-stars">${stars}</div>
                        <span class="rating-value">${product.rating} (${product.reviews} reviews)</span>
                    </div>
                    <div class="product-origin">
                        <i class="fas fa-globe-africa"></i>
                        Sourced from ${product.origin}
                    </div>
                    ${product.organic ? '<div class="organic-badge"><i class="fas fa-leaf"></i> Certified Organic</div>' : ''}
                </div>
                
                <div class="product-price">
                    ${oldPrice}
                    <span class="current-price">R${product.price.toFixed(2)}</span>
                </div>
                
                <p class="product-description">${product.description}</p>
                
                <div class="product-info">
                    <div class="info-section">
                        <h5><i class="fas fa-list"></i> Ingredients</h5>
                        <p>${product.ingredients.join(', ')}</p>
                    </div>
                    <div class="info-section">
                        <h5><i class="fas fa-info-circle"></i> Usage</h5>
                        <p>${product.usage}</p>
                    </div>
                </div>
                
                <div class="add-to-cart-section">
                    <div class="quantity-selector">
                        <button class="quantity-btn minus"><i class="fas fa-minus"></i></button>
                        <input type="number" class="quantity-input" value="1" min="1" max="10">
                        <button class="quantity-btn plus"><i class="fas fa-plus"></i></button>
                    </div>
                    <button class="btn btn-primary add-to-cart-large" 
                            ${!product.inStock ? 'disabled' : ''}>
                        <i class="fas fa-shopping-basket"></i>
                        ${!product.inStock ? 'Out of Stock' : 'Add to Cart - R' + product.price.toFixed(2)}
                    </button>
                    <button class="btn btn-outline wishlist-large" data-id="${product.id}">
                        <i class="${wishlist.includes(product.id) ? 'fas' : 'far'} fa-heart"></i>
                        ${wishlist.includes(product.id) ? 'In Wishlist' : 'Add to Wishlist'}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    const quantityInput = modalBody.querySelector('.quantity-input');
    const minusBtn = modalBody.querySelector('.quantity-btn.minus');
    const plusBtn = modalBody.querySelector('.quantity-btn.plus');
    const addToCartLarge = modalBody.querySelector('.add-to-cart-large');
    const wishlistLarge = modalBody.querySelector('.wishlist-large');
    
    minusBtn.addEventListener('click', () => {
        const value = parseInt(quantityInput.value);
        if (value > 1) quantityInput.value = value - 1;
    });
    
    plusBtn.addEventListener('click', () => {
        const value = parseInt(quantityInput.value);
        if (value < 10) quantityInput.value = value + 1;
    });
    
    addToCartLarge.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        addToCart(product.id, quantity);
        closeQuickView();
    });
    
    wishlistLarge.addEventListener('click', () => {
        toggleWishlist(product.id);
        wishlistLarge.innerHTML = `
            <i class="${wishlist.includes(product.id) ? 'fas' : 'far'} fa-heart"></i>
            ${wishlist.includes(product.id) ? 'In Wishlist' : 'Add to Wishlist'}
        `;
    });
    
    quickViewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close quick view modal
function closeQuickView() {
    quickViewModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Add product to cart
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

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
    
    // Update cart sidebar if it exists
    if (cartItems) {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-basket"></i>
                    <h4>Your wellness cart is empty</h4>
                    <p>Add some natural goodness to get started</p>
                    <button class="btn btn-primary" onclick="toggleCart()">Continue Shopping</button>
                </div>
            `;
            if (cartSubtotal) cartSubtotal.textContent = 'R0.00';
            return;
        }
        
        let subtotal = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">R${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}"><i class="fas fa-minus"></i></button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
                <button class="remove-item" data-id="${item.id}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            cartItems.appendChild(cartItem);
        });
        
        // Add event listeners for cart items
        cartItems.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', () => updateCartQuantity(btn.dataset.id, -1));
        });
        
        cartItems.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', () => updateCartQuantity(btn.dataset.id, 1));
        });
        
        cartItems.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
        });
        
        if (cartSubtotal) cartSubtotal.textContent = `R${subtotal.toFixed(2)}`;
    }
}

// Update cart quantity
function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === parseInt(productId));
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== parseInt(productId));
    }
    
    localStorage.setItem('herbalCart', JSON.stringify(cart));
    updateCartUI();
}

// Remove from cart
function removeFromCart(productId) {
    const item = cart.find(item => item.id === parseInt(productId));
    if (item) {
        cart = cart.filter(item => item.id !== parseInt(productId));
        localStorage.setItem('herbalCart', JSON.stringify(cart));
        updateCartUI();
        showNotification(`${item.name} removed from cart`, 'info');
    }
}

// Toggle cart sidebar
function toggleCart() {
    if (cartSidebar) {
        cartSidebar.classList.toggle('active');
        document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : '';
    }
}

// Toggle wishlist
function toggleWishlist(productId) {
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
        showNotification('Product removed from wishlist', 'info');
    } else {
        wishlist.push(productId);
        showNotification('Product added to wishlist', 'success');
    }
    
    localStorage.setItem('herbalWishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    renderProducts(); // Re-render to update wishlist buttons
}

// Update wishlist UI
function updateWishlistUI() {
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

// Handle newsletter submission
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate API call
    showNotification('Thank you for joining our herbal community!', 'success');
    e.target.reset();
}

// Handle scroll
function handleScroll() {
    // Back to top button
    if (backToTop) {
        if (window.scrollY > 500) {
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

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: var(--shadow-lg);
        z-index: 4000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Get notification icon
function getNotificationIcon(type) {
    const icons = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'warning': 'exclamation-triangle',
        'info': 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Get notification color
function getNotificationColor(type) {
    const colors = {
        'success': '#10b981',
        'error': '#ef4444',
        'warning': '#f59e0b',
        'info': '#3b82f6'
    };
    return colors[type] || '#3b82f6';
}

// Initialize the shop when DOM is loaded
document.addEventListener('DOMContentLoaded', initShop);