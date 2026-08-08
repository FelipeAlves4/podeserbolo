"use client"

import { useEffect, useState } from "react"
import { getCurrentScheduleState, type TodayState } from "@/lib/today"

/** Atualiza a rota a cada minuto sem congelar a data no build. */
export function useToday() {
  const [state, setState] = useState<TodayState | null>(null)

  useEffect(() => {
    const update = () => setState(getCurrentScheduleState())
    update()
    const interval = window.setInterval(update, 60_000)
    return () => window.clearInterval(interval)
  }, [])

  return state
}
