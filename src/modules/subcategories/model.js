const { fetch, fetchAll } = require('../../../lib/postgres')

const SUB_CATEGORIES = `
    SELECT
        *
    FROM
        sub_categories
    WHERE
        category_id = $1
`

const NEW_SUB_CATEGORY = `
    INSERT INTO
        sub_categories(subcategory_name, category_id)
    VALUES($1, $2)
    RETURNING *
`

const subcategories = (categoryID) => fetchAll(SUB_CATEGORIES, categoryID)
const newSubCategory = (name, categoryID) => fetch(NEW_SUB_CATEGORY, name, categoryID)

module.exports = {
    subcategories,
    newSubCategory
}