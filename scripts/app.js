// Sample Products Data
const products = [
  {
    id: 1,
    name: {
      en: "Digital Dental X-Ray Sensor",
      ar: "جهاز تصوير الأسنان الرقمي",
      he: "חיישן צילום שיניים דיגיטלי"
    },
    category: "equipment",
    image: "images/digital-xray-sensor.jpg",
    description: {
      en: "High-resolution digital X-ray sensor for precise dental imaging",
      ar: "جهاز تصوير أشعة سينية رقمي عالي الدقة لتصوير الأسنان بدقة",
      he: "חיישן צילום שיניים דיגיטלי ברזולוציה גבוהה לצילום מדויק"
    }
  },
  {
    id: 2,
    name: {
      en: "Dental Composite Resin Kit",
      ar: "مجموعة راتنج مركب للأسنان",
      he: "ערכת רזין מרוכב לשיניים"
    },
    category: "consumables",
    image: "images/composite-resin-kit.jpg",
    description: {
      en: "Professional-grade composite resin for dental restorations",
      ar: "راتنج مركب من الدرجة المهنية لإجراءات ترميم الأسنان",
      he: "רזין מרוכב ברמה מקצועית לשחזורי שיניים"
    }
  },
  {
    id: 3,
    name: {
      en: "Dental Handpiece Drill Set",
      ar: "مجموعة drills أطباء الأسنان",
      he: "ערכת מקדחי יד לשיניים"
    },
    category: "instruments",
    image: "images/handpiece-drill-set.jpg",
    description: {
      en: "Precision dental handpieces with multiple drill attachments",
      ar: "أدوات يدوية دقيقة لطب الأسنان مع عدة مرفقات drills",
      he: "כלי יד מדויקים לשיניים עם מספר ראשי מקדח"
    }
  },
  {
    id: 4,
    name: {
      en: "Autoclave Sterilizer 18L",
      ar: "جهاز تعقيم أوتوكلاف 18 لتر",
      he: "מכשיר עיקור אוטוקלב 18 ליטר"
    },
    category: "sterilization",
    image: "images/autoclave-sterilizer.jpg",
    description: {
      en: "Professional autoclave sterilizer for dental instruments",
      ar: "جهاز تعقيم أوتوكلاف مهني لأدوات الأسنان",
      he: "מכשיר עיקור אוטוקלב מקצועי לכלי שיניים"
    }
  },
  {
    id: 5,
    name: {
      en: "Dental Syringe Tips (100 pack)",
      ar: "نصائح حقن الأسنان (100 قطعة)",
      he: "טיפי הזרקה לשיניים (100 יחידות)"
    },
    category: "consumables",
    image: "images/syringe-tips.jpg",
    description: {
      en: "Sterile disposable syringe tips for dental procedures",
      ar: "نصائح حقن معقمة يمكن التخلص منها لإجراءات الأسنان",
      he: "טיפי הזרקה סטריליים חד-פעמיים לטיפולי שיניים"
    }
  },
  {
    id: 6,
    name: {
      en: "Dental Examination Mirror Set",
      ar: "مجموعة مرايا فحص الأسنان",
      he: "ערכת מראות בדיקה לשיניים"
    },
    category: "instruments",
    image: "images/examination-mirror.jpg",
    description: {
      en: "High-quality dental mirrors for patient examination",
      ar: "مرايا أسنان عالية الجودة لفحص المرضى",
      he: "מראות שיניים איכותיות לבדיקת מטופלים"
    }
  },
  {
    id: 7,
    name: {
      en: "LED Dental Curing Light",
      ar: "جهاز LED لمعالجة الأسنان",
      he: "מכשיר LED לריפוי שיניים"
    },
    category: "equipment",
    image: "images/curing-light.jpg",
    description: {
      en: "LED curing light for dental composite materials",
      ar: "جهاز LED لمعالجة المواد المركبة للأسنان",
      he: "מכשיר LED לריפוי חומרים מרוכבים לשיניים"
    }
  },
  {
    id: 8,
    name: {
      en: "Dental Gauze Pads (500 pack)",
      ar: "ضمادات شاش الأسنان (500 قطعة)",
      he: "פדי גזה לשיניים (500 יחידות)"
    },
    category: "consumables",
    image: "images/gauze-pads.jpg",
    description: {
      en: "Sterile gauze pads for dental procedures and wound care",
      ar: "ضمادات شاش معقمة لإجراءات الأسنان ورعاية الجروح",
      he: "פדי גזה סטריליים לטיפולי שיניים וטיפול בפצעים"
    }
  },
  {
    id: 9,
    name: {
      en: "Ultrasonic Cleaner Tank",
      ar: "خزان منظف بالموجات فوق الصوتية",
      he: "מיכל ניקוי אולטרסוני"
    },
    category: "sterilization",
    image: "images/ultrasonic-cleaner.jpg",
    description: {
      en: "Ultrasonic cleaning tank for dental instruments",
      ar: "خزان تنظيف بالموجات فوق الصوتية لأدوات الأسنان",
      he: "מיכל ניקוי אולטרסוני לכלי שיניים"
    }
  },
  {
    id: 10,
    name: {
      en: "Dental Forceps Set",
      ar: "مجموعة كماشة الأسنان",
      he: "ערכת צבתות לשיניים"
    },
    category: "instruments",
    image: "images/forceps-set.jpg",
    description: {
      en: "Professional dental forceps for extractions and procedures",
      ar: "كماشة أسنان مهنية للخلع والإجراءات",
      he: "צבתות שיניים מקצועיות לחילוץ וטיפולים"
    }
  },
  {
    id: 11,
    name: {
      en: "Dental Chair Unit",
      ar: "وحدة كرسي الأسنان",
      he: "יחידת כיסא שיניים"
    },
    category: "equipment",
    image: "images/dental-chair.jpg",
    description: {
      en: "Complete dental chair unit with integrated systems",
      ar: "وحدة كرسي أسنان كاملة مع أنظمة متكاملة",
      he: "יחידת כיסא שיניים מלאה עם מערכות משולבות"
    }
  },
  {
    id: 12,
    name: {
      en: "Dental Impression Trays",
      ar: "صواني طبعة الأسنان",
      he: "מגשי רושם לשיניים"
    },
    category: "consumables",
    image: "images/impression-trays.jpg",
    description: {
      en: "Precision dental impression trays in various sizes",
      ar: "صواني طبعة أسنان دقيقة بأحجام مختلفة",
      he: "מגשי רושם שיניים מדויקים בגדלים שונים"
    }
  }
];

