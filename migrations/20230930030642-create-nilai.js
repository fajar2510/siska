"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Nilai", {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Nilai: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
      },
      Mata_Kuliah_ID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Mata_Kuliah",
          key: "ID",
        },
      },
      Mahasiswa_NIM: {
        type: Sequelize.STRING,
        references: {
          model: "Mahasiswa",
          key: "NIM",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Nilai");
  },
};
