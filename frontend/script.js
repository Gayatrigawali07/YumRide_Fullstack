// ============================================================
// YumRide — script.js
// ============================================================

// ============ DATA ============
const RESTAURANTS = [
  { id: 1, name: "Spice Garden", cuisine: "Indian • North Indian",image: "https://1.bp.blogspot.com/-sxUJgfA6F5M/XWoeXl5nWFI/AAAAAAAAl48/TuTu7iwWrCQyvtnKHdtRnviUBuHeLqvAACLcBGAs/s1600/P1540727_edited.jpg", rating: 4.5, time: "25-35 min", price: "₹200 for two", tag: "BESTSELLER", open: true, category: "Indian",
    menu: [
      { id: 101, name: "Paneer Butter Masala", desc: "Rich creamy tomato gravy with soft paneer", price: 220, emoji: "🧆",image: "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-Butter-Masala-10.jpg", cat: "Main Course" },
      { id: 102, name: "Dal Tadka", desc: "Yellow lentils tempered with ghee & spices", price: 150, emoji: "🥣",image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/dal-tadka-1024x1536.jpg", cat: "Main Course" },
      { id: 103, name: "Butter Naan", desc: "Soft fluffy naan with real butter", price: 45, emoji: "🫓",image: "https://tse3.mm.bing.net/th/id/OIP.44yX7nFF5hvjQeT3KM3dMgHaKM?pid=Api&h=220&P=0", cat: "Breads" },
      { id: 104, name: "Mango Lassi", desc: "Sweet chilled mango yogurt drink", price: 80, emoji: "🥭", image:"https://tse1.mm.bing.net/th/id/OIP.HkgQYA5VrdelnBFs19BNmQHaLU?pid=Api&h=220&P=0",cat: "Drinks" },
      { id: 105, name: "Gulab Jamun", desc: "Soft milk-solid balls in sugar syrup", price: 90, emoji: "🍮",image: "https://tse3.mm.bing.net/th/id/OIP.B32bansRI7RS3yfbUSEBNwHaHa?pid=Api&h=220&P=0", cat: "Desserts" },
      { id: 106, name: "Samosa (2 pcs)", desc: "Crispy fried pastry with spiced potato filling", price: 60, emoji: "🥟", image: "https://tse3.mm.bing.net/th/id/OIP.lOirSdaplH9JHVhdi2Hq2QHaE8?pid=Api&h=220&P=0",cat: "Starters" },
    ]
  },
  { id: 2, name: "Dragon Palace", cuisine: "Chinese • Asian",image: "https://media-cdn.tripadvisor.com/media/photo-s/17/b8/e8/28/dragon-palace-northbridge.jpg",  rating: 4.2, time: "20-30 min", price: "₹350 for two", tag: "TRENDING", open: true, category: "Chinese",
    menu: [
      { id: 201, name: "Veg Hakka Noodles", desc: "Stir-fried noodles with vegetables in soy sauce", price: 160, emoji: "🍜",image:"https://tse3.mm.bing.net/th/id/OIP.SXtS5tDhI4RypeoriVKIKgHaE8?pid=Api&h=220&P=0", cat: "Noodles" },
      { id: 202, name: "Manchurian Gravy", desc: "Crispy veg balls in tangy manchurian sauce", price: 180, emoji: "🥢",image:"https://i2.wp.com/www.carveyourcraving.com/wp-content/uploads/2016/02/manchurian6.jpg?ssl=1", cat: "Starters" },
      { id: 203, name: "Fried Rice", desc: "Wok-tossed rice with eggs & mixed vegetables", price: 150, emoji: "🍚",image:"https://png.pngtree.com/background/20230426/original/pngtree-fried-rice-food-new-home-chef-picture-image_2484838.jpg", cat: "Rice" },
      { id: 204, name: "Spring Rolls (4 pcs)", desc: "Crunchy golden rolls with vegetable filling", price: 120, emoji: "🌯",image:"https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-160751000000000000/menu/items/5/item-900000000012203455_1686757533.jpg?size=medium", cat: "Starters" },
      { id: 205, name: "Hot & Sour Soup", desc: "Tangy spicy soup with tofu & mushrooms", price: 100, emoji: "🍲",image: "https://tse2.mm.bing.net/th/id/OIP.cTx2sTxbAw7_W_vyc7NafwHaHa?pid=Api&h=220&P=0", cat: "Soups" },
    ]
  },
  { id: 3, name: "Pizza Factory", cuisine: "Italian • Pizza", image: "https://lh5.googleusercontent.com/p/AF1QipPcgNr1QU81sjJK3_1e5fkq9VIPSAJy8ddizX4Z=s1024",  rating: 4.7, time: "30-45 min", price: "₹500 for two", tag: "4.7★", open: true, category: "Pizza",
    menu: [
      { id: 301, name: "Margherita Pizza", desc: "Classic tomato base with fresh mozzarella & basil", price: 299, emoji: "🍕",image: "https://tse1.mm.bing.net/th/id/OIP.r6QNsFDrNL6nrOMhstm88gHaEO?pid=Api&h=220&P=0", cat: "Pizzas" },
      { id: 302, name: "Pepperoni Pizza", desc: "Loaded with spicy pepperoni & cheese blend", price: 399, emoji: "🍕",image: "https://tse1.mm.bing.net/th/id/OIP.rdZaeBfwLSjr_qgSU0qXuwHaHa?pid=Api&h=220&P=0", cat: "Pizzas" },
      { id: 303, name: "Pasta Arrabiata", desc: "Penne in spicy tomato sauce with olives", price: 249, emoji: "🍝",image: "https://cdn.mygingergarlickitchen.com/images/800px/800px-pasta-arrabiata-recipe-my-ginger-garlic-kitchen-7.jpg", cat: "Pasta" },
      { id: 304, name: "Garlic Bread", desc: "Toasted baguette with herb garlic butter", price: 129, emoji: "🥖",image: "https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-4.jpg", cat: "Sides" },
      { id: 305, name: "Tiramisu", desc: "Classic Italian coffee dessert", price: 179, emoji: "☕",image: "https://tse3.mm.bing.net/th/id/OIP.vxPYzUWCVWv3P6xJ68bYBQHaE8?pid=Api&h=220&P=0", cat: "Desserts" },
    ]
  },
  { id: 4, name: "Burger Bros", cuisine: "American • Fast Food",image: "https://ipouritinc.com/wp-content/uploads/2021/05/burgerbros_ext.jpg",  rating: 4.3, time: "15-25 min", price: "₹300 for two", tag: "FAST", open: true, category: "Burgers",
    menu: [
      { id: 401, name: "Classic Beef Burger", desc: "Juicy beef patty with lettuce, tomato & special sauce", price: 249, emoji: "🍔",image: "https://thetastefulpantry.com/wp-content/uploads/2024/02/Classic-Beef-Burger-feature-1200x628-2.png", cat: "Burgers" },
      { id: 402, name: "Crispy Chicken Burger", desc: "Fried chicken fillet with coleslaw & mayo", price: 229, emoji: "🍗",image:"https://www.ajinomoto.com.my/sites/default/files/content/recipe/image/2022-10/Crispy-Chicken-Burger-new.jpg", cat: "Burgers" },
      { id: 403, name: "Cheese Fries", desc: "Crispy fries loaded with nacho cheese sauce", price: 149, emoji: "🍟", image:"https://tse1.mm.bing.net/th/id/OIP.dciUJM69YfHvq5TB6-y9HwHaHa?pid=Api&h=220&P=0", cat: "Sides" },
      { id: 404, name: "Oreo Milkshake", desc: "Thick blended milkshake with Oreo cookies", price: 149, emoji: "🥤", image:"https://www.thespruceeats.com/thmb/PDEkZZ6o17aru9QLOaFdnU2zwuY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-683194578-5aa59577ba6177003761b609.jpg", cat: "Drinks" },
    ]
  },
  { id: 5, name: "Sweet Corner", cuisine: "Desserts • Bakery", image: "https://tse3.mm.bing.net/th/id/OIP.ImYviDJcDf4wAUQv7InCqwHaEn?pid=Api&h=220&P=0",  rating: 4.6, time: "20-30 min", price: "₹250 for two", tag: "POPULAR", open: true, category: "Desserts",
    menu: [
      { id: 501, name: "Chocolate Lava Cake", desc: "Warm chocolate cake with liquid center", price: 199, emoji: "🍫", image: "https://insanelygoodrecipes.com/wp-content/uploads/2024/12/Lava-Cake-2.jpg", cat: "Cakes" },
      { id: 502, name: "Cheesecake Slice", desc: "Creamy New York style cheesecake with berry compote", price: 179, image: "https://img.freepik.com/premium-photo/cheesecake-slice_1179130-119830.jpg", emoji: "🍰", cat: "Cakes" },
      { id: 503, name: "Ice Cream Scoop", desc: "3 scoops of premium gelato", price: 149, emoji: "🍨", image: "https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2020/10/strawberry-ice-cream-1024x768.jpg", cat: "Ice Cream" },
      { id: 504, name: "Waffle", desc: "Belgian waffle with maple syrup & whipped cream", price: 169, emoji: "🧇", image: "https://www.kulicksfrenchtoastrecipes.com/wp-content/uploads/2022/11/Waffle-recipe.jpg", cat: "Hot" },
    ]
  },
  { id: 6, name: "Green Bowl", cuisine: "Healthy • Salads", image: "https://tse2.mm.bing.net/th/id/OIP.3blHzhKZErYeBszu-j2lhgHaE8?pid=Api&h=220&P=0",  rating: 4.4, time: "20-30 min", price: "₹400 for two", tag: "HEALTHY", open: true, category: "Healthy",
    menu: [
      { id: 601, name: "Caesar Salad", desc: "Romaine lettuce with croutons & caesar dressing", price: 249, emoji: "🥗",image: "https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg", cat: "Salads" },
      { id: 602, name: "Avocado Toast", desc: "Sourdough with smashed avocado, eggs & microgreens", price: 299, emoji: "🥑",image: "https://onedishkitchen.com/wp-content/uploads/2019/12/avocado-toast-one-dish-kitchen-2.jpg", cat: "Toast" },
      { id: 603, name: "Acai Bowl", desc: "Frozen acai with granola, banana & honey", price: 279, emoji: "🫐", image: "https://tastefullygrace.com/wp-content/uploads/2023/05/How-to-Make-Acai-Bowl-Recipe-1-scaled.jpg", cat: "Bowls" },
      { id: 604, name: "Green Smoothie", desc: "Spinach, banana, mango & almond milk blend", price: 179, emoji: "🥤", image: "https://www.cubesnjuliennes.com/wp-content/uploads/2022/02/Green-Detox-Smoothie-Recipe.jpg",cat: "Drinks" },
    ]
  },
];

// ============ STATE ============
let currentUser      = null;
let currentRestaurant = null;
let cart             = [];
let selectedPayMethod = 'upi';
let couponApplied    = false;
let trackInterval    = null;
let currentTrackStep = 0;
let userRating       = 0;
let activeFilter     = 'All';
let orderHistory     = [];

// ============ API CONFIG ============
const API_BASE  = 'http://localhost:8080/api';
let authToken   = localStorage.getItem('yr_token') || null;

async function apiCall(endpoint, method = 'GET', body = null) {
  const headers = { 'Content-Type': 'application/json' };
  if (authToken) headers['Authorization'] = 'Bearer ' + authToken;
  try {
    const res  = await fetch(API_BASE + endpoint, { method, headers, body: body ? JSON.stringify(body) : null });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Server error');
    return data;
  } catch (e) {
    console.warn('API unavailable, using local data:', e.message);
    return null;
  }
}

// ============ UTILS ============
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  window.scrollTo(0, 0);

  if (id === 'restaurantPage') renderRestaurants();
  if (id === 'menuPage')       renderMenu();
  if (id === 'paymentPage')    renderPaySummary();
  if (id === 'trackingPage')   startTracking();
  if (id === 'adminPage') {
    if (typeof initAdminMenu  === 'function') initAdminMenu();
    if (typeof renderAdminMenu === 'function') renderAdminMenu();
    if (typeof renderAdminOrders === 'function') renderAdminOrders();
    if (typeof updateStats    === 'function') updateStats();
  }
  if (typeof closeMM === 'function') closeMM();
}

