const { fetch, fetchAll } = require("../../../lib/postgres");

const CART_PRODUCTS = `
SELECT 
    p.product_id,
    p.product_name,
    p.product_price,
    c.cart_id,
    c.product_id,
    c.product_count,
    c.user_id
FROM 
    products p
INNER JOIN
    cart c
ON
    p.product_id = c.product_id
WHERE
    c.user_id = $1
`;

const NEW_CART = `
INSERT INTO
    cart(product_id, product_count, user_id)
VALUES($1, $2, $3)
RETURNING *
`;

const DELETE_PRODUCT = `
DELETE 
    FROM
cart
    WHERE
user_id = $1
    RETURNING * 
`;

const cartProducts = (id) => fetchAll(CART_PRODUCTS, id);
const newCart = (productID, count, id) => fetch(NEW_CART, productID, count, id);
const deleteProduct = (id) => fetchAll(DELETE_PRODUCT, id);

module.exports = {
  cartProducts,
  newCart,
  deleteProduct,
};