// Global State
let currentLanguage = 'ar';
let cart = [];
let currentCategory = 'all';

// DOM Elements
const elements = {
  productGrid: document.getElementById('productGrid'),
  quoteSidebar: document.getElementById('quoteSidebar'),
  overlay: document.getElementById('overlay'),
  quoteCount: document.getElementById('quoteCount'),
  emptyCart: document.getElementById('emptyCart'),
  quoteBody: document.getElementById('quoteBody'),
  totalItems: document.getElementById('totalItems'),
  viewQuoteBtn: document.getElementById('viewQuoteBtn'),
  closeQuoteBtn: document.getElementById('closeQuote'),
  requestQuoteBtn: document.getElementById('requestQuoteBtn')
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  setLanguage('ar');
  initializeEventListeners();
  renderProducts();
  updateCartDisplay();
  setLanguage('ar');
});

// Event Listeners
function initializeEventListeners() {
  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });

  // Category filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      setCategory(category);
    });
  });

  // Quote sidebar controls
  elements.viewQuoteBtn.addEventListener('click', toggleQuoteSidebar);
  elements.closeQuoteBtn.addEventListener('click', closeQuoteSidebar);
  elements.overlay.addEventListener('click', closeQuoteSidebar);
  elements.requestQuoteBtn.addEventListener('click', requestQuote);

  // Prevent sidebar close when clicking inside
  elements.quoteSidebar.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

