const { fetch, fetchAll } = require("../../../lib/postgres");

const ALL = `
    SELECT
        *
    FROM
        products
`;

const BY_CATEGORY_ID = `
    SELECT 
        * 
    FROM 
        products
    WHERE
        category_id = $1
`;

const BY_SUBCATEGORY_ID = `
    SELECT 
        * 
    FROM 
        products
    WHERE
        subcategory_id = $1
`;

const NEW_PRODUCT = `
    INSERT INTO
        products(
            product_name,
            product_price,
            product_description,
            category_id,
            subcategory_id
        )
    VALUES($1, $2, $3, $4, $5)
    RETURNING *
`;

const all = () => fetchAll(ALL);
const byCategory = (categoryID) => fetch(BY_CATEGORY_ID, categoryID);
const bySubCategory = (subcategoryID) =>
  fetchAll(BY_SUBCATEGORY_ID, subcategoryID);
const newProduct = (name, price, description, categoryID, subcategoryID) =>
  fetch(NEW_PRODUCT, name, price, description, categoryID, subcategoryID);

module.exports = {
  all,
  byCategory,
  bySubCategory,
  newProduct,
};