function showToast(msg, type = 'success') {
  const t   = document.getElementById('toast');
  t.textContent = msg;
  t.className   = 'toast ' + type;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ============ MOBILE MENU ============
function toggleMobileMenu() {
  const menu    = document.getElementById('mobileMenu');
  const btn     = document.getElementById('hamburgerBtn');
  const overlay = document.getElementById('mmOverlay');
  const isOpen  = menu.classList.contains('open');
  menu.classList.toggle('open', !isOpen);
  btn.classList.toggle('open',  !isOpen);
  overlay.style.display  = isOpen ? 'none' : 'block';
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function closeMM() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburgerBtn').classList.remove('open');
  document.getElementById('mmOverlay').style.display = 'none';
  document.body.style.overflow = '';
}

function updateMobileMenu() {
  if (currentUser) {
    document.getElementById('mmLoggedOut').style.display = 'none';
    document.getElementById('mmLoggedIn').style.display  = 'block';
    document.getElementById('mmGreet').textContent = '👋 Hi, ' + currentUser.name;
  } else {
    document.getElementById('mmLoggedOut').style.display = 'block';
    document.getElementById('mmLoggedIn').style.display  = 'none';
  }
}

// ============ AUTH ============
async function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value.trim();
  if (!email || !pass) { showToast('Please fill in all fields', 'error'); return; }

  showToast('Logging in... ⏳');
  const res = await apiCall('/auth/login', 'POST', { email, password: pass });
  if (res && res.token) {
    authToken = res.token;
    localStorage.setItem('yr_token', authToken);
    currentUser = { name: email.split('@')[0], email };
  } else {
    currentUser = { name: email.split('@')[0] || 'User', email };
  }
  onLogin();
}