// Language Management
function setLanguage(lang) {
  currentLanguage = lang;
  
  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }
  });

  // Update page direction
  document.documentElement.setAttribute('dir', lang === 'ar' || lang === 'he' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);

  // Update all text elements
  updateTextContent();

  // Re-render products with new language
  renderProducts();
  renderCart();
}

function updateTextContent() {
  // Update all elements with data attributes
  document.querySelectorAll('[data-en], [data-ar], [data-he]').forEach(element => {
    const text = element.dataset[currentLanguage];
    if (text) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = text;
      } else {
        element.textContent = text;
      }
    }
  });
}

// Product Management
function renderProducts() {
  const filteredProducts = currentCategory === 'all' 
    ? products 
    : products.filter(product => product.category === currentCategory);

  elements.productGrid.innerHTML = '';

  filteredProducts.forEach(product => {
    const productCard = createProductCard(product);
    elements.productGrid.appendChild(productCard);
  });
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card fade-in';
  
  const imageUrl = product.image;
  const productName = product.name[currentLanguage];
  const productDescription = product.description[currentLanguage];

  card.innerHTML = `
    <img src="${imageUrl}" alt="${productName}" class="product-image" 
         onerror="this.src='images/placeholder-dental.jpg'">
    <div class="product-category">${getCategoryName(product.category)}</div>
    <h3 class="product-name">${productName}</h3>
    
    <div class="quantity-input-container">
      <span class="quantity-label" data-en="Quantity:" data-ar="الكمية:" data-he="כמות:">Quantity:</span>
      <div class="quantity-controls">
        <button class="quantity-btn-small" onclick="updateCardQuantity(${product.id}, -1)">-</button>
        <input type="number" class="quantity-input" id="qty-${product.id}" value="1" min="1" max="99" readonly>
        <button class="quantity-btn-small" onclick="updateCardQuantity(${product.id}, 1)">+</button>
      </div>
    </div>
    
    <button class="add-to-quote-btn" onclick="addToCart(${product.id})">
      <i class="fas fa-plus"></i>
      <span data-en="Add to Quote" data-ar="أضف إلى العرض" data-he="הוסף להצעה">Add to Quote</span>
    </button>
  `;

  return card;
}

function getCategoryName(category) {
  const categories = {
    all: { en: 'All Products', ar: 'جميع المنتجات', he: 'כל המוצרים' },
    instruments: { en: 'Instruments', ar: 'الأدوات', he: 'כלים' },
    consumables: { en: 'Consumables', ar: 'المواد الاستهلاكية', he: 'צריכה' },
    equipment: { en: 'Equipment', ar: 'المعدات', he: 'ציוד' },
    sterilization: { en: 'Sterilization', ar: 'التعقيم', he: 'עיקור' }
  };
  return categories[category][currentLanguage] || category;
}

function setCategory(category) {
  currentCategory = category;
  
  // Update active filter button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    }
  });

  renderProducts();
}

// Cart Management
function addToCart(productId) {
  // Get the selected quantity from the product card
  const quantityInput = document.getElementById(`qty-${productId}`);
  const selectedQuantity = parseInt(quantityInput.value) || 1;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += selectedQuantity;
  } else {
    const product = products.find(p => p.id === productId);
    cart.push({
      ...product,
      quantity: selectedQuantity
    });
  }

  updateCartDisplay();
  showAddToCartAnimation();
  
  // Reset quantity to 1 after adding to cart
  quantityInput.value = 1;
}

// Update quantity in product card
function updateCardQuantity(productId, change) {
  const quantityInput = document.getElementById(`qty-${productId}`);
  let currentValue = parseInt(quantityInput.value) || 1;
  let newValue = currentValue + change;
  
  // Ensure quantity stays within bounds
  if (newValue < 1) newValue = 1;
  if (newValue > 99) newValue = 99;
  
  quantityInput.value = newValue;
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartDisplay();
}

function updateQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCartDisplay();
    }
  }
}

