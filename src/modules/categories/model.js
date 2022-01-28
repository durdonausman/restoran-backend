const { fetch, fetchAll } = require('../../../lib/postgres')

const CATEGORIES = `
    SELECT
        *
    FROM
        categories
`

const NEW_CATEGORY = `
    INSERT INTO
        categories(category_name)
    VALUES($1)
    RETURNING *
`

const categories = () => fetchAll(CATEGORIES)
const newCategory = (name) => fetch(NEW_CATEGORY, name)

module.exports = {
    categories,
    newCategory
}