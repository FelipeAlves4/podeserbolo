/**
 * Camada de acesso ao conteúdo do site.
 *
 * Hoje tudo vem dos arquivos estáticos em `data/`.
 * Quando existir o painel /admin com backend, basta trocar a implementação
 * destas funções (ex.: buscar no banco) sem tocar em nenhum componente.
 */

import { PRODUCTS, SLICE_PRICE, type Product } from "@/data/products"
import { SCHEDULE, type Stop } from "@/data/schedule"

export type SiteContent = {
  schedule: Stop[]
  products: Product[]
  slicePrice: number
}

export async function getSiteContent(): Promise<SiteContent> {
  return {
    schedule: SCHEDULE,
    products: PRODUCTS,
    slicePrice: SLICE_PRICE,
  }
}

export async function getSchedule(): Promise<Stop[]> {
  return SCHEDULE
}

export async function getProducts(): Promise<Product[]> {
  return PRODUCTS
}
