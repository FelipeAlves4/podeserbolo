/** Contatos e redes da marca em um único ponto de alteração. */
export const BRAND_NAME = "Pode Ser Bolo?"

export const INSTAGRAM_HANDLE = "@podeserbolo"
export const INSTAGRAM_URL = "https://instagram.com/podeserbolo"

/**
 * Preencha com o número publicado oficialmente pela marca, em formato
 * internacional e só com dígitos. Como ele não acompanhou o briefing, os
 * CTAs de WhatsApp não são exibidos nesta demonstração.
 */
export const WHATSAPP_NUMBER: string | null = null

export const WHATSAPP_MESSAGES = {
  flavorsToday:
    "Olá! Vim pelo site da Pode Ser Bolo? e gostaria de saber quais sabores estão disponíveis hoje.",
  general: "Olá! Vim pelo site da Pode Ser Bolo? e queria falar com vocês.",
  location: "Olá! Vim pelo site da Pode Ser Bolo? e queria confirmar onde vocês estão hoje.",
} as const

export function whatsappLink(message: string = WHATSAPP_MESSAGES.general) {
  return WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` : null
}

/** Galeria proprietária feita apenas com as fotos fornecidas. */
export const FEED_IMAGES = [
  { src: "/images/matilda.png", alt: "Camadas da fatia Matilda" },
  { src: "/images/mousse-chocolate-nobre.png", alt: "Camadas da fatia Mousse de Chocolate Nobre" },
  { src: "/images/brigadeiro-de-panela.png", alt: "Camadas da fatia Brigadeiro de Panela" },
  { src: "/images/sonho-de-valsa.png", alt: "Fatia Sonho de Valsa com bombom no topo" },
]
