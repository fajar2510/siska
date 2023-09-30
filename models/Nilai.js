const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const Nilai = sequelize.define("Nilai", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nilai: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
});

module.exports = Nilai;
