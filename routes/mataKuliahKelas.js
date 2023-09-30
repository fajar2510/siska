const express = require("express");
const router = express.Router();
const MataKuliahKelas = require("../models/MataKuliahKelas");

// CREATE: Tambahkan hubungan Mata Kuliah - Kelas baru
router.post("/mata-kuliah-kelas", async (req, res) => {
  try {
    const { Mata_Kuliah_ID, Kelas_ID } = req.body;
    const mataKuliahKelas = await MataKuliahKelas.create({
      Mata_Kuliah_ID,
      Kelas_ID,
    });
    res.status(201).json(mataKuliahKelas);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// READ: Dapatkan semua hubungan Mata Kuliah - Kelas
router.get("/mata-kuliah-kelas", async (req, res) => {
  try {
    const mataKuliahKelas = await MataKuliahKelas.findAll();
    res.json(mataKuliahKelas);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// READ: Dapatkan satu hubungan Mata Kuliah - Kelas berdasarkan ID Mata Kuliah dan Kelas
router.get("/mata-kuliah-kelas/:mataKuliahID/:kelasID", async (req, res) => {
  const { mataKuliahID, kelasID } = req.params;
  try {
    const mataKuliahKelas = await MataKuliahKelas.findOne({
      where: { Mata_Kuliah_ID: mataKuliahID, Kelas_ID: kelasID },
    });
    if (!mataKuliahKelas) {
      res
        .status(404)
        .json({ message: "Hubungan Mata Kuliah - Kelas tidak ditemukan" });
      return;
    }
    res.json(mataKuliahKelas);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// DELETE: Hapus hubungan Mata Kuliah - Kelas berdasarkan ID Mata Kuliah dan Kelas
router.delete("/mata-kuliah-kelas/:mataKuliahID/:kelasID", async (req, res) => {
  const { mataKuliahID, kelasID } = req.params;
  try {
    const mataKuliahKelas = await MataKuliahKelas.findOne({
      where: { Mata_Kuliah_ID: mataKuliahID, Kelas_ID: kelasID },
    });
    if (!mataKuliahKelas) {
      res
        .status(404)
        .json({ message: "Hubungan Mata Kuliah - Kelas tidak ditemukan" });
      return;
    }
    await mataKuliahKelas.destroy();
    res.json({ message: "Hubungan Mata Kuliah - Kelas berhasil dihapus" });
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

module.exports = router;
