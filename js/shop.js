// Products data
const products = [
    {
        id: 1,
        name: 'Go Down Herb (Ndaa)',
        price: 150,
        image: 'images/product/godown.jpg',
        description: 'Premium herbal mixture drink for wellness. Our signature product made from traditional South African herbs.',
        category: 'Beverages',
        quantity: 50,
        rating: 4.5,
        reviewCount: 24,
        inStock: true
    },
    {
        id: 2,
        name: 'Silent Herb (Ndaa)',
        price: 250,
        image: 'images/product/silentHerb.jpg',
        description: 'Effective herbal beverage for health. Special formula with powerful natural properties.',
        category: 'Beverages',
        quantity: 30,
        rating: 4.8,
        reviewCount: 36,
        inStock: true
    },
    {
        id: 3,
        name: 'Go Down Mpesu',
        price: 50,
        image: 'images/product/mpesu.jpg',
        description: 'Traditional cleansing herb mixture for natural body purification and wellness.',
        category: 'Beverages',
        quantity: 40,
        rating: 4.3,
        reviewCount: 18,
        inStock: true
    },
    {
        id: 4,
        name: 'Green Shirt',
        price: 200,
        image: 'images/merch/green-shirt.png',
        description: 'Comfortable green shirt with Go Down Herbs logo. 100% cotton.',
        category: 'Merchandise',
        quantity: 20,
        rating: 4.2,
        reviewCount: 15,
        inStock: true
    },
    {
        id: 5,
        name: 'Black Shirt',
        price: 200,
        image: 'images/merch/black-shirt.png',
        description: 'Stylish black shirt with Go Down Herbs logo. Premium quality fabric.',
        category: 'Merchandise',
        quantity: 25,
        rating: 4.4,
        reviewCount: 22,
        inStock: true
    },
    {
        id: 6,
        name: 'White Shirt',
        price: 200,
        image: 'images/merch/white-shirt.png',
        description: 'Classic white shirt with Go Down Herbs logo. Perfect for everyday wear.',
        category: 'Merchandise',
        quantity: 15,
        rating: 4.1,
        reviewCount: 11,
        inStock: true
    },
    {
        id: 7,
        name: 'Cooler Cap',
        price: 150,
        image: 'images/merch/cap-cooler.png',
        description: 'Cooler cap for outdoor activities. Features our herbal-inspired design.',
        category: 'Merchandise',
        quantity: 35,
        rating: 4.6,
        reviewCount: 29,
        inStock: true
    },
    {
        id: 8,
        name: 'Herbal Oil',
        price: 300,
        image: 'images/products/oil.png',
        description: 'Pure herbal oil for various uses. Extracted from natural South African plants.',
        category: 'Health Products',
        quantity: 10,
        rating: 4.7,
        reviewCount: 31,
        inStock: true
    },
    {
        id: 9,
        name: 'Natural Cleaner',
        price: 120,
        image: 'images/product/cleaner.png',
        description: 'Eco-friendly natural cleaner made from herbal extracts. Safe for home use.',
        category: 'Health Products',
        quantity: 60,
        rating: 4.5,
        reviewCount: 24,
        inStock: true
    },
    {
        id: 10,
        name: 'Blue Refreshment',
        price: 180,
        image: 'images/products/blue-refreshment.png',
        description: 'Refreshing blue herbal drink. Perfect for hot days and wellness routines.',
        category: 'Beverages',
        quantity: 45,
        rating: 4.9,
        reviewCount: 47,
        inStock: true
    }
];

// Global variables
let currentCategory = 'all';
let selectedProduct = null;
let currentView = 'grid';
let currentPage = 1;
const productsPerPage = 9;
let filteredProducts = [...products];
let comparedProducts = [];
let currentSort = 'featured';

// Initialize the shop page
function initShopPage() {
    if (!document.querySelector('.shop-page')) return;

    renderProducts();
    setupEventListeners();
    updateCartCount();
    updateResultsCount();
}

