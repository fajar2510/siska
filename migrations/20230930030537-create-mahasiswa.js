"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Mahasiswa", {
      NIM: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      Nama_Mahasiswa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Tahun_Masuk: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable("Mahasiswa");
  },
};
