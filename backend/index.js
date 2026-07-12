const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Import Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/produk', require('./routes/produk'));
app.use('/api/pesanan', require('./routes/pesanan'));

app.listen(3000, () => console.log('Server jalan di 3000'));
