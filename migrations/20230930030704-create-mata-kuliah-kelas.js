"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Mata_Kuliah_Kelas", {
      Mata_Kuliah_ID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Mata_Kuliah",
          key: "ID",
        },
        allowNull: false,
      },
      Kelas_ID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Kelas",
          key: "ID",
        },
        allowNull: false,
      },
    });

    // Menambahkan indeks unik pada kolom-kolom referensi
    await queryInterface.addConstraint("Mata_Kuliah_Kelas", {
      fields: ["Mata_Kuliah_ID", "Kelas_ID"],
      type: "unique",
      name: "unique_mata_kuliah_kelas",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Mata_Kuliah_Kelas");
  },
};
