const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   PRODUCTS
========================= */

const products = [
  {
    id: 1,
    name: "Heavyweight Boxy Tee",
    price: 28,
    category: "Tops"
  },
  {
    id: 2,
    name: "Washed Vintage Graphic Tee",
    price: 32,
    category: "Tops"
  },
  {
    id: 3,
    name: "Slim Fit Stretch Chinos",
    price: 55,
    category: "Bottoms"
  }
];

/* =========================
   ORDERS
========================= */

let orders = [];
let nextOrderId = 1;

/* =========================
   HOME / HEALTH CHECK
========================= */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Mini Mart Backend is running!"
  });
});

/* =========================
   GET ALL PRODUCTS
========================= */

app.get("/api/products", (req, res) => {
  res.json({
    success: true,
    count: products.length,
    products: products
  });
});

/* =========================
   GET SINGLE PRODUCT
========================= */

app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find(item => item.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    });
  }

  res.json({
    success: true,
    product: product
  });
});

/* =========================
   SEARCH / FILTER PRODUCTS
========================= */

app.get("/api/search", (req, res) => {
  const search = (req.query.q || "").toLowerCase();
  const category = (req.query.category || "").toLowerCase();

  let result = products;

  if (search) {
    result = result.filter(product =>
      product.name.toLowerCase().includes(search)
    );
  }

  if (category && category !== "all") {
    result = result.filter(product =>
      product.category.toLowerCase() === category
    );
  }

  res.json({
    success: true,
    count: result.length,
    products: result
  });
});

/* =========================
   CREATE ORDER
========================= */
// TEMPORARY TEST ORDER
app.get("/api/test-order", (req, res) => {
  const order = {
    id: nextOrderId++,
    items: [
      {
        productId: 1,
        name: "Heavyweight Boxy Tee",
        price: 28,
        quantity: 1
      }
    ],
    customer: {
      name: "Test Customer",
      phone: "9999999999"
    },
    status: "Pending",
    paymentStatus: "Pending",
    createdAt: new Date().toISOString()
  };

  orders.push(order);

  res.json({
    success: true,
    message: "Test order created successfully",
    order: order
  });
});
// CANCEL ORDER
app.get("/api/test-cancel/:id", (req, res) => {
  const id = Number(req.params.id);

  const order = orders.find(item => item.id === id);

  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Order not found"
    });
  }

  if (order.status === "Delivered") {
    return res.status(400).json({
      success: false,
      message: "Delivered order cannot be cancelled"
    });
  }

  order.status = "Cancelled";

  res.json({
    success: true,
    message: "Order cancelled successfully",
    order: order
  });
});
app.post("/api/orders", (req, res) => {
  const { items, customer } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      success: false,
      message: "Order must contain at least one item"
    });
  }

  const order = {
    id: nextOrderId++,
    items: items,
    customer: customer || {},
    status: "Pending",
    paymentStatus: "Pending",
    createdAt: new Date().toISOString()
  };

  orders.push(order);

  res.status(201).json({
    success: true,
    message: "Order received successfully",
    order: order
  });
});

/* =========================
   GET ALL ORDERS
========================= */

app.get("/api/orders", (req, res) => {
  res.json({
    success: true,
    count: orders.length,
    orders: orders
  });
});

/* =========================
   GET SINGLE ORDER
========================= */

app.get("/api/orders/:id", (req, res) => {
  const id = Number(req.params.id);

  const order = orders.find(item => item.id === id);

  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Order not found"
    });
  }

  res.json({
    success: true,
    order: order
  });
});

/* =========================
   UPDATE ORDER STATUS
========================= */

app.put("/api/orders/:id/status", (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body;

  const order = orders.find(item => item.id === id);

  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Order not found"
    });
  }

  const allowedStatus = [
    "Pending",
    "Confirmed",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled"
  ];

  if (!allowedStatus.includes(status)) {
    return res.status(400).json({
      success: false,
      message: "Invalid order status"
    });
  }

  order.status = status;

  res.json({
    success: true,
    message: "Order status updated",
    order: order
  });
});

/* =========================
   CANCEL ORDER
========================= */

app.put("/api/orders/:id/cancel", (req, res) => {
  const id = Number(req.params.id);

  const order = orders.find(item => item.id === id);

  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Order not found"
    });
  }

  if (order.status === "Delivered") {
    return res.status(400).json({
      success: false,
      message: "Delivered order cannot be cancelled"
    });
  }

  order.status = "Cancelled";

  res.json({
    success: true,
    message: "Order cancelled successfully",
    order: order
  });
});

/* =========================
   DELETE ORDER
========================= */

app.delete("/api/orders/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = orders.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Order not found"
    });
  }

  const deletedOrder = orders.splice(index, 1)[0];

  res.json({
    success: true,
    message: "Order deleted successfully",
    order: deletedOrder
  });
});

/* =========================
   PAYMENT
========================= */

app.post("/api/payment", (req, res) => {
  const { orderId, method } = req.body;

  const order = orders.find(item => item.id === Number(orderId));

  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Order not found"
    });
  }

  const allowedMethods = [
    "COD",
    "UPI",
    "Card"
  ];

  if (!allowedMethods.includes(method)) {
    return res.status(400).json({
      success: false,
      message: "Invalid payment method"
    });
  }

  order.paymentStatus = "Paid";
  order.paymentMethod = method;

  res.json({
    success: true,
    message: "Payment processed successfully",
    order: order
  });
});

/* =========================
   404 ERROR
========================= */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found"
  });
});

/* =========================
   SERVER
========================= */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Mini Mart Backend running on port ${PORT}`);
});
