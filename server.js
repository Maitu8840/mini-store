const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Mini Mart Backend is running!"
  });
});

app.get("/api/products", (req, res) => {
  res.json([
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
  ]);
});

app.post("/api/orders", (req, res) => {

  const order = req.body;

  console.log("New Order:", order);

  res.status(201).json({
    success: true,
    message: "Order received successfully",
    order: order
  });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Mini Mart Backend running on port ${PORT}`);
});