// Render products based on current filter, sort, and view
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    // Apply filters and sorting
    filterProducts();
    sortProducts();
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <h3>No products found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        renderPagination();
        return;
    }

    // Set grid/list view class
    productsGrid.className = currentView === 'grid' ? 'products-grid' : 'products-list';

    // Render products
    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card ${currentView === 'list' ? 'list-view' : ''}" data-product-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                ${!product.inStock ? '<div class="out-of-stock-badge">Out of Stock</div>' : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                    <span class="rating-count">(${product.reviewCount})</span>
                </div>
                <div class="product-price">R${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary add-to-cart" ${!product.inStock ? 'disabled' : ''}>
                        ${!product.inStock ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                    <button class="wishlist-btn" title="Add to Wishlist">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="quick-view-btn" title="Quick View">
                        <i class="far fa-eye"></i>
                    </button>
                    <button class="compare-btn" title="Compare Product">
                        <i class="fas fa-balance-scale"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners to product cards
    setupProductCardEvents();
    
    // Render pagination
    renderPagination();
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
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

// Setup event listeners for product cards
function setupProductCardEvents() {
    document.querySelectorAll('.product-card').forEach(card => {
        const productId = parseInt(card.getAttribute('data-product-id'));
        const product = products.find(p => p.id === productId);
        
        if (!product) return;

        const addToCartBtn = card.querySelector('.add-to-cart');
        const wishlistBtn = card.querySelector('.wishlist-btn');
        const quickViewBtn = card.querySelector('.quick-view-btn');
        const compareBtn = card.querySelector('.compare-btn');

        // Add to cart
        addToCartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product.id);
        });

        // Wishlist
        wishlistBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleWishlist(product.id, wishlistBtn);
        });

        // Quick view
        quickViewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openProductModal(product);
        });

        // Compare
        compareBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCompare(product, compareBtn);
        });

        // Card click for quick view
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.product-actions')) {
                openProductModal(product);
            }
        });
    });
}

// Filter products based on selected filters
function filterProducts() {
    // Start with all products
    filteredProducts = [...products];
    
    // Category filter
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
        .map(cb => cb.value);
    
    if (!selectedCategories.includes('all')) {
        filteredProducts = filteredProducts.filter(product => 
            selectedCategories.includes(product.category)
        );
    }
    
    // Rating filter
    const minRating = parseFloat(document.querySelector('input[name="rating"]:checked')?.value || 0);
    if (minRating > 0) {
        filteredProducts = filteredProducts.filter(product => product.rating >= minRating);
    }
    
    // Availability filter
    const selectedAvailability = Array.from(document.querySelectorAll('input[name="availability"]:checked'))
        .map(cb => cb.value);
    
    if (selectedAvailability.length === 1) {
        if (selectedAvailability.includes('in-stock')) {
            filteredProducts = filteredProducts.filter(product => product.inStock);
        } else if (selectedAvailability.includes('out-of-stock')) {
            filteredProducts = filteredProducts.filter(product => !product.inStock);
        }
    }
    
    // Price filter
    const minPrice = parseFloat(document.getElementById('minPrice')?.value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice')?.value) || Infinity;
    
    if (minPrice > 0 || maxPrice < Infinity) {
        filteredProducts = filteredProducts.filter(product => 
            product.price >= minPrice && product.price <= maxPrice
        );
    }
    
    // Search filter
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
    }
}

// Sort products based on selected sort option
function sortProducts() {
    switch(currentSort) {
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
        default:
            // Featured - no sorting or custom logic
            break;
    }
}

