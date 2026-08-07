/**
 * Dados centralizados dos produtos mostrados nesta demonstração.
 *
 * Os nomes e as fotos foram identificados nas imagens fornecidas. Nenhum
 * status é preenchido: a disponibilidade precisa ser atualizada pela marca
 * quando houver um painel administrativo.
 */
export type ProductStatus = "available" | "low_stock" | "sold_out"

export type Product = {
  id: string
  name: string
  category: "bolo" | "torta"
  description?: string
  image: string
  price: number
  status?: ProductStatus
}

/** Preço único por fatia informado pela marca. */
export const SLICE_PRICE = 25

export const STATUS_LABEL: Record<ProductStatus, string> = {
  available: "Disponível",
  low_stock: "Últimas fatias",
  sold_out: "Esgotado",
}

/** Estrutura pronta para edição futura em /admin. */
export const PRODUCTS: Product[] = [
  {
    id: "matilda",
    name: "Matilda",
    category: "bolo",
    image: "/images/matilda.png",
    price: SLICE_PRICE,
  },
  {
    id: "mousse-chocolate-nobre",
    name: "Mousse de Chocolate Nobre",
    category: "bolo",
    image: "/images/mousse-chocolate-nobre.png",
    price: SLICE_PRICE,
  },
  {
    id: "brigadeiro-de-panela",
    name: "Brigadeiro de Panela",
    category: "bolo",
    image: "/images/brigadeiro-de-panela.png",
    price: SLICE_PRICE,
  },
  {
    id: "sonho-de-valsa",
    name: "Sonho de Valsa",
    category: "bolo",
    image: "/images/sonho-de-valsa.png",
    price: SLICE_PRICE,
  },
]

export const CAKES = PRODUCTS.filter((product) => product.category === "bolo")
export const PIES = PRODUCTS.filter((product) => product.category === "torta")
