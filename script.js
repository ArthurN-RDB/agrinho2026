function analisarPlantacao(){

  const plantacao =
  document.getElementById("plantacao").value;

  const clima =
  document.getElementById("clima").value;

  const umidade =
  document.getElementById("umidade").value;

  let mensagem = "";

  if(clima === "Seco" && umidade === "Baixa"){

    mensagem =
    `
    ⚠️ A IA detectou risco de ressecamento na plantação de ${plantacao}.

    Recomendações:
    • aumentar irrigação;
    • monitorar temperatura do solo;
    • evitar exposição excessiva ao calor.
    `;
  }

  else if(clima === "Chuvoso" && umidade === "Alta"){

    mensagem =
    `
    🌧️ Há risco de fungos e pragas na plantação de ${plantacao}.

    Recomendações:
    • monitoramento constante;
    • controle biológico;
    • análise preventiva da lavoura.
    `;
  }

  else{

    mensagem =
    `
    ✅ A plantação de ${plantacao} apresenta boas condições.

    A IA recomenda:
    • manter monitoramento;
    • continuar irrigação equilibrada;
    • acompanhar previsões climáticas.
    `;
  }

  const resultado =
  document.getElementById("resultado");

  resultado.style.display = "block";

  resultado.innerText = mensagem;
}

function scrollToSection(){

  document.getElementById("sobre")
  .scrollIntoView({
    behavior:"smooth"
  });

}
