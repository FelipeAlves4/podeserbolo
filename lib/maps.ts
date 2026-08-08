import type { Stop } from "@/data/schedule"

/** URL segura e sem API para abrir a rota até uma parada confirmada. */
export function getMapsUrl(stop: Stop) {
  const destination = [stop.location, stop.address, stop.addressExtra, stop.city].filter(Boolean).join(", ")
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`
}

/** @deprecated Use getMapsUrl. */
export const directionsUrl = getMapsUrl
