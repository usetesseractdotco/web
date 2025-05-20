import { IPFSBuiltInSVG } from '@/components/svgs/ipfs-built-in-svg'

export function IPFSBuiltIn() {
  return (
    <div className="flex flex-col w-full h-[18em] items-start justify-between border sm:border-r-0 p-4">
      <IPFSBuiltInSVG />

      <div className="flex flex-col gap-2 items-start justify-start pt-3">
        <h3 className="text-base font-medium">IPFS built-in</h3>
        <p className="text-sm text-muted-foreground max-w-lg leading-[1.5] tracking-[-0.2]">
          Decentralized storage, out of the box.
        </p>
      </div>
    </div>
  )
}
