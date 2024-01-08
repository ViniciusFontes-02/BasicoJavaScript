function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var formAno = window.document.getElementById("txtano");
  var res = window.document.querySelector("div#res");

  if (formAno.value.length === 0 || Number(formAno.value) > ano) {
    window.alert("[ERRO]Verifique os dados e tente novamente!");
  } else {
    var fsex = window.document.getElementsByName("radsex");
    var idade = ano - Number(formAno.value);
    var gênero = "";
    var img = document.createElement("img");

    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "./imgs/criança-F.png");
      } else if (idade < 21) {
        img.setAttribute("src", "./imgs/adolescente-F.png");
      } else if (idade < 50) {
        img.setAttribute("src", "./imgs/adulto-F.png");
      } else {
        img.setAttribute("src", "./imgs/idoso-F.png");
      }
    } else if (fsex[1].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "./imgs/criança-M.png");
      } else if (idade < 21) {
        img.setAttribute("src", "./imgs/adolescente-M.png");
      } else if (idade < 50) {
        img.setAttribute("src", "./imgs/adulto-M.png");
      } else {
        img.setAttribute("src", "./imgs/idoso-M.png");
      }
    }

    res.innerHTML = `${gênero} com ${idade} anos`;
    res.appendChild(img);
  }
}
