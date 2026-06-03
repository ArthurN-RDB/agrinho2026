function analisarDados() {
  const cultura = document.getElementById("cultura").value;
  const fonteDados = document.getElementById("fonteDados").value;
  const objetivo = document.getElementById("objetivo").value;

  let mensagem = "";

  // Lógica de simulação de Big Data
  if (fonteDados === "Estação Meteorológica" && objetivo === "Otimizar Irrigação") {
    mensagem = 
    `
    📊 Relatório de Dados para ${cultura}:
    
    Os algoritmos cruzaram o histórico de chuvas com a evapotranspiração atual.
    
    Insight Gerado:
    • Há previsão de chuva nas próximas 48h.
    • Ação recomendada: Suspender a irrigação automática para economizar água e energia.
    `;
  } 
  else if (fonteDados === "Imagens de Satélite (NDVI)" && objetivo === "Identificar Pragas/Doenças") {
    mensagem = 
    `
    🛰️ Análise Espectral da Plantação de ${cultura}:
    
    O mapeamento de pixels revelou manchas com baixo índice de biomassa na região Norte do talhão.
    
    Insight Gerado:
    • Anomalia detectada precocemente.
    • Ação recomendada: Enviar drone ou técnico exatamente às coordenadas X/Y para checagem localizada de pragas.
    `;
  } 
  else if (fonteDados === "Sensores de Solo (IoT)" && objetivo === "Aplicação de Fertilizante") {
    mensagem = 
    `
    🧪 Mapa de Nutrientes para ${cultura}:
    
    A rede de sensores processou 5.000 pontos de dados e identificou áreas com deficiência de Nitrogênio.
    
    Insight Gerado:
    • Criação de mapa de prescrição em Taxa Variável.
    • Ação recomendada: Exportar o mapa para o trator para aplicar fertilizante apenas nas manchas deficientes, gerando economia.
    `;
  } 
  else {
    mensagem = 
    `
    ✅ Cruzamento de dados concluído com sucesso para ${cultura}.
    
    Combinar ${fonteDados} com o foco em ${objetivo} gera um volume de dados valioso. 
    
    O sistema recomenda a criação de um Dashboard para visualização em tempo real dessas métricas.
    `;
  }

  const resultado = document.getElementById("resultado");
  resultado.style.display = "block";
  resultado.innerText = mensagem;
}

function scrollToSection() {
  document.getElementById("sobre").scrollIntoView({
    behavior: "smooth"
  });
}