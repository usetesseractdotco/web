'use client'

import { motion } from 'motion/react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

export function FeaturesWithPreview() {
  const [activeSection, setActiveSection] = useState<
    'multi-chain-support' | 'flexible-auth' | 'api-management' | 'tx-simulation'
  >('multi-chain-support')

  return (
    <section className="z-10 flex flex-col gap-10 px-8 pt-32 lg:flex-row">
      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [20, 0],
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex w-full flex-col justify-center gap-8 md:text-start"
      >
        <div className="flex flex-col items-center justify-center gap-6 text-center md:items-start md:text-start">
          <h1 className="max-w-xs font-medium text-4xl tracking-[-0.2] md:max-w-3xl md:text-5xl">
            Everything you need, included
          </h1>
          <p className="max-w-xs text-base text-muted-foreground md:max-w-lg md:text-lg">
            No extra tools, no hidden costs — just the complete backend toolkit
            to build, scale, and ship Web3 apps.
          </p>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-7 md:items-start md:justify-start">
          <div className="absolute left-0 flex h-full w-px items-center justify-center rounded-full bg-muted sm:left-24 md:left-0">
            <div
              className="absolute h-16 w-1 rounded-full bg-muted-foreground transition-all duration-300 ease-out"
              style={{
                top:
                  activeSection === 'multi-chain-support'
                    ? '0%'
                    : activeSection === 'flexible-auth'
                      ? '30%'
                      : activeSection === 'api-management'
                        ? '60%'
                        : '80%',
              }}
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-7 md:ml-5">
            <div
              key={activeSection[0]}
              onKeyDown={() => setActiveSection('multi-chain-support')}
              onClick={() => setActiveSection('multi-chain-support')}
              className="flex cursor-pointer flex-col gap-1"
            >
              <h3 className="font-medium text-base leading-[1.5] tracking-[-0.3]">
                Multi-chain Support
              </h3>
              <p className="max-w-[18em] text-muted-foreground text-sm leading-[1.5] tracking-[-0.2]">
                Instantly connect to BTC, and SOL. More networks soon.
              </p>
            </div>

            <div
              key={activeSection[1]}
              onKeyDown={() => setActiveSection('flexible-auth')}
              className={cn('flex cursor-pointer flex-col gap-1')}
              onClick={() => setActiveSection('flexible-auth')}
            >
              <h3 className="font-medium text-base leading-[1.5] tracking-[-0.3]">
                Flexible auth
              </h3>
              <p className="max-w-[18em] text-muted-foreground text-sm leading-[1.5] tracking-[-0.2]">
                Wallets, OAuth, OTP, magic links—your choice.
              </p>
            </div>

            <div
              key={activeSection[2]}
              className="flex w-full cursor-pointer flex-col gap-1"
              onKeyDown={() => setActiveSection('api-management')}
              onClick={() => setActiveSection('api-management')}
            >
              <h3 className="font-medium text-base leading-[1.5] tracking-[-0.3]">
                API Management
              </h3>
              <p className="max-w-[18em] text-muted-foreground text-sm leading-[1.5] tracking-[-0.2]">
                Manage and monitor your APIs easily.
              </p>
            </div>

            <div
              key={activeSection[3]}
              className="flex w-full cursor-pointer flex-col gap-1"
              onKeyDown={() => setActiveSection('tx-simulation')}
              onClick={() => setActiveSection('tx-simulation')}
            >
              <h3 className="font-medium text-base leading-[1.5] tracking-[-0.3]">
                TX simulation
              </h3>
              <p className="max-w-[18em] text-muted-foreground text-sm leading-[1.5] tracking-[-0.2]">
                Preview transactions before sending.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [20, 0],
        }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
        className="-z-10 relative mx-auto mt-10 h-[13em] w-full min-w-[280px] border sm:h-[24em] sm:min-w-lg lg:h-[26.25em] lg:min-w-xl lg:translate-x-1/3 lg:translate-y-0"
      >
        <div className="-left-[2.5em] -top-[2.5em] absolute size-[2.5em] border-r border-b bg-transparent sm:top-[-4.2em] sm:left-[-4.2em] sm:size-[4.25em] lg:top-[-6.24em] lg:left-[-6.24em] lg:size-[6.25em]" />
        <div className="-right-[2.5em] -top-[2.5em] absolute size-[2.5em] border-b border-l bg-transparent sm:top-[-4.2em] sm:right-[-4.2em] sm:size-[4.25em] lg:top-[-6.24em] lg:right-[-6.24em] lg:size-[6.25em]" />
        <div className="-left-[2.5em] -bottom-[2.5em] absolute size-[2.5em] border-t border-r bg-transparent sm:bottom-[-4.2em] sm:left-[-4.2em] sm:size-[4.25em] lg:bottom-[-6.24em] lg:left-[-6.24em] lg:size-[6.25em]" />
        <div className="-right-[2.5em] -bottom-[2.5em] absolute size-[2.5em] border-t border-l bg-transparent sm:right-[-4.2em] sm:bottom-[-4.2em] sm:size-[4.25em] lg:right-[-6.24em] lg:bottom-[-6.24em] lg:size-[6.25em]" />
      </motion.div>
    </section>
  )
}
