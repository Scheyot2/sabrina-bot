// Serve para a fórmula de atualizar os arquivos de menus e informações do dono, sem ficar reiniciar ou ligando ou desligando sempre quando ocorrer alguma modificação no arquivo.
// Sistema de atualização feito por: @vitinho.exe
// Aqui só vai ficar esse 2 módulos por enquanto.

const colors = require("colors");
const fs = require('fs-extra');

// Fórmula de exportação do arquivo:
module.exports = { fs, colors }