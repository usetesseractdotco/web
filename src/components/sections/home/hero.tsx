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
    <section className="z-10 flex flex-col items-center justify-center gap-6">
      <div className="flex w-full flex-col items-center justify-center gap-7">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <motion.h1
            whileInView={{
              opacity: [0, 1],
              y: [20, 0],
              filter: ['blur(10px)', 'blur(0px)'],
            }}
            transition={{ duration: 0.44, ease: [0.165, 0.84, 0.44, 1] }}
            viewport={{ once: true }}
            className="max-w-xs font-medium text-4xl leading-[1.1] tracking-[-0.4] sm:max-w-3xl sm:text-7xl"
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
            className="max-w-xs text-base text-muted-foreground sm:max-w-md"
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
            <div className="relative flex flex-1 flex-row items-center justify-center gap-2">
              <MailIcon className="absolute left-3 size-4 text-muted-foreground" />

              <Input
                className={cn(
                  'h-10 w-full flex-1 pl-10 text-muted-foreground placeholder:text-muted-foreground',
                  {
                    'h-10': !isMediumScreen,
                  }
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
        className="-z-10 relative mx-auto mt-10 h-[13em] w-full max-w-[280px] border sm:h-[24em] sm:max-w-xl lg:h-[26.25em] lg:max-w-4xl"
      >
        <div className="-left-[1.5em] absolute h-full w-[1.5em] rotate-180 overflow-hidden border-r bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px] bg-transparent dark:bg-[linear-gradient(-45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)]" />
        <div className="-right-[1.5em] absolute h-full w-[1.5em] overflow-hidden border-r bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px] bg-transparent dark:bg-[linear-gradient(-45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)]" />
        <div className="absolute bottom-[4.9em] left-[8.1em] h-[17.4em] w-[1.25em] rotate-90 overflow-hidden border-l bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px] bg-transparent sm:bottom-[6.6em] sm:left-[17.3em] sm:h-[35.8em] lg:bottom-[2.8em] lg:left-[23.3em] lg:h-[48em] dark:bg-[linear-gradient(-45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)]" />
        <div className="absolute top-[4.9em] left-[8.1em] h-[17.4em] w-[1.25em] rotate-90 overflow-hidden border-r bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px] bg-transparent sm:top-[6.6em] sm:left-[17.3em] sm:h-[35.8em] lg:top-[2.8em] lg:left-[23.3em] lg:h-[48em] dark:bg-[linear-gradient(-45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)]" />

        <div className="-left-[2.5em] -top-[2.5em] absolute size-[2.5em] border-r border-b bg-transparent sm:top-[-4.2em] sm:left-[-4.2em] sm:size-[4.25em] lg:top-[-6.2em] lg:left-[-6.2em] lg:size-[6.25em]" />
        <div className="-right-[2.5em] -top-[2.5em] absolute size-[2.5em] border-b border-l bg-transparent sm:top-[-4.2em] sm:right-[-4.2em] sm:size-[4.25em] lg:top-[-6.2em] lg:right-[-6.2em] lg:size-[6.25em]" />
        <div className="-left-[2.5em] -bottom-[2.5em] absolute size-[2.5em] border-t border-r bg-transparent sm:bottom-[-4.2em] sm:left-[-4.2em] sm:size-[4.25em] lg:bottom-[-6.2em] lg:left-[-6.2em] lg:size-[6.25em]" />
        <div className="-right-[2.5em] -bottom-[2.5em] absolute size-[2.5em] border-t border-l bg-transparent sm:right-[-4.2em] sm:bottom-[-4.2em] sm:size-[4.25em] lg:right-[-6.2em] lg:bottom-[-6.2em] lg:size-[6.25em]" />
      </motion.div>
    </section>
  )
}
