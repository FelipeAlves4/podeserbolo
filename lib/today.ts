import { SCHEDULE, type Stop } from "@/data/schedule"

const TIME_ZONE = "America/Sao_Paulo"

/** Índice do dia da semana (0 = domingo) no fuso de Marília/SP. */
export function getWeekdayIndex(date: Date = new Date()): number {
  const name = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
  }).format(date)

  const map: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  }
  return map[name] ?? date.getDay()
}

/** Parada de hoje, ou null quando não há atendimento no dia. */
export function getStopForWeekday(weekday: number): Stop | null {
  return SCHEDULE.find((stop) => stop.weekday === weekday) ?? null
}

/** Próxima parada a partir de um dia (procura os 7 dias seguintes). */
export function getNextStop(weekday: number): Stop {
  for (let offset = 1; offset <= 7; offset++) {
    const next = getStopForWeekday((weekday + offset) % 7)
    if (next) return next
  }
  return SCHEDULE[0]
}

export type TodayState =
  | { kind: "open"; weekday: number; stop: Stop }
  | { kind: "closed"; weekday: number; next: Stop }

export function resolveToday(weekday: number): TodayState {
  const stop = getStopForWeekday(weekday)
  if (stop) return { kind: "open", weekday, stop }
  return { kind: "closed", weekday, next: getNextStop(weekday) }
}

export const WEEKDAY_SHORT = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
