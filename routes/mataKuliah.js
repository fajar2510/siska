const express = require("express");
const router = express.Router();
const MataKuliah = require("../models/MataKuliah");

// CREATE: Tambahkan mata kuliah baru
router.post("/mata-kuliah", async (req, res) => {
  try {
    const { Nama_Mata_Kuliah } = req.body;
    const mataKuliah = await MataKuliah.create({ Nama_Mata_Kuliah });
    res.status(201).json(mataKuliah);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// READ: Dapatkan semua mata kuliah
router.get("/mata-kuliah", async (req, res) => {
  try {
    const mataKuliah = await MataKuliah.findAll();
    res.json(mataKuliah);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// READ: Dapatkan satu mata kuliah berdasarkan ID
router.get("/mata-kuliah/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const mataKuliah = await MataKuliah.findByPk(id);
    if (!mataKuliah) {
      res.status(404).json({ message: "Mata kuliah tidak ditemukan" });
      return;
    }
    res.json(mataKuliah);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// UPDATE: Perbarui mata kuliah berdasarkan ID
router.put("/mata-kuliah/:id", async (req, res) => {
  const { id } = req.params;
  const { Nama_Mata_Kuliah } = req.body;
  try {
    const mataKuliah = await MataKuliah.findByPk(id);
    if (!mataKuliah) {
      res.status(404).json({ message: "Mata kuliah tidak ditemukan" });
      return;
    }
    mataKuliah.Nama_Mata_Kuliah = Nama_Mata_Kuliah;
    await mataKuliah.save();
    res.json(mataKuliah);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// DELETE: Hapus mata kuliah berdasarkan ID
router.delete("/mata-kuliah/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const mataKuliah = await MataKuliah.findByPk(id);
    if (!mataKuliah) {
      res.status(404).json({ message: "Mata kuliah tidak ditemukan" });
      return;
    }
    await mataKuliah.destroy();
    res.json({ message: "Mata kuliah berhasil dihapus" });
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

module.exports = router;