// Render pagination
function renderPagination() {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    if (currentPage > 1) {
        paginationHTML += `<button class="pagination-btn" data-page="${currentPage - 1}">Previous</button>`;
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (
            i === 1 || 
            i === totalPages || 
            (i >= currentPage - 1 && i <= currentPage + 1)
        ) {
            paginationHTML += `
                <button class="pagination-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">
                    ${i}
                </button>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }
    }
    
    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `<button class="pagination-btn" data-page="${currentPage + 1}">Next</button>`;
    }
    
    pagination.innerHTML = paginationHTML;
    
    // Add event listeners to pagination buttons
    pagination.querySelectorAll('.pagination-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentPage = parseInt(btn.getAttribute('data-page'));
            renderProducts();
            updateResultsCount();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Update results count
function updateResultsCount() {
    const resultsCount = document.getElementById('resultsCount');
    if (!resultsCount) return;
    
    const startIndex = (currentPage - 1) * productsPerPage + 1;
    const endIndex = Math.min(currentPage * productsPerPage, filteredProducts.length);
    resultsCount.textContent = `Showing ${startIndex}-${endIndex} of ${filteredProducts.length} products`;
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
    document.getElementById('modalProductPrice').textContent = `R${product.price.toFixed(2)}`;
    
    // Set up add to cart button in modal
    const addToCartBtn = document.getElementById('addToCartBtn');
    addToCartBtn.onclick = () => addToCart(product.id);
    if (!product.inStock) {
        addToCartBtn.disabled = true;
        addToCartBtn.textContent = 'Out of Stock';
    } else {
        addToCartBtn.disabled = false;
        addToCartBtn.textContent = 'Add to Cart';
    }
    
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
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart(cart);
    updateCartCount();
    
    // Show success message
    showMessage('Product added to cart!', 'success');
}

// Toggle wishlist
function toggleWishlist(productId, button) {
    const icon = button.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        button.classList.add('active');
        showMessage('Product added to wishlist!', 'success');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        button.classList.remove('active');
        showMessage('Product removed from wishlist!', 'info');
    }
}

// Add to compare
function addToCompare(product, button) {
    if (comparedProducts.some(p => p.id === product.id)) {
        // Remove from compare
        comparedProducts = comparedProducts.filter(p => p.id !== product.id);
        button.classList.remove('active');
        showMessage('Product removed from comparison!', 'info');
    } else {
        // Add to compare (max 3 products)
        if (comparedProducts.length >= 3) {
            showMessage('You can compare up to 3 products at a time', 'info');
            return;
        }
        comparedProducts.push(product);
        button.classList.add('active');
        showMessage('Product added to comparison!', 'success');
    }
    
    updateCompareBar();
}

// Update compare bar
function updateCompareBar() {
    const compareBar = document.getElementById('compareBar');
    const compareItems = document.getElementById('compareItems');
    
    if (comparedProducts.length === 0) {
        compareBar.classList.remove('active');
        return;
    }
    
    compareBar.classList.add('active');
    compareItems.innerHTML = '';
    
    comparedProducts.forEach(product => {
        const compareItem = document.createElement('div');
        compareItem.className = 'compare-item';
        compareItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="compare-item-name">${product.name}</div>
            <button class="remove-compare" data-id="${product.id}">
                <i class="fas fa-times"></i>
            </button>
        `;
        compareItems.appendChild(compareItem);
    });
    
    // Add event listeners to remove buttons
    compareItems.querySelectorAll('.remove-compare').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            comparedProducts = comparedProducts.filter(p => p.id !== productId);
            updateCompareBar();
            
            // Update the compare button in the product card
            const productCard = document.querySelector(`.product-card[data-id="${productId}"]`);
            if (productCard) {
                const compareBtn = productCard.querySelector('.compare-btn');
                compareBtn.classList.remove('active');
            }
            
            showMessage('Product removed from comparison!', 'info');
        });
    });
}

