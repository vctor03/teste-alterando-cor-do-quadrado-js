const botaoMudarDeCor1 = document.getElementById("botao");
const mudarCor1 = document.getElementById("cor-1");
const voltarCor = document.getElementById("botao-voltar");

botaoMudarDeCor1.addEventListener("click", () => {
  if (mudarCor1.classList.contains("cor1")) {
    mudarCor1.classList.replace("cor1", "cor1-mudada");
    botaoMudarDeCor1.innerText = "voltar cor";
  } else {
    mudarCor1.classList.replace("cor1-mudada", "cor1");
    botaoMudarDeCor1.innerText = "Trocar de cor";
  }
});
