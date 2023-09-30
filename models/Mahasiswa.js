const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const Mahasiswa = sequelize.define("Mahasiswa", {
  NIM: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  Nama_Mahasiswa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Tahun_Masuk: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Mahasiswa;
