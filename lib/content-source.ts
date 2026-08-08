/**
 * Camada de acesso ao conteúdo do site.
 * Quando existir um painel administrativo, a origem pode ser trocada sem
 * alterar os componentes que consomem estes dados.
 */

import { FLAVORS, SLICE_PRICE, type Flavor } from "@/data/flavors"
import { SCHEDULE, type Stop } from "@/data/schedule"

export type SiteContent = {
  schedule: Stop[]
  flavors: Flavor[]
  slicePrice: number
}

export async function getSiteContent(): Promise<SiteContent> {
  return { schedule: SCHEDULE, flavors: FLAVORS, slicePrice: SLICE_PRICE }
}

export async function getSchedule(): Promise<Stop[]> {
  return SCHEDULE
}

export async function getFlavors(): Promise<Flavor[]> {
  return FLAVORS
}
