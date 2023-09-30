// Import instance Sequelize yang telah diinisialisasi
const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

// Buat model setelah menginisialisasi Sequelize
const MataKuliah = sequelize.define("MataKuliah", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nama_Mata_Kuliah: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = MataKuliah;
