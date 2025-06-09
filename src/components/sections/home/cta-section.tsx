'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TextScramble } from '@/components/ui/text-scramble'
import { MailIcon } from 'lucide-react'
import { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

export function CtaSection() {
  const isMediumScreen = useMediaQuery('(min-width: 768px)')
  const [isTrigger, setIsTrigger] = useState(false)

  return (
    <section className="flex w-full flex-col items-center justify-center gap-16 py-40 lg:px-20">
      <div
        className="flex w-full flex-col gap-24 bg-primary px-8 pt-16 pb-11 sm:px-16 lg:max-w-[1120px]"
        style={{
          backgroundImage: 'url(/cta-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: isMediumScreen ? 'right' : '70%',
        }}
      >
        <div className="flex max-w-[560px] flex-col gap-16">
          <div className="flex flex-col gap-8">
            <h3 className="max-w-xs break-keep font-medium text-4xl text-white sm:max-w-sm sm:text-6xl">
              Less friction, <br className="block sm:hidden" />
              more innovation.
            </h3>
            <p className="text-lg text-white max-sm:max-w-[14rem]">
              Build your next blockchain app with ease.
            </p>
          </div>

          <div className="flex h-12 w-full flex-row gap-3">
            <div className="relative hidden h-full max-w-sm flex-1 flex-row items-center justify-center gap-2 lg:flex">
              <MailIcon className="absolute left-3 size-4 text-black" />

              <Input
                className="!bg-white h-full w-full flex-1 pl-10 text-black outline-none placeholder:text-black"
                placeholder="Enter your email"
              />
            </div>

            <Button
              className="h-full bg-white px-5 py-4 text-black hover:bg-white"
              onMouseEnter={() => setIsTrigger(true)}
              onMouseLeave={() => setIsTrigger(false)}
            >
              <TextScramble
                as="span"
                speed={0.03}
                trigger={isTrigger}
                className="text-sm"
                onScrambleComplete={() => setIsTrigger(false)}
              >
                Join Waitlist
              </TextScramble>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
