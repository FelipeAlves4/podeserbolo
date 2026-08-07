"use client"

import { useEffect, useState } from "react"
import { getWeekdayIndex, resolveToday, type TodayState } from "@/lib/today"

/**
 * Resolve o dia atual no cliente para refletir sempre o momento da visita,
 * evitando divergência entre HTML pré-renderizado e navegador.
 */
export function useToday() {
  const [state, setState] = useState<TodayState | null>(null)

  useEffect(() => {
    setState(resolveToday(getWeekdayIndex()))
  }, [])

  return state
}

export function useWeekday() {
  const [weekday, setWeekday] = useState<number | null>(null)

  useEffect(() => {
    setWeekday(getWeekdayIndex())
  }, [])

  return weekday
}
