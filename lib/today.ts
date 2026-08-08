import { SCHEDULE, type Stop } from "@/data/schedule"

export const SAO_PAULO_TIME_ZONE = "America/Sao_Paulo"

const WEEKDAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
}

export const WEEKDAY_SHORT = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

export type SaoPauloNow = {
  weekday: number
  minutes: number
}

/** Retorna dia e horário atuais explicitamente no fuso de Marília/SP. */
export function getSaoPauloNow(date: Date = new Date()): SaoPauloNow {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: SAO_PAULO_TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date)

  const value = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value
  const hour = Number(value("hour") ?? 0)
  const minute = Number(value("minute") ?? 0)

  return { weekday: WEEKDAY_INDEX[value("weekday") ?? ""] ?? 0, minutes: hour * 60 + minute }
}

export function getWeekdayIndex(date: Date = new Date()): number {
  return getSaoPauloNow(date).weekday
}

export function getStopForWeekday(weekday: number): Stop | null {
  return SCHEDULE.find((stop) => stop.weekday === weekday) ?? null
}

/** Encontra a próxima parada confirmada, inclusive depois da virada da semana. */
export function getNextConfirmedStop(weekday: number): Stop {
  for (let offset = 1; offset <= 7; offset += 1) {
    const next = getStopForWeekday((weekday + offset) % 7)
    if (next) return next
  }
  throw new Error("A programação precisa ter ao menos uma parada confirmada.")
}

/** @deprecated Use getNextConfirmedStop. Mantido para compatibilidade interna. */
export const getNextStop = getNextConfirmedStop

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number)
  return hours * 60 + minutes
}

export type TodayState =
  | { kind: "before"; weekday: number; stop: Stop; next: Stop }
  | { kind: "active"; weekday: number; stop: Stop; next: Stop }
  | { kind: "after"; weekday: number; stop: Stop; next: Stop }
  | { kind: "unconfirmed"; weekday: number; next: Stop }

/**
 * Resolve o estado da rota no instante informado. A data recebida é convertida
 * para America/Sao_Paulo, portanto não depende do timezone do servidor.
 */
export function getCurrentScheduleState(date: Date = new Date()): TodayState {
  const { weekday, minutes } = getSaoPauloNow(date)
  const stop = getStopForWeekday(weekday)
  const next = getNextConfirmedStop(weekday)

  if (!stop) return { kind: "unconfirmed", weekday, next }

  if (minutes < timeToMinutes(stop.openingTime)) return { kind: "before", weekday, stop, next }
  if (minutes < timeToMinutes(stop.closingTime)) return { kind: "active", weekday, stop, next }
  return { kind: "after", weekday, stop, next }
}

/** Destino mais útil para um CTA: a parada atual/de hoje ou a próxima confirmada. */
export function getRelevantStop(state: TodayState): Stop {
  return state.kind === "after" || state.kind === "unconfirmed" ? state.next : state.stop
}
