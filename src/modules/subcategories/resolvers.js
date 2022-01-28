const {subcategories, newSubCategory} = require('./model')

module.exports = {
    Query: {
        subcategories: async(_, {categoryID}) => {
            return await subcategories(categoryID)
        }
    },
    SubCategories: {
        id: global => global.subcategory_id,
        name: global => global.subcategory_name
    },
    Mutation: {
        newSubCategory: async(_, {name, categoryID}) => {
            try {
                const subcategory = await newSubCategory(name, categoryID)
                return subcategory
            } catch (error) {
                console.log(error)
            }
        }
    }
}
