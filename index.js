const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json([
    {
      id: 1,
      namaProvinsi: 'Jambi',
      namaKota: 'Kab. Tebo',
      namaKecamatan: 'Tebo Tengah',
      namaDesa: 'Tebing Tinggi',
    },
    {
      id: 2,
      namaProvinsi: 'Jawa Barat',
      namaKota: 'Karawang',
      namaKecamatan: 'Rengas Dengklok',
      namaDesa: 'Rengas Dengklok Utara',
    },
    {
      id: 3,
      namaProvinsi: 'Aceh',
      namaKota: 'Gayo lues',
      namaKecamatan: 'Blankejeren',
      namaDesa: 'Penampaan uken',
    },
    {
      id: 4,
      namaProvinsi: 'Jawa Barat',
      namaKota: 'Kota Bandung',
      namaKecamatan: 'Cimenyan',
      namaDesa: 'Mandalamekar',
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
