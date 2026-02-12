import type { WeekId } from "../types/shopping";

export function getWeekId(date: Date): WeekId {
  const year = date.getFullYear();

  // Inicio do ano
  // Date(ano, mês, dia)
  const start = new Date(year, 0, 1);

  // Diferença em dias
  const diffMs = date.getTime() - start.getTime(); // Quantos milissegundos se passaram desde o início do ano até a data.
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)); //converte milissegundos -> dias.

  // Ajuste pelo dia da semana do início do ano
  // Devolve o dia da semana (0 para domingo, 1 para segunda, ..., 6 para sábado)
  const startDay = start.getDay();

  // Transforma “dias passados” em “número da semana”
  // A fórmula é: (dias passados + dia da semana do início do ano) / 7, arredondado para baixo, mais 1.
  const week = Math.floor((diffDays + startDay) / 7) + 1;

  // padStart(2, "0") formatação de string.
  // Se a semana for 1, fica "01", se for 2, fica "02", e assim por diante. Isso garante que o número da semana tenha sempre dois dígitos.
  const weekStr = String(week).padStart(2, "0");
  return `${year}-W${weekStr}` as WeekId; //Essa string aqui deve ser considerada do tipo WeekId
}
