const express = require('express');
const cors = require('cors');
require('dotenv').config();
const supabase = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// API 1: AMBIL SEMUA PRODUK
app.get('/api/produk', async (req, res) => {
  const { data, error } = await supabase.from('produk').select('*');
  if(error) return res.status(500).json({error: error.message});
  res.json(data);
});

app.listen(3000, () => console.log('Server jalan di port 3000'));
