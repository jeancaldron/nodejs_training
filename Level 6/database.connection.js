const { Sequelize } = require("sequelize");
 
const sequelize = new Sequelize("lecture", "root", null, {
 host: "localhost",
 dialect: "mysql",
});
 
module.exports = sequelize;