export type Flavor = {
  id: string
  name: string
  /** Uma imagem só é associada quando há correspondência confirmada no acervo. */
  image?: string
  featured?: boolean
}

export const SLICE_PRICE = 25

/** Catálogo de sabores já preparados pela Pode Ser Bolo?. Não representa o cardápio do dia. */
export const FLAVORS: Flavor[] = [
  { id: "supremo-de-uva", name: "Supremo de Uva" },
  { id: "bombom-de-morango", name: "Bombom de Morango" },
  { id: "ninho-com-avela", name: "Ninho com Avelã" },
  { id: "kinder-bueno", name: "Kinder Bueno" },
  { id: "matilda", name: "Matilda", image: "/images/matilda.png", featured: true },
  { id: "brigadeiro-de-panela", name: "Brigadeiro de Panela", image: "/images/brigadeiro-de-panela.png", featured: true },
  { id: "floresta-negra", name: "Floresta Negra" },
  { id: "ouro-branco", name: "Ouro Branco" },
  { id: "prestigio", name: "Prestígio" },
  { id: "laka-oreo", name: "Laka Oreo" },
  { id: "mousse-de-chocolate-nobre", name: "Mousse de Chocolate Nobre", image: "/images/mousse-chocolate-nobre.png", featured: true },
  { id: "maracuja-com-brigadeiro", name: "Maracujá com Brigadeiro" },
  { id: "red-velvet", name: "Red Velvet" },
  { id: "morango-ninho-e-suspiro", name: "Morango, Ninho e Suspiro" },
  { id: "olho-de-sogra", name: "Olho de Sogra" },
  { id: "doce-de-leite-nozes-e-abacaxi", name: "Doce de Leite, Nozes e Abacaxi" },
  { id: "abacaxi-com-ninho", name: "Abacaxi com Ninho" },
  { id: "ninho-com-geleia-de-frutas-vermelhas", name: "Ninho com Geleia de Frutas Vermelhas" },
  { id: "cocada-cremosa-com-abacaxi", name: "Cocada Cremosa com Abacaxi" },
  { id: "pudim-com-doce-de-leite", name: "Pudim com Doce de Leite" },
  { id: "torta-trento-de-limao", name: "Torta Trento de Limão" },
]

export const FEATURED_FLAVORS = FLAVORS.filter((flavor) => flavor.featured)
