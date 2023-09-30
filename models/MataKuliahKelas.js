const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const MataKuliahKelas = sequelize.define("MataKuliahKelas", {
  Mata_Kuliah_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: "MataKuliah",
      key: "ID",
    },
  },
  Kelas_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: "Kelas",
      key: "ID",
    },
  },
});

module.exports = MataKuliahKelas;
