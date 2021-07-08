import { handleTarefa } from "./criaTabela.js";

const enviar = document.querySelector("[data-button]");

enviar.addEventListener("click", handleTarefa);

