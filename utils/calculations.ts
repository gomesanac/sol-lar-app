export function calcularGeracaoMensal(
  irradiancia: number,
  area: number,
  eficiencia: number
) {
  return irradiancia * area * eficiencia * 30; // 30 dias no mês
}

export function calcularEconomia(geracao: number, tarifa: number) {
  return geracao * tarifa;
}

export function calcularPayback(custoSistema: number, economiaMensal: number) {
  return economiaMensal > 0 ? custoSistema / economiaMensal : 0;
}

export function calcularCO2Evitado(geracao: number) {
  const fatorEmissao = 0.055; // kg CO₂ por kWh
  return geracao * fatorEmissao;
}
