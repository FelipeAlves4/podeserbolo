/**
 * Programação semanal — dados reais informados pela marca.
 * Não há atendimento informado para quarta, sábado e domingo.
 * Alterar apenas este arquivo para atualizar todo o site.
 */

export type WeekdayKey =
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"

export type Stop = {
  /** Chave do dia da semana */
  day: WeekdayKey
  /** Índice JS: 0 = domingo ... 6 = sábado */
  weekday: number
  label: string
  shortLabel: string
  location: string
  hours: string
  address: string
  /** Complemento opcional do endereço */
  addressExtra?: string
  city: string
}

export const CITY = "Marília - SP"

export const SCHEDULE: Stop[] = [
  {
    day: "monday",
    weekday: 1,
    label: "Segunda-feira",
    shortLabel: "Seg",
    location: "Drogaria São Paulo",
    hours: "17h30 às 22h",
    address: "Av. Castro Alves, 1740",
    city: CITY,
  },
  {
    day: "tuesday",
    weekday: 2,
    label: "Terça-feira",
    shortLabel: "Ter",
    location: "Supermercado Preço Certo",
    hours: "17h às 21h",
    address: "R. Amador Bueno, 1546",
    addressExtra: "Jardim Califórnia",
    city: CITY,
  },
  {
    day: "thursday",
    weekday: 4,
    label: "Quinta-feira",
    shortLabel: "Qui",
    location: "Feira Noturna",
    hours: "18h às 22h",
    address: "Av. das Indústrias",
    addressExtra: "Em frente ao Poupatempo",
    city: CITY,
  },
  {
    day: "friday",
    weekday: 5,
    label: "Sexta-feira",
    shortLabel: "Sex",
    location: "Shopping Esmeralda",
    hours: "17h às 22h",
    address: "Av. das Esmeraldas, 701",
    city: CITY,
  },
]
