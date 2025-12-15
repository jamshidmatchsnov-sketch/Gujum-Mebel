// Furniture Data
const furnitureData = {
    'stol-stul': [
        {
            id: 1,
            name: "Picnic-8 Dining Set",
            price: "32,000,000 so'm",
            weight: "200 kg",
            warranty: "3 yil",
            material: "Sun'iy Rattan",
            image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80"
        },
        {
            id: 2,
            name: "Talara Teak Dining Set L",
            price: "22,000,000 so'm",
            weight: "250 kg",
            warranty: "3 yil",
            material: "Tabiiy Tik Yog'ochi",
            image: "https://joygarden.ru/wp-content/uploads/2023/07/talara_dining_set_l_00002.jpg"
        },
        {
            id: 3,
            name: "Rimini Dining Group",
            price: "15,800,000 so'm",
            weight: "180 kg",
            warranty: "2 yil",
            material: "Akatsiya va Arqon",
            image: "https://joygarden.ru/wp-content/uploads/2022/02/rimini_8.jpg"
        },
        {
            id: 4,
            name: "Opal Rattan Set",
            price: "12,500,000 so'm",
            weight: "160 kg",
            warranty: "2 yil",
            material: "Sun'iy Rattan",
            image: "https://joygarden.ru/wp-content/uploads/2022/02/opal_dining_set_215-cm-table_00001-1.jpg"
        },
        {
            id: 5,
            name: "Charlotte Acacia Set",
            price: "14,200,000 so'm",
            weight: "190 kg",
            warranty: "2.5 yil",
            material: "Akatsiya Yog'ochi",
            image: "https://joygarden.ru/wp-content/uploads/2023/07/talara_dining_set_m_00006.jpg"
        },
        {
            id: 6,
            name: "Booka Sofa Dining",
            price: "25,000,000 so'm",
            weight: "300 kg",
            warranty: "3 yil",
            material: "Akatsiya va Arqon",
            image: "https://joygarden.ru/wp-content/uploads/2022/02/booka_sofa_set_high-table_00003.jpg"
        }
    ],
    'argimchoq': [
        {
            id: 7,
            name: "Borgata Hanging Chair",
            price: "5,500,000 so'm",
            weight: "160 kg",
            warranty: "2 yil",
            material: "Sun'iy Rattan",
            image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80"
        },
        {
            id: 8,
            name: "Cocoon Swing Chair",
            price: "3,800,000 so'm",
            weight: "120 kg",
            warranty: "1 yil",
            material: "Po'lat va Rattan",
            image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80"
        },
        {
            id: 9,
            name: "Double Hanging Sofa",
            price: "7,200,000 so'm",
            weight: "250 kg",
            warranty: "2 yil",
            material: "Qalin Rattan",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
        },
        {
            id: 10,
            name: "Garden Swing Lux",
            price: "5,500,000 so'm",
            weight: "300 kg",
            warranty: "3 yil",
            material: "Metall karkas",
            image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80"
        },
        {
            id: 11,
            name: "Rattan Nest Chair",
            price: "3,200,000 so'm",
            weight: "130 kg",
            warranty: "1.5 yil",
            material: "Rattan",
            image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80"
        },
        {
            id: 12,
            name: "Designer Swing",
            price: "4,800,000 so'm",
            weight: "140 kg",
            warranty: "2 yil",
            material: "Premium Rattan",
            image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80"
        }
    ],
    'dam-olish': [
        {
            id: 13,
            name: "Milano Lounge Set",
            price: "74,879,000 so'm",
            weight: "200 kg",
            warranty: "2 yil",
            material: "Sun'iy Rattan",
            image: "https://joygarden.ru/wp-content/uploads/2022/02/milano_lounge_set_white_00001.jpg"
        },
        {
            id: 14,
            name: "Rimini Sun Lounger",
            price: "5,200,000 so'm",
            weight: "120 kg",
            warranty: "1 yil",
            material: "Akatsiya",
            image: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?w=800&q=80"
        },
        {
            id: 15,
            name: "Sunstone Sofa",
            price: "12,500,000 so'm",
            weight: "250 kg",
            warranty: "2 yil",
            material: "Rattan to'qima",
            image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80"
        },
        {
            id: 16,
            name: "Calisto Lounge",
            price: "18,900,000 so'm",
            weight: "300 kg",
            warranty: "3 yil",
            material: "Premium Rattan",
            image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80"
        },
        {
            id: 17,
            name: "Bungalow Teak Sofa",
            price: "22,000,000 so'm",
            weight: "280 kg",
            warranty: "3 yil",
            material: "Tabiiy Tik",
            image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&q=80"
        },
        {
            id: 18,
            name: "Topa Aluminum Sofa",
            price: "16,500,000 so'm",
            weight: "200 kg",
            warranty: "2.5 yil",
            material: "Alyuminiy",
            image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80"
        }
    ]
};

// DOM Elements
const introOverlay = document.getElementById('intro-overlay');
const mainContainer = document.getElementById('main-container');
const productSection = document.getElementById('product-section');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeModal = document.getElementsByClassName('close-modal')[0];
const catBtns = document.querySelectorAll('.cat-btn');

// Intro Animation Logic
window.addEventListener('load', () => {
    setTimeout(() => {
        introOverlay.style.opacity = '0';
        setTimeout(() => {
            introOverlay.style.display = 'none';
            mainContainer.classList.remove('hidden');
            mainContainer.classList.add('fade-in');
            // Load default category
            filterCategory('stol-stul');
        }, 1500);
    }, 6000); // 6 seconds for smoke/text animation
});

// Category Filter Logic
function filterCategory(category) {
    // Update active button state
    catBtns.forEach(btn => {
        if (btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Clear current products
    productSection.innerHTML = '';

    // Render new products
    const products = furnitureData[category];
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="card-image-container" onclick="openModal('${product.image}', '${product.name}')">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="card-details">
                <h3>${product.name}</h3>
                <div class="info-row">
                    <span>Narxi:</span>
                    <span>${product.price}</span>
                </div>
                <div class="info-row">
                    <span>Ko'tarish qobiliyati:</span>
                    <span>${product.weight}</span>
                </div>
                <div class="info-row">
                    <span>Kafolat:</span>
                    <span>${product.warranty}</span>
                </div>
                <div class="info-row">
                    <span>Material:</span>
                    <span>${product.material}</span>
                </div>
            </div>
        `;
        productSection.appendChild(card);
    });
}

// Modal Logic
function openModal(imgSrc, caption) {
    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = caption;
}

closeModal.onclick = function () {
    modal.style.display = "none";
}

modal.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
