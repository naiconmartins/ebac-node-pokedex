const express = require("express");

const { Pokemon } = require("../models");

const router = express.Router();

router.get("/", (req, res) => {
  Pokemon.find()
    .then((pokemons) => {
      res.render("paginas/pokemons/index", { pokemons });
    })
    .catch((error) => {
      console.error("Erro ao buscar pokémons:", error);
      res.status(500).send("Erro ao processar sua solicitação");
    });
});

module.exports = router;
