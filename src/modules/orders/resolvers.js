const { newOrder, newOrderDetail, orderDetails } = require('./model')
const { verifyUser } = require('../../../lib/jwt')
const { deleteProduct } = require('../cart/model')

module.exports = {
    Query: {
        orders: async(_, { orderID }, { token }) => {
            return await orderDetails(orderID)
        }
    },
    Mutation: {
        newOrder: async(_, { address }, { token }) => {
            try {
                const { id } = verifyUser(token)

                if(id) {
                    const order = await newOrder(address, id)

                    const cartProducts = await deleteProduct(id)

                    for(let product of cartProducts) {
                        const newDetailedOder = await newOrderDetail(product.product_id, product.product_count, order.order_id)
                        console.log(newDetailedOder)
                    }

                    return order
                }
            } catch(e) {
                console.log(e)
            }
        }
    },
    Orders: {
        id: global => global.order_id,
        address: global => global.order_address
    },
    OrderDetails: {
        id: global => global.order_id,
        name: global => global.product_name,
        price: global => global.product_price,
        count: global => global.product_count,
        address: global => global.order_address,
        userName: global => global.user_name,
    },
}