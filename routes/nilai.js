const express = require("express");
const router = express.Router();
const Nilai = require("../models/Nilai");

// CREATE: Tambahkan nilai baru
router.post("/nilai", async (req, res) => {
  try {
    const { Nilai, Mata_Kuliah_ID, Mahasiswa_NIM } = req.body;
    const nilai = await Nilai.create({ Nilai, Mata_Kuliah_ID, Mahasiswa_NIM });
    res.status(201).json(nilai);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// READ: Dapatkan semua nilai
router.get("/nilai", async (req, res) => {
  try {
    const nilai = await Nilai.findAll();
    res.json(nilai);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// READ: Dapatkan satu nilai berdasarkan ID
router.get("/nilai/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const nilai = await Nilai.findByPk(id);
    if (!nilai) {
      res.status(404).json({ message: "Nilai tidak ditemukan" });
      return;
    }
    res.json(nilai);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// UPDATE: Perbarui nilai berdasarkan ID
router.put("/nilai/:id", async (req, res) => {
  const { id } = req.params;
  const { Nilai, Mata_Kuliah_ID, Mahasiswa_NIM } = req.body;
  try {
    const nilai = await Nilai.findByPk(id);
    if (!nilai) {
      res.status(404).json({ message: "Nilai tidak ditemukan" });
      return;
    }
    nilai.Nilai = Nilai;
    nilai.Mata_Kuliah_ID = Mata_Kuliah_ID;
    nilai.Mahasiswa_NIM = Mahasiswa_NIM;
    await nilai.save();
    res.json(nilai);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// DELETE: Hapus nilai berdasarkan ID
router.delete("/nilai/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const nilai = await Nilai.findByPk(id);
    if (!nilai) {
      res.status(404).json({ message: "Nilai tidak ditemukan" });
      return;
    }
    await nilai.destroy();
    res.json({ message: "Nilai berhasil dihapus" });
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

module.exports = router;