async function doRegister() {
  const name  = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass  = document.getElementById('regPass')?.value.trim()  || '123456';
  const phone = document.getElementById('regPhone')?.value.trim() || '';
  if (!name || !email) { showToast('Please fill all fields', 'error'); return; }

  showToast('Creating account... ⏳');
  const res = await apiCall('/auth/register', 'POST', { name, email, password: pass, phone });
  if (res && res.token) {
    authToken = res.token;
    localStorage.setItem('yr_token', authToken);
  }
  currentUser = { name, email };
  onLogin();
}

function googleLogin() { currentUser = { name: 'Google User', email: 'user@gmail.com' }; onLogin(); }
function otpLogin()    { currentUser = { name: 'OTP User',    email: 'user@phone.com' }; onLogin(); }

function onLogin() {
  document.getElementById('navRight').style.display = 'none';
  document.getElementById('navUser').style.display  = 'flex';
  document.getElementById('navGreet').textContent   = '👋 Hi, ' + currentUser.name + '!';
  showFloatingCart(true);
  updateMobileMenu();
  showToast('Welcome back, ' + currentUser.name + '! 🎉');
  loadRestaurantsFromAPI();
  showPage('restaurantPage');
}

function logout() {
  currentUser = null;
  cart        = [];
  authToken   = null;
  localStorage.removeItem('yr_token');
  document.getElementById('navRight').style.display = 'flex';
  document.getElementById('navUser').style.display  = 'none';
  showFloatingCart(false);
  updateMobileMenu();
  showPage('loginPage');
  showToast('Logged out. See you soon!');
}

// ============ RESTAURANTS ============
async function loadRestaurantsFromAPI() {
  const data = await apiCall('/restaurants');
  if (data && Array.isArray(data) && data.length > 0) {
    data.forEach(r => {
      if (!RESTAURANTS.find(x => x.id === r.id)) {
        RESTAURANTS.push({
          id: r.id, name: r.name, cuisine: r.cuisine,
          emoji: r.emoji || '🍽️', rating: r.rating,
          time: r.deliveryTime, price: r.priceRange,
          tag: r.tag, open: r.isOpen, category: r.category, menu: []
        });
      }
    });
  }
  renderRestaurants();
}

function setFilter(el, cat) {
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  activeFilter = cat;
  renderRestaurants();
}

function filterRestaurants() { renderRestaurants(); }

