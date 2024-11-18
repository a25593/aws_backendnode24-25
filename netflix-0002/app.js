const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.get("/api", (req, res) => {
  res.send("Bienvenido pedidos");
});


app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});



