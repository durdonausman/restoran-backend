const {categories, newCategory} = require('./model')

module.exports = {
    Query: {
        categories: async() => {
            return await categories()
        }
    },
    Categories: {
        id: global => global.category_id,
        name: global => global.category_name
    },
    Mutation: {
        newCategory: async(_, {name}) => {
            try {
                const category = await newCategory(name)
                return category
            } catch (error) {
                console.log(error)
            }
        }
    }
}
