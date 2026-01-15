import cn from '../../../../utils/tailwindMerge'
import { FreeTier, FullTier, OnlineTier } from './PricingTiers'

export function Pricing3cols({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'grid grid-flow-col grid-rows-[auto_auto] justify-center gap-x-24 gap-y-10',
        className
      )}
    >
      <FreeTier />
      <OnlineTier />
      <FullTier />
    </div>
  )
}

export function Pricing2cols({ className }: { className?: string }) {
  return (
    <div className={cn('space-y-15', className)}>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-[auto_auto] justify-center gap-x-24 gap-y-10">
        <FreeTier />
        <OnlineTier />
      </div>
      <div className="space-y-10">
        <FullTier />
      </div>
    </div>
  )
}

export function Pricing1col({ className }: { className?: string }) {
  return (
    <div className={cn('space-y-10', className)}>
      <div className="space-y-5">
        <FreeTier />
      </div>
      <div className="space-y-5">
        <OnlineTier />
      </div>
      <div className="space-y-5">
        <FullTier />
      </div>
    </div>
  )
}
