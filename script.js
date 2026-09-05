/* =========================================
   MINI MART - FINAL SCRIPT
========================================= */

const API_URL = "https://mini-store-4sy3.onrender.com";

/* =========================
   PRODUCTS
========================= */

const products = [
  {id:1,name:"Heavyweight Boxy Tee",category:"Tops",price:28,tag:"Best Seller",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80"},
  {id:2,name:"Washed Vintage Graphic Tee",category:"Tops",price:32,tag:"New",image:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=700&q=80"},
  {id:3,name:"Linen Camp Collar Shirt",category:"Tops",price:48,tag:"Popular",image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80"},
  {id:4,name:"French Terry Hoodie",category:"Tops",price:65,tag:"Essential",image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80"},
  {id:5,name:"Organic Ribbed Tank",category:"Tops",price:22,tag:"",image:"https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=700&q=80"},
  {id:6,name:"Chunky Cable Knit Sweater",category:"Tops",price:72,tag:"Cozy",image:"https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=700&q=80"},
  {id:7,name:"Pique Cotton Polo",category:"Tops",price:38,tag:"",image:"https://images.unsplash.com/photo-1625910513413-5fc45a40a0a6?auto=format&fit=crop&w=700&q=80"},
  {id:8,name:"Oversized Flannel",category:"Tops",price:54,tag:"Trending",image:"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=700&q=80"},
  {id:9,name:"Brushed Cotton Oxford",category:"Tops",price:45,tag:"",image:"https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=700&q=80"},
  {id:10,name:"Mockneck Long Sleeve",category:"Tops",price:36,tag:"",image:"https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=700&q=80"},

  {id:11,name:"Slim Fit Stretch Chinos",category:"Bottoms",price:55,tag:"Top Rated",image:"https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80"},
  {id:12,name:"Relaxed Raw Selvedge Denim",category:"Bottoms",price:88,tag:"Premium",image:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80"},
  {id:13,name:"Everyday Pleated Trousers",category:"Bottoms",price:64,tag:"",image:"https://images.unsplash.com/photo-1506629905607-d9c297d0aee5?auto=format&fit=crop&w=700&q=80"},
  {id:14,name:"Utility Cargo Pants",category:"Bottoms",price:58,tag:"Trending",image:"https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=700&q=80"},
  {id:15,name:"Classic Straight Jeans",category:"Bottoms",price:62,tag:"",image:"https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=700&q=80"},
  {id:16,name:"Relaxed Cotton Shorts",category:"Bottoms",price:35,tag:"Summer",image:"https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=700&q=80"},

  {id:17,name:"Minimal Bomber Jacket",category:"Outerwear",price:95,tag:"Premium",image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80"},
  {id:18,name:"Lightweight Utility Jacket",category:"Outerwear",price:82,tag:"New",image:"https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=80"},
  {id:19,name:"Classic Denim Jacket",category:"Outerwear",price:78,tag:"",image:"https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=700&q=80"},
  {id:20,name:"Water Resistant Windbreaker",category:"Outerwear",price:105,tag:"Technical",image:"https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=700&q=80"},

  {id:21,name:"Classic White Sneakers",category:"Footwear",price:75,tag:"Best Seller",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"},
  {id:22,name:"Everyday Canvas Sneakers",category:"Footwear",price:52,tag:"",image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80"},
  {id:23,name:"Leather Minimal Loafers",category:"Footwear",price:98,tag:"Premium",image:"https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80"},
  {id:24,name:"Retro Running Sneakers",category:"Footwear",price:86,tag:"Trending",image:"https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=80"},

  {id:25,name:"Classic Baseball Cap",category:"Accessories",price:24,tag:"",image:"https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=700&q=80"},
  {id:26,name:"Premium Leather Belt",category:"Accessories",price:35,tag:"Essential",image:"https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=700&q=80"},
  {id:27,name:"Everyday Canvas Backpack",category:"Accessories",price:65,tag:"Popular",image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80"},
  {id:28,name:"Minimal Leather Wallet",category:"Accessories",price:42,tag:"",image:"https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80"},
  {id:29,name:"Classic Sunglasses",category:"Accessories",price:45,tag:"Summer",image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80"},
  {id:30,name:"Ribbed Knit Beanie",category:"Accessories",price:20,tag:"",image:"https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=700&q=80"}
];

/* =========================
   STATE
========================= */

let cart = JSON.parse(localStorage.getItem("miniMartCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("miniMartWishlist")) || [];
let currentCategory = "All";
let searchTerm = "";

/* =========================
   START
========================= */

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("totalCount").textContent = products.length;
  renderProducts();
  updateCart();
  updateWishlistBadge();
});

/* =========================
   PRODUCTS
========================= */

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const noProducts = document.getElementById("noProducts");

  if (!grid) return;

  let list = products.filter(function (product) {
    const categoryOK =
      currentCategory === "All" ||
      product.category === currentCategory;

    const searchOK =
      product.name.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryOK && searchOK;
  });

  if (list.length === 0) {
    grid.innerHTML = "";
    noProducts.classList.remove("hidden");
    return;
  }

  noProducts.classList.add("hidden");

  grid.innerHTML = list.map(function (product) {
    const liked = wishlist.includes(product.id);

    return `
      <article class="product-card">

        <div class="product-image">

          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.src='https://placehold.co/700x700?text=Mini+Mart'"
          >

          ${
            product.tag
              ? `<span class="product-tag">${product.tag}</span>`
              : ""
          }

          <button
            class="wishlist-btn ${liked ? "active" : ""}"
            onclick="toggleWishlist(${product.id})"
          >
            ${liked ? "♥" : "♡"}
          </button>

        </div>

        <div class="product-info">

          <div class="product-category">
            ${product.category}
          </div>

          <h3 class="product-name">
            ${product.name}
          </h3>

          <div class="product-bottom">

            <span class="price">
              $${product.price.toFixed(2)}
            </span>

            <button
              class="add-btn"
              onclick="addToCart(${product.id})"
            >
              Add to Bag
            </button>

          </div>

        </div>

      </article>
    `;
  }).join("");
}

/* =========================
   SEARCH
========================= */

function handleSearch() {
  const input = document.getElementById("searchInput");

  searchTerm = input ? input.value : "";

  renderProducts();
}

/* =========================
   CATEGORY
========================= */

function setCategory(category, button) {
  currentCategory = category;

  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.classList.remove("active");
  });

  if (button) {
    button.classList.add("active");
  }

  renderProducts();
}

/* =========================
   SORT
========================= */

function sortProducts() {
  const value = document.getElementById("sortSelect").value;

  if (value === "featured") {
    products.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  if (value === "low") {
    products.sort(function (a, b) {
      return a.price - b.price;
    });
  }

  if (value === "high") {
    products.sort(function (a, b) {
      return b.price - a.price;
    });
  }

  if (value === "name") {
    products.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  }

  renderProducts();
}

/* =========================
   CART
========================= */

function addToCart(id) {
  const product = products.find(function (p) {
    return p.id === id;
  });

  if (!product) return;

  const existing = cart.find(function (item) {
    return item.id === id;
  });

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: id,
      quantity: 1
    });
  }

  saveCart();
  updateCart();

  showToast(product.name + " added to bag ✓");
   toggleCart(true);
}

function updateCart() {
  const container =
    document.getElementById("cartItemsContainer");

  const badge =
    document.getElementById("cartBadge");

  const subtotalElement =
    document.getElementById("cartSubtotal");

  const totalQuantity = cart.reduce(function (total, item) {
    return total + item.quantity;
  }, 0);

  badge.textContent = totalQuantity;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add something you love.</p>
        <button
          class="primary-btn"
          onclick="toggleCart(false); scrollToProducts()"
        >
          Start Shopping
        </button>
      </div>
    `;

    subtotalElement.textContent = "$0.00";
    return;
  }

  let subtotal = 0;

  container.innerHTML = cart.map(function (item) {
    const product = products.find(function (p) {
      return p.id === item.id;
    });

    if (!product) return "";

    subtotal += product.price * item.quantity;

    return `
      <div class="cart-item">

        <img
          src="${product.image}"
          alt="${product.name}"
          onerror="this.src='https://placehold.co/200x200?text=Mini+Mart'"
        >

        <div>
          <div class="product-category">
            ${product.category}
          </div>

          <h4>${product.name}</h4>

          <div class="cart-price">
            $${product.price.toFixed(2)}
          </div>

          <button
            class="remove-btn"
            onclick="removeFromCart(${product.id})"
          >
            Remove
          </button>
        </div>

        <div class="quantity">

          <button onclick="changeQuantity(${product.id}, -1)">
            −
          </button>

          <strong>${item.quantity}</strong>

          <button onclick="changeQuantity(${product.id}, 1)">
            +
          </button>

        </div>

      </div>
    `;
  }).join("");

  subtotalElement.textContent =
    "$" + subtotal.toFixed(2);
}

function changeQuantity(id, amount) {
  const item = cart.find(function (i) {
    return i.id === id;
  });

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(function (i) {
      return i.id !== id;
    });
  }

  saveCart();
  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(function (item) {
    return item.id !== id;
  });

  saveCart();
  updateCart();

  showToast("Item removed from bag");
}

function saveCart() {
  localStorage.setItem(
    "miniMartCart",
    JSON.stringify(cart)
  );
}

/* =========================
   CART DRAWER
========================= */

function toggleCart(open) {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");

  if (open) {
    drawer.classList.add("open");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  } else {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

/* =========================
   WISHLIST
========================= */

function toggleWishlist(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(function (item) {
      return item !== id;
    });

    showToast("Removed from wishlist");
  } else {
    wishlist.push(id);
    showToast("Added to wishlist ♥");
  }

  localStorage.setItem(
    "miniMartWishlist",
    JSON.stringify(wishlist)
  );

  updateWishlistBadge();
  renderProducts();
}

function updateWishlistBadge() {
  const badge =
    document.getElementById("wishlistBadge");

  if (badge) {
    badge.textContent = wishlist.length;
  }
}

function openWishlist() {
  const modal =
    document.getElementById("wishlistModal");

  const content =
    document.getElementById("wishlistContent");

  const items = products.filter(function (product) {
    return wishlist.includes(product.id);
  });

  if (items.length === 0) {
    content.innerHTML = `
      <div class="empty-cart">
        <div class="empty-icon">♡</div>
        <h3>Your wishlist is empty</h3>
        <p>Tap the heart on products you like.</p>
      </div>
    `;
  } else {
    content.innerHTML = items.map(function (product) {
      return `
        <div class="wishlist-item">

          <img
            src="${product.image}"
            alt="${product.name}"
          >

          <div class="wishlist-item-info">
            <h4>${product.name}</h4>
            <strong>$${product.price.toFixed(2)}</strong>
          </div>

          <div class="wishlist-actions">
            <button onclick="addToCart(${product.id})">
              Add
            </button>
          </div>

        </div>
      `;
    }).join("");
  }

  modal.classList.add("open");
}

function closeWishlist() {
  document
    .getElementById("wishlistModal")
    .classList.remove("open");
}

/* =========================
   CHECKOUT
========================= */

function openCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty");
    return;
  }

  toggleCart(false);

  const itemCount = cart.reduce(function (total, item) {
    return total + item.quantity;
  }, 0);

  const total = cart.reduce(function (sum, item) {
    const product = products.find(function (p) {
      return p.id === item.id;
    });

    return sum + product.price * item.quantity;
  }, 0);

  document.getElementById("checkoutItems").textContent =
    itemCount;

  document.getElementById("checkoutTotal").textContent =
    "$" + total.toFixed(2);

  document
    .getElementById("checkoutModal")
    .classList.add("open");
}

function closeCheckout() {
  document
    .getElementById("checkoutModal")
    .classList.remove("open");
}

/* =========================
   PLACE ORDER
========================= */

async function placeOrder(event) {
  event.preventDefault();

  const firstName =
    document.getElementById("firstName").value.trim();

  const lastName =
    document.getElementById("lastName").value.trim();

  const email =
    document.getElementById("email").value.trim();

  const address =
    document.getElementById("address").value.trim();

  const city =
    document.getElementById("city").value.trim();

  const pincode =
    document.getElementById("pincode").value.trim();

  if (
    !firstName ||
    !lastName ||
    !email ||
    !address ||
    !city ||
    !pincode
  ) {
    showToast("Please complete all fields");
    return;
  }

  if (cart.length === 0) {
    showToast("Your cart is empty");
    return;
  }

  const orderItems = cart.map(function (item) {
    const product = products.find(function (p) {
      return p.id === item.id;
    });

    return {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: item.quantity
    };
  });

  const customer = {
    name: firstName + " " + lastName,
    email: email,
    address: address,
    city: city,
    pincode: pincode
  };

  try {
    showToast("Placing your order...");

    const response = await fetch(
      API_URL + "/api/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: orderItems,
          customer: customer
        })
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.message || "Order failed"
      );
    }

    const orders =
      JSON.parse(
        localStorage.getItem("miniMartOrders")
      ) || [];

    orders.push(data.order);

    localStorage.setItem(
      "miniMartOrders",
      JSON.stringify(orders)
    );

    cart = [];

    saveCart();
    updateCart();
    closeCheckout();

    document.getElementById("orderNumber").textContent =
      "Order Number: MM-" + data.order.id;

    document
      .getElementById("successModal")
      .classList.add("open");

    document
      .getElementById("checkoutForm")
      .reset();

  } catch (error) {
    console.error(error);
    showToast(
      "Order failed. Please try again."
    );
  }
}

/* =========================
   SUCCESS
========================= */

function closeSuccess() {
  document
    .getElementById("successModal")
    .classList.remove("open");
}

/* =========================
   TOAST
========================= */

function showToast(message) {
  const toast =
    document.getElementById("toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.miniMartToast);

  window.miniMartToast =
    setTimeout(function () {
      toast.classList.remove("show");
    }, 2200);
}

/* =========================
   NAVIGATION
========================= */

function scrollToProducts() {
  document
    .getElementById("products")
    .scrollIntoView({
      behavior: "smooth"
    });
}

function goHome() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    toggleCart(false);
    closeWishlist();
    closeCheckout();
    closeSuccess();
  }
});
