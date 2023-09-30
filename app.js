const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { sequelize } = require("./utils/sequelize"); // Import instance Sequelize

// Middleware untuk mengakses body request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setel view engine EJS
app.set("view engine", "ejs");

// Import model-model Anda di sini
const MataKuliah = require("./models/MataKuliah");
const Mahasiswa = require("./models/Mahasiswa");
const Kelas = require("./models/Kelas");
const Nilai = require("./models/Nilai");
const MataKuliahKelas = require("./models/MataKuliahKelas");

// Define rute-rute Anda di sini (sesuaikan dengan kebutuhan Anda)
const mahasiswaRouter = require("./routes/mahasiswa");
const kelasRouter = require("./routes/kelas");
const nilaiRouter = require("./routes/nilai");
const mataKuliahRouter = require("./routes/mataKuliah");
const mataKuliahKelasRouter = require("./routes/mataKuliahKelas");

// Import dan gunakan rute Swagger
// const swaggerRoute = require('./routes/swagger');
// app.use('/api-docs', swaggerRoute);

// Define rute utama (Anda dapat menggantinya sesuai kebutuhan)
app.get("/", (req, res) => {
  res.render("index"); // Misalnya, render file EJS 'index'
});

// Middleware untuk menangani kesalahan 404
app.use((req, res, next) => {
  res.status(404).send("Halaman tidak ditemukan");
});

// Middleware untuk menangani kesalahan server
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Terjadi kesalahan server");
});

// Sinkronisasi database dan jalankan aplikasi
sequelize
  .sync() // Ini akan menjalankan semua migrasi
  .then(() => {
    app.listen(port, () => {
      console.log(`Server berjalan di port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Terjadi kesalahan saat menghubungkan ke database:", error);
  });