function updateCartDisplay() {
  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  elements.quoteCount.textContent = totalItems;
  elements.quoteCount.style.display = totalItems > 0 ? 'flex' : 'none';

  // Update total items text
  const itemsText = currentLanguage === 'ar' ? 'عنصر' : 
                   currentLanguage === 'he' ? 'פריט' : 'items';
  elements.totalItems.textContent = `${totalItems} ${itemsText}`;

  renderCart();
}

function renderCart() {
  if (cart.length === 0) {
    elements.emptyCart.style.display = 'block';
    elements.quoteFooter.style.display = 'none';
    return;
  }

  elements.emptyCart.style.display = 'none';
  elements.quoteFooter.style.display = 'block';

  const cartItemsHTML = cart.map(item => {
    const productName = item.name[currentLanguage];
    return `
      <div class="quote-item">
        <img src="${item.image}" alt="${productName}" class="quote-item-image" 
             onerror="this.src='images/placeholder-dental.jpg'">
        <div class="quote-item-details">
          <div class="quote-item-name">${productName}</div>
          <div class="quote-item-controls">
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
            <span class="quantity-display">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Replace cart body content while preserving empty state
  const existingEmptyCart = elements.quoteBody.querySelector('.empty-cart');
  if (existingEmptyCart) {
    existingEmptyCart.remove();
  }
  
  elements.quoteBody.insertAdjacentHTML('beforeend', cartItemsHTML);
}

// Quote Sidebar Management
function toggleQuoteSidebar() {
  if (cart.length === 0) return;
  
  elements.quoteSidebar.classList.toggle('active');
  elements.overlay.classList.toggle('active');
}

function closeQuoteSidebar() {
  elements.quoteSidebar.classList.remove('active');
  elements.overlay.classList.remove('active');
}

// Quote Request
function requestQuote() {
  if (cart.length === 0) return;

  // Create Google Forms URL with pre-filled data
  const formUrl = "https://forms.gle/YOUR_GOOGLE_FORM_ID";
  
  // Prepare cart summary for the form
  const cartSummary = cart.map(item => {
    const name = item.name[currentLanguage];
    return `${name} (Qty: ${item.quantity})`;
  }).join('\n');

  // Create WhatsApp message
  const whatsappMessage = `Hello! I would like to request a quotation for the following dental supplies:\n\n${cartSummary}\n\nPlease provide pricing and availability information.\n\nThank you!`;
  const whatsappUrl = `https://wa.me/970591234567?text=${encodeURIComponent(whatsappMessage)}`;
  
  // For now, redirect to WhatsApp. In production, this would go to Google Forms
  window.open(whatsappUrl, '_blank');
}

// Animations and UX
function showAddToCartAnimation() {
  const cartBtn = elements.viewQuoteBtn;
  cartBtn.style.transform = 'scale(1.1)';
  setTimeout(() => {
    cartBtn.style.transform = 'scale(1)';
  }, 200);
}

// Scroll to Products Section
function scrollToProducts() {
  document.getElementById('catalog').scrollIntoView({
    behavior: 'smooth'
  });
}

// WhatsApp Integration
function initializeWhatsApp() {
  const whatsappBtn = document.getElementById('whatsappBtn');
  let isScrolled = false;
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const heroHeight = document.querySelector('.hero').offsetHeight;
    
    if (scrollPosition > heroHeight && !isScrolled) {
      whatsappBtn.style.opacity = '1';
      whatsappBtn.style.visibility = 'visible';
      isScrolled = true;
    } else if (scrollPosition <= heroHeight && isScrolled) {
      whatsappBtn.style.opacity = '0.7';
      whatsappBtn.style.visibility = 'visible';
      isScrolled = false;
    }
  });
}

// Mobile Navigation (if needed)
function initializeMobileNav() {
  // Add mobile navigation logic if required
  // This can be expanded based on specific mobile requirements
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
  initializeWhatsApp();
  initializeMobileNav();
});

// Export functions for global access
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.updateCardQuantity = updateCardQuantity;
window.setLanguage = setLanguage;
window.scrollToProducts = scrollToProducts;
