const { all, byCategory, bySubCategory, newProduct } = require("./model");

module.exports = {
  Query: {
    products: async (_, { categoryID, subcategoryID }) => {
      if (categoryID && subcategoryID) {
        console.log(subcategoryID);
        return await bySubCategory(+subcategoryID);
      }
      if (categoryID) {
        console.log(2);
        return await byCategory(categoryID);
      }
      console.log(3);
      return await all();
    },
  },
  Products: {
    id: (global) => global.product_id,
    name: (global) => global.product_name,
    price: (global) => global.product_price,
    description: (global) => global.product_description,
  },
  Mutation: {
    newProduct: async (
      _,
      { detail: { name, price, description, categoryID, subcategoryID } }
    ) => {
      try {
        const product = await newProduct(
          name,
          price,
          description,
          categoryID,
          subcategoryID
        );
        return product;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
