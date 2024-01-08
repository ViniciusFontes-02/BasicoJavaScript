function carregar() {
  let mensagem = document.getElementById("mensagem");
  let img = document.querySelector("#imagem");
  let data = new Date();
  // let hora = data.getHours();
  let hora = 22;

  if (hora >= 0 && hora < 12) {
    //Bom dia!
    img.src = "foto-manha.jpg";
    document.body.style.background = "#cfc143";
    mensagem.innerHTML = `Agora são ${hora} horas. <br>Bom dia!`;
  } else if (hora >= 12 && hora <= 18) {
    //Boa tarde!
    img.src = "foto-tarde.jpg";
    document.body.style.background = "#db6a00";
    mensagem.innerHTML = `Agora são ${hora} horas. <br>Boa tarde!`;
  } else {
    img.src = "foto-noite.jpg";
    document.body.style.background = "#010133";
    mensagem.innerHTML = `Agora são ${hora} horas. <br>Boa noite!`;

    //Boa Noite!
  }
}
