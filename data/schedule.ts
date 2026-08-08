/** Pontos confirmados da rota semanal. Altere somente este arquivo para atualizá-los no site. */
export type WeekdayKey =
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"

export type Stop = {
  day: WeekdayKey
  /** Índice JS: 0 = domingo ... 6 = sábado. */
  weekday: number
  label: string
  shortLabel: string
  location: string
  address: string
  /** Complemento opcional exibido abaixo do endereço. */
  addressExtra?: string
  city: string
  /** Horário no formato 24h, usado pela lógica. */
  openingTime: string
  closingTime: string
  /** Horário pronto para a interface. */
  hours: string
}

export const CITY = "Marília - SP"

export const SCHEDULE: Stop[] = [
  {
    day: "monday",
    weekday: 1,
    label: "Segunda-feira",
    shortLabel: "Seg",
    location: "Drogaria São Paulo",
    address: "Av. Castro Alves, 1740",
    city: CITY,
    openingTime: "17:30",
    closingTime: "22:00",
    hours: "17h30 às 22h",
  },
  {
    day: "tuesday",
    weekday: 2,
    label: "Terça-feira",
    shortLabel: "Ter",
    location: "Supermercado Preço Certo",
    address: "R. Amador Bueno, 1546",
    addressExtra: "Jardim Califórnia",
    city: CITY,
    openingTime: "17:00",
    closingTime: "21:00",
    hours: "17h às 21h",
  },
  {
    day: "thursday",
    weekday: 4,
    label: "Quinta-feira",
    shortLabel: "Qui",
    location: "Feira Noturna",
    address: "Av. das Indústrias",
    addressExtra: "Em frente ao Poupatempo",
    city: CITY,
    openingTime: "18:00",
    closingTime: "22:00",
    hours: "18h às 22h",
  },
  {
    day: "friday",
    weekday: 5,
    label: "Sexta-feira",
    shortLabel: "Sex",
    location: "Shopping Esmeralda",
    address: "Av. das Esmeraldas, 701",
    city: CITY,
    openingTime: "17:00",
    closingTime: "22:00",
    hours: "17h às 22h",
  },
]
