'use client'

import { motion } from 'motion/react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

export function FeaturesWithPreview() {
  const [activeSection, setActiveSection] = useState<
    'multi-chain-support' | 'flexible-auth' | 'api-management' | 'tx-simulation'
  >('multi-chain-support')

  return (
    <section className="flex flex-col lg:flex-row pt-32 gap-10 px-8">
      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [20, 0],
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex flex-col w-full gap-8 md:text-start justify-center"
      >
        <div className="flex flex-col gap-6 items-center justify-center md:text-start md:items-start text-center">
          <h1 className="font-medium text-4xl tracking-[-0.2] max-w-xs md:text-5xl md:max-w-3xl">
            Everything you need, included
          </h1>
          <p className="text-base text-muted-foreground max-w-xs md:max-w-lg md:text-lg">
            No extra tools, no hidden costs — just the complete backend toolkit
            to build, scale, and ship Web3 apps.
          </p>
        </div>
        <div className="relative flex flex-col gap-7 items-center justify-center md:items-start md:justify-start">
          <div className="absolute w-px h-full flex items-center justify-center bg-muted left-0 sm:left-24 md:left-0 rounded-full">
            <div
              className="absolute w-1 h-16 bg-muted-foreground transition-all duration-300 ease-out rounded-full"
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

          <div className="flex flex-col gap-7 items-center justify-center md:ml-5">
            <div
              key={activeSection[0]}
              onClick={() => setActiveSection('multi-chain-support')}
              className="flex flex-col gap-1 cursor-pointer"
            >
              <h3 className="text-base font-medium leading-[1.5] tracking-[-0.3]">
                Multi-chain Support
              </h3>
              <p className="text-sm text-muted-foreground max-w-[18em] leading-[1.5] tracking-[-0.2]">
                Instantly connect to BTC, and SOL. More networks soon.
              </p>
            </div>

            <div
              key={activeSection[1]}
              className={cn('flex flex-col gap-1 cursor-pointer')}
              onClick={() => setActiveSection('flexible-auth')}
            >
              <h3 className="text-base font-medium leading-[1.5] tracking-[-0.3]">
                Flexible auth
              </h3>
              <p className="text-sm text-muted-foreground max-w-[18em] leading-[1.5] tracking-[-0.2]">
                Wallets, OAuth, OTP, magic links—your choice.
              </p>
            </div>

            <div
              key={activeSection[2]}
              className="flex flex-col gap-1 cursor-pointer w-full"
              onClick={() => setActiveSection('api-management')}
            >
              <h3 className="text-base font-medium leading-[1.5] tracking-[-0.3]">
                API Management
              </h3>
              <p className="text-sm text-muted-foreground max-w-[18em] leading-[1.5] tracking-[-0.2]">
                Manage and monitor your APIs easily.
              </p>
            </div>

            <div
              key={activeSection[3]}
              className="flex flex-col gap-1 cursor-pointer w-full"
              onClick={() => setActiveSection('tx-simulation')}
            >
              <h3 className="text-base font-medium leading-[1.5] tracking-[-0.3]">
                TX simulation
              </h3>
              <p className="text-sm text-muted-foreground max-w-[18em] leading-[1.5] tracking-[-0.2]">
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
        className="relative min-w-[280px] sm:min-w-lg mx-auto w-full h-[13em] sm:h-[24em] lg:h-[26.25em] lg:min-w-xl lg:translate-y-0 lg:translate-x-1/3 border mt-10 -z-10"
      >
        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -left-[2.5em] sm:left-[-4.2em] lg:left-[-6.24em] -top-[2.5em] sm:top-[-4.2em] lg:top-[-6.24em] border-b border-r bg-transparent" />
        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -right-[2.5em] sm:right-[-4.2em] lg:right-[-6.24em] -top-[2.5em] sm:top-[-4.2em] lg:top-[-6.24em] border-b border-l bg-transparent" />
        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -left-[2.5em] sm:left-[-4.2em] lg:left-[-6.24em] -bottom-[2.5em] sm:bottom-[-4.2em] lg:bottom-[-6.24em] border-t border-r bg-transparent" />
        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -right-[2.5em] sm:right-[-4.2em] lg:right-[-6.24em] -bottom-[2.5em] sm:bottom-[-4.2em] lg:bottom-[-6.24em] border-t border-l bg-transparent" />
      </motion.div>
    </section>
  )
}
