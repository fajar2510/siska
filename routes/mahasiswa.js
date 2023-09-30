const express = require("express");
const router = express.Router();
const Mahasiswa = require("../models/Mahasiswa");

// CREATE: Tambahkan mahasiswa baru
router.post("/mahasiswa", async (req, res) => {
  try {
    const { NIM, Nama_Mahasiswa, Tahun_Masuk } = req.body;
    const mahasiswa = await Mahasiswa.create({
      NIM,
      Nama_Mahasiswa,
      Tahun_Masuk,
    });
    res.status(201).json(mahasiswa);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// READ: Dapatkan semua mahasiswa
router.get("/mahasiswa", async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findAll();
    res.json(mahasiswa);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// READ: Dapatkan satu mahasiswa berdasarkan NIM
router.get("/mahasiswa/:nim", async (req, res) => {
  const { nim } = req.params;
  try {
    const mahasiswa = await Mahasiswa.findOne({ where: { NIM: nim } });
    if (!mahasiswa) {
      res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
      return;
    }
    res.json(mahasiswa);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// UPDATE: Perbarui mahasiswa berdasarkan NIM
router.put("/mahasiswa/:nim", async (req, res) => {
  const { nim } = req.params;
  const { Nama_Mahasiswa, Tahun_Masuk } = req.body;
  try {
    const mahasiswa = await Mahasiswa.findOne({ where: { NIM: nim } });
    if (!mahasiswa) {
      res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
      return;
    }
    mahasiswa.Nama_Mahasiswa = Nama_Mahasiswa;
    mahasiswa.Tahun_Masuk = Tahun_Masuk;
    await mahasiswa.save();
    res.json(mahasiswa);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// DELETE: Hapus mahasiswa berdasarkan NIM
router.delete("/mahasiswa/:nim", async (req, res) => {
  const { nim } = req.params;
  try {
    const mahasiswa = await Mahasiswa.findOne({ where: { NIM: nim } });
    if (!mahasiswa) {
      res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
      return;
    }
    await mahasiswa.destroy();
    res.json({ message: "Mahasiswa berhasil dihapus" });
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

module.exports = router;
