const { DataTypes, Model } = require("sequelize");
const sequelize = require("./database.connection");
 
class Product extends Model {}
 
Product.init(
 {
   id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     allowNull: false,
   },
   description: {
     type: DataTypes.STRING,
   },
 },
 {
   sequelize,
   modelName: "Product",
 }
);
 
module.exports = Product;