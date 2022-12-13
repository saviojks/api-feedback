import express from "express";

const app = express();

app.get("/test", (req, res) => {
  return res.send({ OK: "Tudo okay aqui" });
});

app.listen(3000, () => console.log("server Running!!! `-` "));
