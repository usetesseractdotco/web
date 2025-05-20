import { DefiPriceFeedsSVG } from '@/components/svgs/defi-price-feeds-svg'

export function DefiPriceFeeds() {
  return (
    <div className="flex flex-col w-full sm:w-2/3 h-[13.75em] border-b border-l sm:border-r-0 border-r p-4">
      <DefiPriceFeedsSVG />

      <div className="flex flex-col gap-2 items-start justify-start">
        <h3 className="text-base font-medium">DeFi price feeds</h3>
        <p className="text-sm text-muted-foreground max-w-lg leading-[1.5] tracking-[-0.2]">
          Access real-time market data.
        </p>
      </div>
    </div>
  )
}
