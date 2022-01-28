const { cartProducts, newCart, deleteProduct } = require('./model')
const { verifyUser } = require('../../../lib/jwt')

module.exports = {
    Query: {
        cartProduct: async(_, {}, {token}) => {
            const {id} = verifyUser(token)

            if(id) {
                return await cartProducts(id)
            }
        }
    },
    Cart: {
        id: global => global.cart_id,
        name: global => global.product_name,
        price: global => global.product_price,
        count: global => global.product_count,
    },
    Mutation: {
        addToCart: async(_, {productID, productCount}, {token}) => {
            try {
                const {id} = verifyUser(token)
                
                if(id) {
                   const cart = await newCart(productID, productCount, id)

                   if(cart) {
                       return "OK"
                   }
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}