const express = require("express");
const router = express.Router();
const Kelas = require("../models/Kelas");

// CREATE: Tambahkan kelas baru
router.post("/kelas", async (req, res) => {
  try {
    const { Nama_Kelas } = req.body;
    const kelas = await Kelas.create({ Nama_Kelas });
    res.status(201).json(kelas);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// READ: Dapatkan semua kelas
router.get("/kelas", async (req, res) => {
  try {
    const kelas = await Kelas.findAll();
    res.json(kelas);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// READ: Dapatkan satu kelas berdasarkan ID
router.get("/kelas/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const kelas = await Kelas.findByPk(id);
    if (!kelas) {
      res.status(404).json({ message: "Kelas tidak ditemukan" });
      return;
    }
    res.json(kelas);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// UPDATE: Perbarui kelas berdasarkan ID
router.put("/kelas/:id", async (req, res) => {
  const { id } = req.params;
  const { Nama_Kelas } = req.body;
  try {
    const kelas = await Kelas.findByPk(id);
    if (!kelas) {
      res.status(404).json({ message: "Kelas tidak ditemukan" });
      return;
    }
    kelas.Nama_Kelas = Nama_Kelas;
    await kelas.save();
    res.json(kelas);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// DELETE: Hapus kelas berdasarkan ID
router.delete("/kelas/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const kelas = await Kelas.findByPk(id);
    if (!kelas) {
      res.status(404).json({ message: "Kelas tidak ditemukan" });
      return;
    }
    await kelas.destroy();
    res.json({ message: "Kelas berhasil dihapus" });
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

module.exports = router;