function renderRestaurants() {
  const q      = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const grid   = document.getElementById('restaurantsGrid');
  const filtered = RESTAURANTS.filter(r => {
    const matchCat    = activeFilter === 'All' || r.category === activeFilter;
    const matchSearch = !q || r.name.toLowerCase().includes(q) || r.cuisine.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
  grid.innerHTML = filtered.map(r => `
    <div class="restaurant-card" onclick="openRestaurant(${r.id})">
      <div class="rest-img">
  <img src="${r.image}" alt="${r.name}">
  <div class="rest-badge ${r.open ? '' : 'closed'}">
    ${r.open ? '● OPEN' : '● CLOSED'}
  </div>
  </div>
      <div class="rest-info">
        <div class="rest-name">${r.name}</div>
        <div class="rest-cuisine">${r.cuisine}</div>
        <div class="rest-meta">
          <span class="rating">★ ${r.rating}</span>
          <span>🕐 ${r.time}</span>
          <span>${r.price}</span>
        </div>
      </div>
    </div>
  `).join('') || '<p style="color:var(--muted);text-align:center;padding:40px;grid-column:1/-1;">No restaurants found 😔</p>';
}

async function openRestaurant(id) {
  currentRestaurant = RESTAURANTS.find(r => r.id === id);
  if (cart.length && cart[0].restId !== id) {
    if (!confirm('Switching restaurant will clear your cart. Continue?')) return;
    cart = [];
  }
  const menuData = await apiCall('/restaurants/' + id + '/menu');
  if (menuData && Array.isArray(menuData) && menuData.length > 0) {
    currentRestaurant.menu = menuData.map(item => ({
      id: item.id, name: item.name, desc: item.description,
      price: item.price, image: item.image, emoji: item.emoji || '🍽️',
      cat: item.category, disabled: !item.isAvailable
    }));
  }
  showPage('menuPage');
}

// ============ MENU ============
function renderMenu() {
  const r = currentRestaurant;
  document.getElementById('menuHeader').innerHTML = `
    <div class="menu-header-emoji">${r.emoji}</div>
    <div>
      <h2>${r.name}</h2>
      <p>★ ${r.rating} · ${r.time} · ${r.price}</p>
    </div>
  `;
  document.getElementById('cartRestName').textContent = r.name;
  const cats = [...new Set(r.menu.map(i => i.cat))];
  document.getElementById('menuCats').innerHTML = cats.map(c => `<div class="chip active">${c}</div>`).join('');
  renderMenuItems();
  renderCart();
}

function renderMenuItems() {
  const r = currentRestaurant;
  document.getElementById('menuItemsList').innerHTML = r.menu.map(item => {
    const cartItem = cart.find(c => c.id === item.id);
    const qty = cartItem ? cartItem.qty : 0;
    return `
      <div class="menu-item">
        <div class="item-img">
        <img src="${item.image}" alt="${item.name}">
      </div>
        <div class="item-info">
          <div class="item-name">${item.name}</div>
          <div class="item-desc">${item.desc}</div>
          <div class="item-price">₹${item.price}</div>
        </div>
        ${qty === 0
          ? `<button class="add-btn" onclick="addToCart(${item.id})">+ Add</button>`
          : `<div class="qty-ctrl">
               <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
               <span class="qty-num">${qty}</span>
               <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
             </div>`
        }
      </div>
    `;
  }).join('');
}

function addToCart(itemId) {
  const item     = currentRestaurant.menu.find(i => i.id === itemId);
  const existing = cart.find(c => c.id === itemId);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1, restId: currentRestaurant.id });
  renderMenuItems();
  renderCart();
  showToast(`${item.name} added to cart 🛒`);
}

function changeQty(itemId, delta) {
  const idx = cart.findIndex(c => c.id === itemId);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  renderMenuItems();
  renderCart();
}