// Clear compare
function clearCompare() {
    comparedProducts = [];
    updateCompareBar();
    
    // Update all compare buttons
    document.querySelectorAll('.compare-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    showMessage('Comparison cleared!', 'info');
}

// Show compare modal
function showCompareModal() {
    if (comparedProducts.length < 2) {
        showMessage('Please select at least 2 products to compare', 'info');
        return;
    }
    
    // Create comparison table
    const comparisonHTML = `
        <div class="comparison-table">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        ${comparedProducts.map(product => `
                            <th>
                                <img src="${product.image}" alt="${product.name}" class="compare-product-image">
                                <div class="compare-product-name">${product.name}</div>
                            </th>
                        `).join('')}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Price</td>
                        ${comparedProducts.map(product => `<td>R${product.price.toFixed(2)}</td>`).join('')}
                    </tr>
                    <tr>
                        <td>Rating</td>
                        ${comparedProducts.map(product => `<td>${product.rating} ★ (${product.reviewCount} reviews)</td>`).join('')}
                    </tr>
                    <tr>
                        <td>Category</td>
                        ${comparedProducts.map(product => `<td>${product.category}</td>`).join('')}
                    </tr>
                    <tr>
                        <td>Stock</td>
                        ${comparedProducts.map(product => `<td>${product.quantity} in stock</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    
    // Show comparison in modal (you might want to create a separate modal for this)
    showMessage(`Comparing ${comparedProducts.map(p => p.name).join(', ')} - check the console for details`, 'info');
    console.log('Comparison Data:', comparedProducts);
}

// Apply filters
function applyFilters() {
    currentPage = 1;
    renderProducts();
    updateResultsCount();
}

// Reset filters
function resetFilters() {
    // Reset search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    
    // Reset sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.value = 'featured';
    currentSort = 'featured';
    
    // Reset category filters
    document.querySelectorAll('input[name="category"]').forEach(cb => {
        if (cb.value === 'all') cb.checked = true;
        else cb.checked = false;
    });
    
    // Reset rating filters
    document.querySelectorAll('input[name="rating"]').forEach(rb => {
        if (rb.value === '0') rb.checked = true;
        else rb.checked = false;
    });
    
    // Reset availability filters
    document.querySelectorAll('input[name="availability"]').forEach(cb => {
        if (cb.value === 'in-stock') cb.checked = true;
        else cb.checked = false;
    });
    
    // Reset price filters
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    if (minPrice) minPrice.value = '';
    if (maxPrice) maxPrice.value = '';
    
    // Reset view
    const gridViewBtn = document.querySelector('.view-btn.grid-view');
    const listViewBtn = document.querySelector('.view-btn.list-view');
    if (gridViewBtn && listViewBtn) {
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        currentView = 'grid';
    }
    
    filteredProducts = [...products];
    currentPage = 1;
    renderProducts();
    updateResultsCount();
    
    showMessage('Filters reset!', 'info');
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
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
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
            if (document.body.contains(messageEl)) {
                document.body.removeChild(messageEl);
            }
        }, 300);
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Filter toggle (mobile)
    const filterToggle = document.getElementById('filterToggle');
    const shopSidebar = document.getElementById('shopSidebar');

    if (filterToggle && shopSidebar) {
        filterToggle.addEventListener('click', function() {
            shopSidebar.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Collapsible filter sections
    document.querySelectorAll('.filter-title').forEach(title => {
        title.addEventListener('click', function() {
            this.classList.toggle('collapsed');
            const options = this.nextElementSibling;
            if (options) {
                options.style.display = options.style.display === 'none' ? 'flex' : 'none';
            }
        });
    });

    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            currentPage = 1;
            renderProducts();
            updateResultsCount();
        });
    }
    
    // Sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            renderProducts();
        });
    }
    
    // View toggle
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            viewButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentView = this.getAttribute('data-view');
            renderProducts();
        });
    });
    
    // Filter application
    const applyFiltersBtn = document.getElementById('applyFilters');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', applyFilters);
    }
    
    const resetFiltersBtn = document.getElementById('resetFilters');
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', resetFilters);
    }
    
    const applyPriceFilterBtn = document.getElementById('applyPriceFilter');
    if (applyPriceFilterBtn) {
        applyPriceFilterBtn.addEventListener('click', applyFilters);
    }
    
    // Compare functionality
    const clearCompareBtn = document.getElementById('clearCompare');
    if (clearCompareBtn) {
        clearCompareBtn.addEventListener('click', clearCompare);
    }
    
    const compareProductsBtn = document.getElementById('compareProducts');
    if (compareProductsBtn) {
        compareProductsBtn.addEventListener('click', showCompareModal);
    }
    
    // Modal close button
    const modalClose = document.getElementById('modalClose');
    if (modalClose) {
        modalClose.addEventListener('click', closeProductModal);
    }

    // Add to cart button in modal
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            if (selectedProduct) {
                addToCart(selectedProduct.id);
                closeProductModal();
            }
        });
    }

    // Close modal when clicking outside
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeProductModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProductModal();
        }
    });
}

// Cart functions (assuming these exist in cart.js)
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initShopPage);
