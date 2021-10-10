// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'Category_id',
})
// Categories have many Products
Category.hasMany(Products, {
  foreignKey: 'Category_id',
})
// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'priced-item'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Products{
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'Tagged-products'
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