function renderCart() {
  const total      = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax        = Math.round(total * 0.05);
  const delivery   = 29;
  const grand      = total + delivery + tax;
  const totalCount = cart.reduce((s, i) => s + i.qty, 0);

  // ── Floating Cart Panel ──
  const floatCount  = document.getElementById('floatCount');
  const floatBadge  = document.getElementById('floatCountBadge');
  const cpEmpty     = document.getElementById('cartPanelEmpty');
  const cpItems     = document.getElementById('cartPanelItems');
  const cpFooter    = document.getElementById('cartPanelFooter');
  const cpRestName  = document.getElementById('cartPanelRestName');

  if (floatCount)  { floatCount.textContent = totalCount; floatCount.style.display = totalCount > 0 ? 'flex' : 'none'; }
  if (floatBadge)  { floatBadge.textContent = totalCount + ' item' + (totalCount !== 1 ? 's' : ''); floatBadge.style.display = totalCount > 0 ? 'inline-block' : 'none'; }
  if (cpRestName && currentRestaurant) cpRestName.textContent = currentRestaurant.emoji + ' ' + currentRestaurant.name;
  if (cpEmpty) cpEmpty.style.display = cart.length === 0 ? 'block' : 'none';

  if (cpItems) {
    cpItems.innerHTML = cart.map(i => `
      <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-block-end:1px solid rgba(255,255,255,0.05);">
        <span style="font-size:1.3rem;">${i.emoji}</span>
        <div style="flex:1;min-inline-size:0;">
          <div style="font-size:0.82rem;font-weight:700;color:rgba(255,255,255,0.88);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${i.name}</div>
          <div style="display:flex;align-items:center;gap:6px;margin-block-start:4px;">
            <button onclick="changeQty(${i.id},-1)" style="inline-size:22px;block-size:22px;border-radius:7px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.75);font-size:0.9rem;cursor:pointer;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.background='rgba(255,106,0,0.35)'" onmouseout="this.style.background='rgba(255,255,255,0.06)'">−</button>
            <span style="font-size:0.8rem;font-weight:800;color:rgba(255,255,255,0.55);min-inline-size:16px;text-align:center;">${i.qty}</span>
            <button onclick="changeQty(${i.id},1)" style="inline-size:22px;block-size:22px;border-radius:7px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.75);font-size:0.9rem;cursor:pointer;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.background='rgba(26,110,247,0.4)'" onmouseout="this.style.background='rgba(255,255,255,0.06)'">+</button>
          </div>
        </div>
        <span style="font-size:0.85rem;font-weight:900;color:#ff6a00;">₹${i.price * i.qty}</span>
      </div>
    `).join('');
  }
  if (cpFooter) {
    cpFooter.style.display = cart.length > 0 ? 'block' : 'none';
    const s = document.getElementById('cpSubtotal');
    const e = document.getElementById('cpExtra');
    const g = document.getElementById('cpGrand');
    if (s) s.textContent = '₹' + total;
    if (e) e.textContent = '₹' + (delivery + tax);
    if (g) g.textContent = '₹' + grand;
  }

  // ── Side Menu Cart ──
  const mmCount     = document.getElementById('mmCartCount');
  const mmEmpty     = document.getElementById('mmCartEmpty');
  const mmItems     = document.getElementById('mmCartItems');
  const mmCartTotal = document.getElementById('mmCartTotal');

  if (mmCount) { mmCount.textContent = totalCount; mmCount.style.display = totalCount > 0 ? 'inline-block' : 'none'; }
  if (mmEmpty) mmEmpty.style.display = cart.length === 0 ? 'block' : 'none';
  if (mmItems) {
    mmItems.innerHTML = cart.map(i => `
      <div style="display:flex;align-items:center;gap:8px;padding:7px 4px;border-block-end:1px solid rgba(255,255,255,0.05);">
        <span style="font-size:1.2rem;">${i.emoji}</span>
        <div style="flex:1;min-inline-size:0;">
          <div style="font-size:0.8rem;font-weight:700;color:rgba(255,255,255,0.85);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${i.name}</div>
          <div style="display:flex;align-items:center;gap:6px;margin-block-start:3px;">
            <button onclick="changeQty(${i.id},-1)" style="inline-size:20px;block-size:20px;border-radius:6px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.07);color:rgba(255,255,255,0.7);font-size:0.85rem;cursor:pointer;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.background='rgba(255,106,0,0.3)'" onmouseout="this.style.background='rgba(255,255,255,0.07)'">−</button>
            <span style="font-size:0.78rem;font-weight:700;color:rgba(255,255,255,0.6);min-inline-size:14px;text-align:center;">${i.qty}</span>
            <button onclick="changeQty(${i.id},1)" style="inline-size:20px;block-size:20px;border-radius:6px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.07);color:rgba(255,255,255,0.7);font-size:0.85rem;cursor:pointer;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.background='rgba(26,110,247,0.4)'" onmouseout="this.style.background='rgba(255,255,255,0.07)'">+</button>
          </div>
        </div>
        <span style="font-size:0.82rem;font-weight:800;color:#ff6a00;">₹${i.price * i.qty}</span>
      </div>
    `).join('');
  }
  if (mmCartTotal) {
    mmCartTotal.style.display = cart.length > 0 ? 'block' : 'none';
    const mmSub = document.getElementById('mmSubtotal');
    const mmEx  = document.getElementById('mmExtra');
    const mmGr  = document.getElementById('mmGrand');
    if (mmSub) mmSub.textContent = '₹' + total;
    if (mmEx)  mmEx.textContent  = '₹' + (delivery + tax);
    if (mmGr)  mmGr.textContent  = '₹' + grand;
  }

  // ── Menu Page Sidebar ──
  const list       = document.getElementById('cartList');
  const cartTotalEl = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = '<div class="cart-empty">Add items to get started!</div>';
    if (cartTotalEl) cartTotalEl.style.display = 'none';
    if (checkoutBtn) checkoutBtn.disabled = true;
  } else {
    list.innerHTML = cart.map(i => `
      <div class="cart-item">
        <span>${i.emoji}</span>
        <span class="cart-item-name">${i.name} ×${i.qty}</span>
        <span class="cart-item-price">₹${i.price * i.qty}</span>
      </div>
    `).join('');
    if (cartTotalEl) cartTotalEl.style.display = 'block';
    const sub    = document.getElementById('cartSubtotal');
    const taxEl  = document.getElementById('cartTax');
    const grandEl = document.getElementById('cartGrand');
    if (sub)    sub.textContent   = '₹' + total;
    if (taxEl)  taxEl.textContent = '₹' + tax;
    if (grandEl) grandEl.textContent = '₹' + grand;
    if (checkoutBtn) checkoutBtn.disabled = false;
  }
}

