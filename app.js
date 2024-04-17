const express = require("express");
const path = require("path");

const { connect } = require("./models");

const pokemonsRouter = require("./routes/pokemons");
const batalhaRouter = require("./routes/batalha");

const app = express();
const expressLayout = require("express-ejs-layouts");

//configurando ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayout);

//configurando arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

//declarando rotas
app.use("/pokemons", pokemonsRouter);
app.use("/batalha", batalhaRouter);

const porta = 3000;
app.listen(porta, () => {
  connect();
  console.log(`Servidor ouvindo na porta ${porta}`);
});
