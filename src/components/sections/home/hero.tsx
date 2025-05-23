import { MailIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TextScramble } from '@/components/ui/text-scramble'
import { cn } from '@/lib/utils'

export function Hero() {
  const isMediumScreen = useMediaQuery('(min-width: 640px)')

  const [isTrigger, setIsTrigger] = useState(false)

  return (
    <section className="flex flex-col gap-6 items-center justify-center">
      <div className="flex flex-col gap-7 items-center justify-center w-full">
        <div className="flex flex-col gap-6 items-center justify-center text-center">
          <motion.h1
            whileInView={{
              opacity: [0, 1],
              y: [20, 0],
              filter: ['blur(10px)', 'blur(0px)'],
            }}
            transition={{ duration: 0.44, ease: [0.165, 0.84, 0.44, 1] }}
            viewport={{ once: true }}
            className="font-medium text-4xl sm:text-7xl leading-[1.1] tracking-[-0.4] max-w-xs sm:max-w-3xl"
          >
            Simplified Backend for Blockchain Apps
          </motion.h1>
          <motion.p
            whileInView={{
              opacity: [0, 1],
              y: [20, 0],
              filter: ['blur(10px)', 'blur(0px)'],
            }}
            transition={{
              duration: 0.44,
              ease: [0.165, 0.84, 0.44, 1],
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="text-base text-muted-foreground max-w-xs sm:max-w-md"
          >
            Tesseract is an open-source, self-hostable platform that removes the
            complexity of blockchain infrastructure.
          </motion.p>
        </div>

        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [20, 0],
            filter: ['blur(10px)', 'blur(0px)'],
          }}
          transition={{
            duration: 0.44,
            ease: [0.165, 0.84, 0.44, 1],
            delay: 0.2,
          }}
          className={cn('flex gap-2', {
            'flex-col': !isMediumScreen,
            'min-w-lg': isMediumScreen,
          })}
          viewport={{ once: true }}
        >
          {isMediumScreen && (
            <div className="flex-1 items-center justify-center flex-row flex gap-2">
              <MailIcon className="size-4 text-muted-foreground absolute left-3" />

              <Input
                className={cn(
                  'flex-1 w-full h-10 placeholder:text-muted-foreground text-muted-foreground pl-10',
                  {
                    'h-10': !isMediumScreen,
                  },
                )}
                placeholder="Enter your email"
              />
            </div>
          )}
          <Button
            size={'default'}
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
        </motion.div>
      </div>

      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [20, 0],
          filter: ['blur(10px)', 'blur(0px)'],
        }}
        transition={{
          duration: 0.44,
          ease: [0.165, 0.84, 0.44, 1],
          delay: 0.3,
        }}
        viewport={{ once: true }}
        className="relative max-w-[280px] sm:max-w-xl mx-auto w-full h-[13em] sm:h-[24em] lg:h-[26.25em] lg:max-w-4xl border mt-10 -z-10"
      >
        <div className="absolute h-full w-[1.5em] -left-[1.5em] rotate-180 overflow-hidden border-r bg-transparent bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] dark:bg-[linear-gradient(-45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)] bg-[size:15px_15px]" />
        <div className="absolute h-full w-[1.5em] -right-[1.5em] overflow-hidden border-r bg-transparent bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] dark:bg-[linear-gradient(-45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)] bg-[size:15px_15px]" />
        <div className="absolute h-[17.4em] sm:h-[35.8em] lg:h-[48em] w-[1.25em] left-[8.1em] sm:left-[17.3em] lg:left-[23.3em] bottom-[4.9em] sm:bottom-[6.6em] lg:bottom-[2.8em]  rotate-90 overflow-hidden border-l bg-transparent bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] dark:bg-[linear-gradient(-45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)] bg-[size:15px_15px]" />
        <div className="absolute h-[17.4em] sm:h-[35.8em] lg:h-[48em] w-[1.25em] left-[8.1em] sm:left-[17.3em] lg:left-[23.3em] top-[4.9em] sm:top-[6.6em] lg:top-[2.8em] rotate-90 overflow-hidden border-r bg-transparent bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] dark:bg-[linear-gradient(-45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)] bg-[size:15px_15px]" />

        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -left-[2.5em] sm:left-[-4.2em] lg:left-[-6.2em] -top-[2.5em] sm:top-[-4.2em] lg:top-[-6.2em] border-b border-r bg-transparent" />
        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -right-[2.5em] sm:right-[-4.2em] lg:right-[-6.2em] -top-[2.5em] sm:top-[-4.2em] lg:top-[-6.2em] border-b border-l bg-transparent" />
        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -left-[2.5em] sm:left-[-4.2em] lg:left-[-6.2em] -bottom-[2.5em] sm:bottom-[-4.2em] lg:bottom-[-6.2em] border-t border-r bg-transparent" />
        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -right-[2.5em] sm:right-[-4.2em] lg:right-[-6.2em] -bottom-[2.5em] sm:bottom-[-4.2em] lg:bottom-[-6.2em] border-t border-l bg-transparent" />
      </motion.div>
    </section>
  )
}
