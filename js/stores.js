// Stores data
const stores = [
    {
        name: 'Barclays Square Shopping Centre',
        address: 'Shop F37, 296 Justice Mahomed Street, Sunnyside, Pretoria 0012',
        phone: '+27 71 533 6706 / +27 64 502 8037',
        city: 'Pretoria',
        lat: -25.7461,
        lng: 28.1881,
    },
    {
        name: 'Braamfontein Store',
        address: '16 Station Street & De Korte Street, Shop 3 Braamfontein (Behind Wits Art Museum) Johannesburg 2001',
        phone: '+27 71 533 6706 / +27 64 502 8037',
        city: 'Johannesburg',
        lat: -26.1929,
        lng: 28.0305,
    },
    {
        name: 'Jerice Palace Complex',
        address: 'Post Office Street (Opposite Old Hardware City) Behind StarGlass & Coja, Thohoyandou',
        phone: '+27 77 447 5959 / +27 71 533 6706',
        city: 'Thohoyandou',
        lat: -22.9456,
        lng: 30.4848,
    },
    {
        name: 'N1 Business Centre',
        address: 'Shop no 12, N1 Business Centre (Old Musina Hospital, opposite MacDonald) Musina 0900',
        phone: '+27 79 928 0149 / +27 71 533 6706',
        city: 'Musina',
        lat: -22.3486,
        lng: 30.0417,
    },
    {
        name: 'Nzhelele Valley Shopping Centre',
        address: 'R523 Dzanani (Opposite Spar At The Containers) Nzhelele 0993',
        phone: '+27 71 533 6706',
        city: 'Nzhelele',
        lat: -22.9167,
        lng: 30.4167,
    },
    {
        name: 'Dada Square',
        address: 'Shop No 10, Dada Square, 52a Market Street Polokwane 0699',
        phone: '+27 71 533 6706',
        city: 'Polokwane',
        lat: -23.8962,
        lng: 29.4486,
    },
    {
        name: 'Magulani Store',
        address: 'Shop No 02, Magulani, N1 & Commercial Street (Opposite KFC) Louis Trichardt (Makhado) 0920',
        phone: '+27 71 533 6706',
        city: 'Louis Trichardt',
        lat: -23.0439,
        lng: 29.9032,
    },
];

// Global variables
let map;
let markers = [];
let currentFilter = '';
let activeStore = null;

// Initialize the stores page
function initStoresPage() {
    if (!document.querySelector('.stores-page')) return;

    initializeMap();
    renderStoresList();
    setupEventListeners();
}

// Initialize Leaflet map
function initializeMap() {
    // Create map centered on South Africa
    map = L.map('storeMap').setView([-25.7461, 28.1881], 6);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);

    // Add markers for all stores
    addStoreMarkers(stores);
}

// Add markers to the map
function addStoreMarkers(storesToShow) {
    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    storesToShow.forEach(store => {
        const marker = L.marker([store.lat, store.lng])
            .addTo(map)
            .bindPopup(`
                <div>
                    <h3>${store.name}</h3>
                    <p>${store.address}</p>
                    <p><strong>${store.phone}</strong></p>
                    <p><small>${store.city}</small></p>
                </div>
            `);

        marker.store = store;
        markers.push(marker);

        // Add click event to marker
        marker.on('click', function() {
            highlightStore(store);
        });
    });
}

// Render stores list
function renderStoresList(filteredStores = stores) {
    const storesList = document.getElementById('storesList');
    
    if (filteredStores.length === 0) {
        storesList.innerHTML = `
            <div class="no-results">
                <h3>No stores found</h3>
                <p>Try selecting a different city or check back later for new locations.</p>
            </div>
        `;
        return;
    }

    storesList.innerHTML = filteredStores.map(store => `
        <div class="store-item ${activeStore === store ? 'active' : ''}" 
             data-store-id="${store.name.replace(/\s+/g, '-').toLowerCase()}">
            <h3 class="store-name">${store.name}</h3>
            <p class="store-address">${store.address}</p>
            <p class="store-phone">${store.phone}</p>
            <span class="store-city">${store.city}</span>
        </div>
    `).join('');

    // Add click events to store items
    document.querySelectorAll('.store-item').forEach(item => {
        item.addEventListener('click', function() {
            const storeId = this.getAttribute('data-store-id');
            const store = filteredStores.find(s => 
                s.name.replace(/\s+/g, '-').toLowerCase() === storeId
            );
            if (store) {
                highlightStore(store);
                centerMapOnStore(store);
            }
        });
    });
}

// Highlight store in list and show on map
function highlightStore(store) {
    // Remove active class from all stores
    document.querySelectorAll('.store-item').forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to selected store
    const storeElement = document.querySelector(`[data-store-id="${store.name.replace(/\s+/g, '-').toLowerCase()}"]`);
    if (storeElement) {
        storeElement.classList.add('active');
        storeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    activeStore = store;

    // Open popup for the corresponding marker
    markers.forEach(marker => {
        if (marker.store === store) {
            marker.openPopup();
        }
    });
}

// Center map on selected store
function centerMapOnStore(store) {
    map.setView([store.lat, store.lng], 15, {
        animate: true,
        duration: 1
    });
}

// Filter stores by city
function filterStoresByCity(city) {
    currentFilter = city;
    const filteredStores = city ? stores.filter(store => store.city === city) : stores;
    
    renderStoresList(filteredStores);
    addStoreMarkers(filteredStores);

    // Adjust map view based on filtered results
    if (filteredStores.length > 0) {
        if (filteredStores.length === 1) {
            map.setView([filteredStores[0].lat, filteredStores[0].lng], 15);
        } else {
            const group = new L.featureGroup(markers);
            map.fitBounds(group.getBounds().pad(0.1));
        }
    } else {
        map.setView([-25.7461, 28.1881], 6);
    }
}

// Setup event listeners
function setupEventListeners() {
    const cityFilter = document.getElementById('city-filter');
    
    if (cityFilter) {
        cityFilter.addEventListener('change', function() {
            filterStoresByCity(this.value);
        });
    }

    // Keyboard navigation for store items
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            navigateStores(e.key);
        }
    });
}

// Keyboard navigation for stores
function navigateStores(direction) {
    const storeItems = document.querySelectorAll('.store-item');
    if (storeItems.length === 0) return;

    let currentIndex = Array.from(storeItems).findIndex(item => item.classList.contains('active'));
    
    if (direction === 'ArrowDown') {
        currentIndex = (currentIndex + 1) % storeItems.length;
    } else if (direction === 'ArrowUp') {
        currentIndex = currentIndex <= 0 ? storeItems.length - 1 : currentIndex - 1;
    }

    const storeId = storeItems[currentIndex].getAttribute('data-store-id');
    const store = stores.find(s => s.name.replace(/\s+/g, '-').toLowerCase() === storeId);
    
    if (store) {
        highlightStore(store);
        centerMapOnStore(store);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initStoresPage);

// Handle window resize
window.addEventListener('resize', function() {
    if (map) {
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }
});