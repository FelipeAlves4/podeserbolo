import type { Stop } from "@/data/schedule"

/**
 * Monta a URL de rota do Google Maps a partir do endereço.
 * Não depende de API paga.
 */
export function directionsUrl(stop: Stop) {
  const destination = [stop.location, stop.address, stop.city].filter(Boolean).join(", ")
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`
}
