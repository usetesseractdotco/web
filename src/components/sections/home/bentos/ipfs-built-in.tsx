import { IpfsBuiltInSvg } from '@/components/svgs/ipfs-built-in-svg'

export function IpfsBuiltIn() {
  return (
    <div className="flex h-[18em] w-full flex-col items-start justify-between border p-4 sm:border-r-0">
      <IpfsBuiltInSvg />

      <div className="flex flex-col items-start justify-start gap-2 pt-3">
        <h3 className="font-medium text-base">IPFS built-in</h3>
        <p className="max-w-lg text-muted-foreground text-sm leading-[1.5] tracking-[-0.2]">
          Decentralized storage, out of the box.
        </p>
      </div>
    </div>
  )
}
