import type { UsagePaceStage } from '../../../../shared/usage-pace'

// Why: the tick stands 2px proud of the track instead of being punched into
// it, so it stays legible over both the fill and the empty remainder without
// having to match whatever surface color sits behind the bar.
const MARKER_OVERHANG = '-inset-y-[2px]'

/**
 * Vertical tick marking where an even burn would have put the fill by now.
 * Render as a sibling of the track inside a `relative` wrapper — the track
 * clips its own overflow, so a taller tick has to live outside it. The provider
 * detail panel carries the same reading as text.
 */
export function UsagePaceMarker({
  percent,
  stage,
  thin = false
}: {
  percent: number
  stage: UsagePaceStage
  thin?: boolean
}): React.JSX.Element {
  const tone = stage === 'deficit' ? 'bg-destructive' : 'bg-status-success'
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute ${thin ? 'w-px' : 'w-[2px]'} -translate-x-1/2 rounded-full ${MARKER_OVERHANG} ${tone}`}
      style={{ left: `${Math.min(100, Math.max(0, percent))}%` }}
    />
  )
}
