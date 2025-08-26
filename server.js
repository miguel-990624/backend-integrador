require('dotenv').config();
const express = require('express');
const cors = require('cors');
const genericRoutes = require('./routes/generic');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', genericRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});