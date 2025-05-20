import { useMediaQuery } from 'usehooks-ts'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export function Hero() {
  const isSmallScreen = useMediaQuery('(min-width: 640px)')

  return (
    <section className="flex flex-col gap-6 items-center justify-center">
      <div className="flex flex-col gap-7 items-center justify-center w-full">
        <div className="flex flex-col gap-6 items-center justify-center text-center">
          <h1 className="font-medium text-4xl sm:text-7xl leading-[1.1] tracking-[-0.4] max-w-xs sm:max-w-3xl">
            Simplified Backend for Blockchain Apps
          </h1>
          <p className="text-base text-muted-foreground max-w-xs sm:max-w-md">
            Tesseract is an open-source, self-hostable platform that removes the
            complexity of blockchain infrastructure.
          </p>
        </div>

        <div
          className={cn('flex gap-2', {
            'flex-col': !isSmallScreen,
            'min-w-lg': isSmallScreen,
          })}
        >
          {isSmallScreen && (
            <Input className="flex-1 w-full" placeholder="Enter your email" />
          )}
          <Button size={isSmallScreen ? 'default' : 'sm'}>Join Waitlist</Button>
        </div>
      </div>

      <div className="relative max-w-[280px] sm:max-w-xl mx-auto w-full h-[13em] sm:h-[24em] lg:h-[26.25em] lg:max-w-4xl border mt-10 -z-10">
        <div className="absolute h-full w-[1.5em] -left-[1.5em] rotate-180 overflow-hidden border-r bg-transparent bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px]" />
        <div className="absolute h-full w-[1.5em] -right-[1.5em] overflow-hidden border-r bg-transparent bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px]" />
        <div className="absolute h-[17.4em] sm:h-[35.8em] lg:h-[49em] w-[1.25em] left-[8.1em] sm:left-[17.3em] lg:left-[23.8em] bottom-[4.9em] sm:bottom-[6.6em] lg:bottom-[2.3em]  rotate-90 overflow-hidden border-l bg-transparent bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px]" />
        <div className="absolute h-[17.4em] sm:h-[35.8em] lg:h-[49em] w-[1.25em] left-[8.1em] sm:left-[17.3em] lg:left-[23.8em] top-[4.9em] sm:top-[6.6em] lg:top-[2.3em] rotate-90 overflow-hidden border-r bg-transparent bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px]" />

        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -left-[2.5em] sm:left-[-4.2em] lg:left-[-6.2em] -top-[2.5em] sm:top-[-4.2em] lg:top-[-6.2em] border-b border-r bg-transparent" />
        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -right-[2.5em] sm:right-[-4.2em] lg:right-[-6.2em] -top-[2.5em] sm:top-[-4.2em] lg:top-[-6.2em] border-b border-l bg-transparent" />
        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -left-[2.5em] sm:left-[-4.2em] lg:left-[-6.2em] -bottom-[2.5em] sm:bottom-[-4.2em] lg:bottom-[-6.2em] border-t border-r bg-transparent" />
        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -right-[2.5em] sm:right-[-4.2em] lg:right-[-6.2em] -bottom-[2.5em] sm:bottom-[-4.2em] lg:bottom-[-6.2em] border-t border-l bg-transparent" />
      </div>
    </section>
  )
}
