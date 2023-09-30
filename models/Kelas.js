const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const Kelas = sequelize.define("Kelas", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nama_Kelas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Kelas;
