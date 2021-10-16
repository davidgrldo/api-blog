// Create Product
exports.createProduct = (req, res, next) => {
  res.json(
    {
      message: 'Product created successfully.',
      data: {
        id: 1,
        name: 'Teh botol',
        price: 4000
      }
    }
  );
  next();
}

// Get Products
exports.getProducts = (req, res, next) => {
  res.json(
    {
      message: 'Product data retrieved',
      data : [
        {
          id: 1,
          name: 'Teh Botol',
          price: 4000
        }
      ]
    }
  );
}