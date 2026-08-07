import Image from "next/image"
import { cn } from "@/lib/utils"

/** Logo fornecida pela marca. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo-pode-ser-bolo.png"
      alt="Pode Ser Bolo?"
      width={150}
      height={150}
      className={cn("h-11 w-11 rounded-xl object-cover", className)}
    />
  )
}
