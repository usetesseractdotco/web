import { DefiPriceFeedsSvg } from '@/components/svgs/defi-price-feeds-svg'

export function DefiPriceFeeds() {
  return (
    <div className="flex h-[18em] w-full flex-col items-start justify-between border-b border-l p-4 sm:w-2/3">
      <DefiPriceFeedsSvg />

      <div className="flex flex-col items-start justify-start gap-2">
        <h3 className="font-medium text-base">DeFi price feeds</h3>
        <p className="max-w-lg text-muted-foreground text-sm leading-[1.5] tracking-[-0.2]">
          Access real-time market data.
        </p>
      </div>
    </div>
  )
}