function scrollToCart() {
  const sidebar = document.getElementById('cartSidebar');
  if (sidebar && document.getElementById('menuPage').classList.contains('active')) {
    sidebar.scrollIntoView({ behavior: 'smooth' });
  } else if (currentRestaurant) {
    showPage('menuPage');
    setTimeout(() => {
      const s = document.getElementById('cartSidebar');
      if (s) s.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  } else {
    showToast('Please select a restaurant first 🏪', 'error');
  }
}

// ============ PAYMENT ============
function renderPaySummary() {
  const sub   = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax   = Math.round(sub * 0.05);
  const disc  = couponApplied ? 40 : 0;
  const grand = sub + 29 + tax - disc;
  document.getElementById('payOrderSummary').innerHTML = `
    <div class="summary-row"><span>Subtotal</span><span>₹${sub}</span></div>
    <div class="summary-row"><span>Delivery fee</span><span>₹29</span></div>
    <div class="summary-row"><span>Taxes (5%)</span><span>₹${tax}</span></div>
    ${disc ? `<div class="summary-row" style="color:var(--green)"><span>Coupon Discount</span><span>−₹${disc}</span></div>` : ''}
    <div class="summary-row total"><span>Total to Pay</span><span>₹${grand}</span></div>
  `;
}

function selectPay(el, method) {
  document.querySelectorAll('.pay-method').forEach(m => m.classList.remove('selected'));
  el.classList.add('selected');
  selectedPayMethod = method;
  document.getElementById('upiInputWrap').style.display = method === 'upi' ? 'block' : 'none';
}

function applyCoupon() {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  if (code === 'SAVE20' || code === 'FOOD10' || code === 'RUSH50') {
    couponApplied = true;
    document.getElementById('couponSuccess').style.display = 'block';
    showToast('Coupon applied! ₹40 off 🎟️');
    renderPaySummary();
  } else {
    showToast('Invalid coupon code', 'error');
  }
}

async function doPayment() {
  showToast('Processing payment... 🔒');

  const sub   = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax   = Math.round(sub * 0.05);
  const disc  = couponApplied ? 40 : 0;
  const grand = sub + 29 + tax - disc;
  const now   = new Date();
  const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  const orderPayload = {
    userId: currentUser?.id || 1,
    restaurantId: currentRestaurant?.id,
    items: cart.map(i => ({ menuItemId: i.id, quantity: i.qty })),
    paymentMethod: selectedPayMethod.toUpperCase(),
    couponCode: couponApplied ? document.getElementById('couponInput')?.value : null
  };

  let orderId = '#YR' + Math.floor(100000 + Math.random() * 900000);
  setTimeout(async () => {
    const res = await apiCall('/orders', 'POST', orderPayload);
    if (res && res.orderId) orderId = res.orderId;

    orderHistory.unshift({
      id: orderId,
      customer: currentUser?.name  || 'Guest',
      restaurant: currentRestaurant?.name  || '—',
      restEmoji: currentRestaurant?.emoji || '🍽️',
      items: cart.map(i => `${i.emoji} ${i.name} ×${i.qty}`).join(', '),
      itemCount: cart.reduce((s, i) => s + i.qty, 0),
      amount: grand,
      payment: selectedPayMethod.toUpperCase(),
      status: 'Confirmed',
      time: timeStr
    });

    document.getElementById('orderId').textContent = orderId;
    showToast('Payment Successful! ✅');
    cart           = [];
    couponApplied  = false;
    renderCart();
    showPage('trackingPage');
  }, 1800);
}

// ============ TRACKING ============
const TRACK_STEPS_DATA = [
  { label: 'Order Received',   desc: 'Restaurant accepted your order', emoji: '📋' },
  { label: 'Preparing Food',   desc: 'Chef is cooking your meal',       emoji: '👨‍🍳' },
  { label: 'Out for Delivery', desc: 'Agent picked up your order',      emoji: '🛵' },
  { label: 'Nearby',           desc: 'Agent is 2 mins away',            emoji: '📍' },
  { label: 'Delivered',        desc: 'Order delivered!',                emoji: '🎉' },
];

function startTracking() {
  currentTrackStep = 0;
  if (trackInterval) clearInterval(trackInterval);
  renderTrackSteps();
  const etaEl = document.getElementById('etaBadge');
  let eta     = 28;
  trackInterval = setInterval(() => {
    if (currentTrackStep < TRACK_STEPS_DATA.length - 1) {
      currentTrackStep++;
      eta = Math.max(0, eta - 7);
      etaEl.textContent = eta > 0 ? `ETA: ${eta} min` : '🎉 Delivered!';
      renderTrackSteps();
    } else {
      clearInterval(trackInterval);
    }
  }, 3000);
}

function renderTrackSteps() {
  document.getElementById('trackSteps').innerHTML = TRACK_STEPS_DATA.map((s, i) => `
    <div class="track-step">
      <div class="track-step-left">
        <div class="track-dot ${i < currentTrackStep ? 'done' : i === currentTrackStep ? 'active' : ''}">${i < currentTrackStep ? '✓' : s.emoji}</div>
        ${i < TRACK_STEPS_DATA.length - 1 ? `<div class="track-line ${i < currentTrackStep ? 'done' : ''}"></div>` : ''}
      </div>
      <div class="track-step-info">
        <div class="track-step-name">${s.label}</div>
        <div class="track-step-desc">${s.desc}</div>
      </div>
    </div>
  `).join('');
}

// ============ RATING ============
function setRating(n) {
  userRating = n;
  document.querySelectorAll('.star').forEach((s, i) => {
    s.classList.toggle('active', i < n);
    s.style.filter = i < n ? 'none' : 'grayscale(1) brightness(0.5)';
  });
}

function submitReview() {
  if (!userRating) { showToast('Please rate your experience!', 'error'); return; }
  if (orderHistory.length > 0) {
    orderHistory[0].status = 'Delivered';
    orderHistory[0].rating = userRating;
  }
  showToast('Thank you for your review! ⭐ Loyalty points added!');
  cart = []; couponApplied = false; userRating = 0;
  const countEl = document.getElementById('cartCount');
  if (countEl) { countEl.textContent = '0'; countEl.style.display = 'none'; }
  setTimeout(() => showPage('restaurantPage'), 1500);
}

// ============ ADMIN ============
function adminTab(el, id) {
  document.querySelectorAll('.adm-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.adm-section').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('adm-' + id).classList.add('active');
  if (id === 'menuMgmt') { initAdminMenu(); renderAdminMenu(); }
  if (id === 'restMgmt') renderAdminRests();
  if (id === 'orders')   renderAdminOrders();
  if (id === 'stats')    updateStats();
}

function renderAdminOrders() {
  const tbody   = document.getElementById('adminOrdersTbody');
  const countEl = document.getElementById('adminOrderCount');
  if (!tbody) return;

  const statusStyle = {
    'Confirmed':        'background:#dbeafe;color:#1a6ef7;',
    'Preparing':        'background:#fff7ed;color:#ff6a00;',
    'Out for Delivery': 'background:#f0fdf4;color:#16a34a;',
    'Delivered':        'background:#dcfce7;color:#16a34a;',
    'Cancelled':        'background:#fee2e2;color:#e11d48;'
  };

  if (orderHistory.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="padding:48px;text-align:center;color:#5a6a8a;">
      <div style="font-size:2.5rem;margin-bottom:12px;">📦</div>
      <div style="font-weight:700;margin-bottom:4px;">No orders yet</div>
      <div style="font-size:0.82rem;">Orders will appear here after customers place them</div>
    </td></tr>`;
    if (countEl) countEl.textContent = '0 orders';
    return;
  }
  if (countEl) countEl.textContent = orderHistory.length + ' order' + (orderHistory.length > 1 ? 's' : '');

  tbody.innerHTML = orderHistory.map(o => {
    const st = statusStyle[o.status] || 'background:#f0f6ff;color:#5a6a8a;';
    return `<tr style="border-top:1px solid #e8f0fe;transition:background 0.15s;" onmouseover="this.style.background='#f7f9ff'" onmouseout="this.style.background=''">
      <td style="padding:13px 18px;font-size:0.82rem;font-family:monospace;color:#1a6ef7;font-weight:700;">${o.id}</td>
      <td style="padding:13px 18px;font-size:0.85rem;font-weight:600;">${o.customer}</td>
      <td style="padding:13px 18px;font-size:0.85rem;">${o.restEmoji} ${o.restaurant}</td>
      <td style="padding:13px 18px;font-size:0.78rem;color:#5a6a8a;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${o.items}">${o.items}</td>
      <td style="padding:13px 18px;font-family:'Syne',sans-serif;font-weight:900;color:#ff6a00;font-size:0.95rem;">₹${o.amount}</td>
      <td style="padding:13px 18px;"><span style="background:#f0f6ff;color:#3d5080;font-size:0.72rem;font-weight:700;padding:3px 10px;border-radius:100px;text-transform:uppercase;">${o.payment}</span></td>
      <td style="padding:13px 18px;">
        <select onchange="updateOrderStatus('${o.id}',this.value)" style="padding:4px 10px;border-radius:8px;border:1.5px solid #d6e4ff;font-family:'Nunito',sans-serif;font-size:0.78rem;font-weight:700;background:#fff;cursor:pointer;${st}outline:none;">
          ${['Confirmed','Preparing','Out for Delivery','Delivered','Cancelled'].map(s => `<option value="${s}" ${s === o.status ? 'selected' : ''}>${s}</option>`).join('')}
        </select>
      </td>
      <td style="padding:13px 18px;font-size:0.78rem;color:#5a6a8a;">${o.time}</td>
    </tr>`;
  }).join('');
}

function updateOrderStatus(orderId, newStatus) {
  const order = orderHistory.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    showToast(`Order ${orderId} → ${newStatus}`);
    renderAdminOrders();
  }
}

function initAdminMenu() {
  const sel    = document.getElementById('adminRestFilter');
  const catSel = document.getElementById('adminCatFilter');
  const opts   = ['<option value="all">All Restaurants</option>'];
  const cats   = new Set();
  RESTAURANTS.forEach(r => {
    opts.push(`<option value="${r.id}">${r.emoji} ${r.name}</option>`);
    r.menu.forEach(i => cats.add(i.cat));
  });
  sel.innerHTML    = opts.join('');
  catSel.innerHTML = ['<option value="all">All Categories</option>', ...[...cats].map(c => `<option value="${c}">${c}</option>`)].join('');
}

function renderAdminMenu() {
  const restId = document.getElementById('adminRestFilter')?.value;
  const search = (document.getElementById('adminMenuSearch')?.value || '').toLowerCase();
  const cat    = document.getElementById('adminCatFilter')?.value;
  let allItems = [];
  RESTAURANTS.forEach(r => r.menu.forEach(item => allItems.push({ ...item, restName: r.name, restEmoji: r.emoji, restId: r.id })));

  const filtered = allItems.filter(i => {
    const rMatch = !restId || restId === 'all' || i.restId == restId;
    const sMatch = !search || i.name.toLowerCase().includes(search) || i.restName.toLowerCase().includes(search);
    const cMatch = !cat    || cat    === 'all' || i.cat === cat;
    return rMatch && sMatch && cMatch;
  });

  // Stats row
  const byRest = {};
  RESTAURANTS.forEach(r => byRest[r.name] = r.menu.length);
  document.getElementById('adminStatsRow').innerHTML = Object.entries(byRest).map(([name, count]) => `
    <div style="background:#fff;border:1px solid #d6e4ff;border-radius:14px;padding:16px;text-align:center;box-shadow:0 2px 10px rgba(26,110,247,0.06);">
      <div style="font-size:1.4rem;margin-bottom:4px;">${RESTAURANTS.find(r => r.name === name)?.emoji}</div>
      <div style="font-family:'Syne',sans-serif;font-size:1.3rem;font-weight:900;color:#0a1628;">${count}</div>
      <div style="font-size:0.72rem;color:#5a6a8a;font-weight:600;margin-top:2px;">${name.split(' ')[0]}</div>
    </div>
  `).join('');

  const tbody = document.getElementById('adminMenuTbody');
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="padding:40px;text-align:center;color:#5a6a8a;font-size:0.9rem;">No items found 🍽️</td></tr>`;
    return;
  }
  tbody.innerHTML = filtered.map((item) => `
    <tr style="border-top:1px solid #e8f0fe;transition:background 0.15s;" onmouseover="this.style.background='#f7f9ff'" onmouseout="this.style.background=''">
      <td style="padding:13px 18px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <img src="${item.image}" 
          style="width:40px;height:40px;border-radius:8px;object-fit:cover;">
          <div>
            <div style="font-weight:700;font-size:0.88rem;color:#0a1628;">${item.name}</div>
            <div style="font-size:0.72rem;color:#5a6a8a;">${item.desc.slice(0,36)}…</div>
          </div>
        </div>
      </td>
      <td style="padding:13px 18px;font-size:0.85rem;color:#3d5080;">${item.restEmoji} ${item.restName}</td>
      <td style="padding:13px 18px;"><span style="background:#dbeafe;color:#1a6ef7;font-size:0.72rem;font-weight:700;padding:3px 10px;border-radius:100px;">${item.cat}</span></td>
      <td style="padding:13px 18px;font-family:'Syne',sans-serif;font-weight:900;color:#ff6a00;font-size:0.95rem;">₹${item.price}</td>
      <td style="padding:13px 18px;">
        <button class="adm-act-btn adm-toggle ${item.disabled ? 'off' : ''}" onclick="toggleItem(${item.restId},${item.id},this)">${item.disabled ? '● Off' : '● On'}</button>
      </td>
      <td style="padding:13px 18px;">
        <div style="display:flex;gap:6px;">
          <button class="adm-act-btn adm-edit" onclick="openEditModal(${item.restId},${item.id})">✏️ Edit</button>
          <button class="adm-act-btn adm-del"  onclick="deleteItem(${item.restId},${item.id})">🗑️ Del</button>
        </div>
      </td>
    </tr>
  `).join('');
  updateStats();
}

function updateStats() {
  let total = 0;
  RESTAURANTS.forEach(r => total += r.menu.length);
  const el = document.getElementById('statTotalItems');
  if (el) el.textContent = total;
  const ord = document.getElementById('statTodayOrders');
  if (ord) ord.textContent = orderHistory.length;
  const revEl = document.getElementById('statRevenue');
  if (revEl) {
    const rev = orderHistory.reduce((s, o) => s + (o.amount || 0), 0);
    revEl.textContent = rev > 0 ? '₹' + rev.toLocaleString('en-IN') : '₹0';
  }
}

function renderAdminRests() {
  document.getElementById('adminRestGrid').innerHTML = RESTAURANTS.map(r => `
    <div style="background:#fff;border:1px solid #d6e4ff;border-radius:18px;overflow:hidden;box-shadow:0 4px 16px rgba(26,110,247,0.07);">
      <div style="height:160px;overflow:hidden;">
      <img src="${r.image}" alt="${r.name}" style="width:100%;height:100%;object-fit:cover;">
    </div>
      <div style="padding:16px;">
        <div style="font-family:'Syne',sans-serif;font-weight:800;font-size:1rem;margin-bottom:4px;">${r.name}</div>
        <div style="font-size:0.78rem;color:#5a6a8a;margin-bottom:10px;">${r.cuisine}</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <span style="background:#dbeafe;color:#1a6ef7;font-size:0.72rem;font-weight:700;padding:3px 10px;border-radius:100px;">★ ${r.rating}</span>
          <span style="background:#dcfce7;color:#16a34a;font-size:0.72rem;font-weight:700;padding:3px 10px;border-radius:100px;">${r.menu.length} items</span>
          <span style="background:#fff7ed;color:#ff6a00;font-size:0.72rem;font-weight:700;padding:3px 10px;border-radius:100px;">${r.time}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ── Modal ──
function openAddModal() {
  document.getElementById('modalTitle').textContent = 'Add New Item';
  ['mName','mDesc','mCat'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('mPrice').value  = '';
  document.getElementById('mEmoji').value  = '🍽️';
  document.getElementById('mEditId').value = '';
  const sel = document.getElementById('mRest');
  sel.innerHTML = RESTAURANTS.map(r => `<option value="${r.id}">${r.emoji} ${r.name}</option>`).join('');
  document.getElementById('itemModal').style.display = 'flex';
}

function openEditModal(restId, itemId) {
  const rest = RESTAURANTS.find(r => r.id === restId);
  const item = rest?.menu.find(i => i.id === itemId);
  if (!item) return;
  document.getElementById('modalTitle').textContent = 'Edit Item';
  document.getElementById('mName').value  = item.name;
  document.getElementById('mDesc').value  = item.desc;
  document.getElementById('mPrice').value = item.price;
  document.getElementById('mEmoji').value = item.emoji;
  document.getElementById('mCat').value   = item.cat;
  document.getElementById('mEditId').value = `${restId}:${itemId}`;
  const sel = document.getElementById('mRest');
  sel.innerHTML = RESTAURANTS.map(r => `<option value="${r.id}" ${r.id === restId ? 'selected' : ''}>${r.emoji} ${r.name}</option>`).join('');
  document.getElementById('itemModal').style.display = 'flex';
}

function closeModal() { document.getElementById('itemModal').style.display = 'none'; }

function saveItem() {
  const name   = document.getElementById('mName').value.trim();
  const desc   = document.getElementById('mDesc').value.trim();
  const price  = parseInt(document.getElementById('mPrice').value);
  const emoji  = document.getElementById('mEmoji').value.trim() || '🍽️';
  const cat    = document.getElementById('mCat').value.trim()   || 'Other';
  const restId = parseInt(document.getElementById('mRest').value);
  const editId = document.getElementById('mEditId').value;

  if (!name || !desc || !price) { showToast('Please fill all fields!', 'error'); return; }
  const rest = RESTAURANTS.find(r => r.id === restId);

  if (editId) {
    const [rId, iId] = editId.split(':').map(Number);
    const oldRest    = RESTAURANTS.find(r => r.id === rId);
    const idx        = oldRest?.menu.findIndex(i => i.id === iId);
    if (idx !== -1) oldRest.menu.splice(idx, 1);
    rest.menu.push({ id: Date.now(), name, desc, price, emoji, cat });
    showToast('✅ Item updated!');
  } else {
    rest.menu.push({ id: Date.now(), name, desc, price, emoji, cat });
    showToast('✅ Item added to ' + rest.name + '!');
  }
  closeModal();
  renderAdminMenu();
}

function deleteItem(restId, itemId) {
  if (!confirm('Delete this item?')) return;
  const rest = RESTAURANTS.find(r => r.id === restId);
  rest.menu  = rest.menu.filter(i => i.id !== itemId);
  showToast('🗑️ Item deleted');
  renderAdminMenu();
}

function toggleItem(restId, itemId, btn) {
  const rest = RESTAURANTS.find(r => r.id === restId);
  const item = rest?.menu.find(i => i.id === itemId);
  if (!item) return;
  item.disabled = !item.disabled;
  btn.textContent = item.disabled ? '● Off' : '● On';
  btn.classList.toggle('off', item.disabled);
  showToast(item.disabled ? '⛔ Item disabled' : '✅ Item enabled');
}

// ============ FLOATING CART ============
function toggleCartPanel() {
  const panel  = document.getElementById('cartPanel');
  const isOpen = panel.style.right === '88px';
  panel.style.right = isOpen ? '-340px' : '88px';
}

function showFloatingCart(show) {
  const fc = document.getElementById('floatingCart');
  if (fc) fc.style.display = show ? 'block' : 'none';
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  initAdminMenu();
  renderAdminMenu();
  updateStats();
});