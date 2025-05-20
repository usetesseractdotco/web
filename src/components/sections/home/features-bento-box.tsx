'use client'

import { motion } from 'motion/react'

import { Icons } from '@/components/icons'
import { DefiPriceFeedsSVG } from '@/components/svgs/defi-price-feeds-svg'
import { IPFSBuiltInSVG } from '@/components/svgs/ipfs-built-in-svg'
import { ClipPathButton } from '@/components/ui/clip-path-button'

import { BlockAndEventMonitoring } from './bentos/block-and-event-monitoring'

export function FeaturesBentoBox() {
  return (
    <section className="flex flex-col gap-16 items-center justify-center pt-32">
      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [20, 0],
        }}
        transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1], delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col gap-6 items-center justify-center text-center"
      >
        <h1 className="font-medium text-4xl leading-[1.1] tracking-[-0.4] max-w-xs md:text-5xl md:max-w-3xl">
          Powerful features, ready to build with
        </h1>
        <p className="text-base text-muted-foreground max-w-xs md:max-w-lg md:text-lg">
          Everything you need to launch, scale, and manage modern blockchain
          apps — without the complexity.
        </p>
      </motion.div>

      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [20, 0],
        }}
        transition={{
          duration: 0.6,
          ease: [0.165, 0.84, 0.44, 1],
          delay: 0.4,
        }}
        viewport={{ once: true }}
        className="relative flex flex-col max-w-md sm:max-w-3xl sm:min-w-3xl lg:max-w-4xl -z-10 items-center justify-center"
      >
        <div className="absolute h-full left-0 w-[50vw] translate-x-[-100%] rotate-180 overflow-hidden border-t border-b border-r bg-transparent bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] dark:bg-[linear-gradient(-45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)] bg-[size:15px_15px]" />
        <div className="absolute h-full right-0 w-[50vw] translate-x-[100%] overflow-hidden border-t border-b border-l bg-transparent bg-[linear-gradient(45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] dark:bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)] bg-[size:15px_15px]" />

        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -left-[2.5em] sm:left-[-4.2em] lg:left-[-6.2em] -top-[2.5em] sm:top-[-4.2em] lg:top-[-6.2em] border-r bg-transparent" />
        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -right-[2.5em] sm:right-[-4.2em] lg:right-[-6.2em] -top-[2.5em] sm:top-[-4.2em] lg:top-[-6.2em] border-l bg-transparent" />
        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -left-[2.5em] sm:left-[-4.2em] lg:left-[-6.2em] -bottom-[2.5em] sm:bottom-[-4.2em] lg:bottom-[-6.2em] border-r bg-transparent" />
        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -right-[2.5em] sm:right-[-4.2em] lg:right-[-6.2em] -bottom-[2.5em] sm:bottom-[-4.2em] lg:bottom-[-6.2em] border-l bg-transparent" />

        <div className="flex flex-col sm:flex-row w-full">
          <div className="flex flex-col w-full h-[18em] items-start justify-between border sm:border-r-0 p-4">
            <IPFSBuiltInSVG />

            <div className="flex flex-col gap-2 items-start justify-start pt-3">
              <h3 className="text-base font-medium">IPFS built-in</h3>
              <p className="text-sm text-muted-foreground max-w-lg leading-[1.5] tracking-[-0.2]">
                Decentralized storage, out of the box.
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full h-[18em] items-start justify-between border-b border-l border-r sm:border-t p-4">
            <div
              className="relative w-full h-full bg-cover bg-center flex flex-col items-center justify-center overflow-hidden"
              style={{
                backgroundImage: 'url(/smart-contract-bg.png)',
              }}
            >
              <motion.div
                initial={{ filter: 'blur(4px)', opacity: 0, y: -20 }}
                whileInView={{
                  filter: 'blur(0px)',
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: 'easeOut',
                }}
                viewport={{
                  once: true,
                }}
                className="flex flex-row gap-2.5 pl-3 pr-3.5 items-center justify-center bg-muted text-muted-foreground py-2 border overflow-hidden"
              >
                <Icons.connection />
                <span>API</span>
              </motion.div>

              <motion.div
                aria-hidden
                className="w-px h-5 bg-border"
                initial={{ height: 0 }}
                animate={{ height: 20 }}
                transition={{ duration: 0.2, ease: 'easeOut', delay: 0.05 }}
                viewport={{ once: true }}
              />

              <motion.div
                whileInView={{
                  filter: ['blur(4px)', 'blur(0px)'],
                  opacity: [0, 1],
                  y: [-20, 0],
                  scale: [0.9, 1],
                }}
                transition={{
                  delay: 0.12,
                  duration: 0.15,
                  ease: 'easeOut',
                  scale: {
                    delay: 0.3,
                    duration: 0.2,
                    ease: 'easeOut',
                  },
                  color: {
                    delay: 0.3,
                    duration: 0.2,
                    ease: 'easeOut',
                  },
                }}
                viewport={{
                  once: true,
                }}
              >
                <ClipPathButton initialDelay={0.6}>
                  transferFunds()
                </ClipPathButton>
              </motion.div>

              <motion.div
                aria-hidden
                className="w-px h-5 bg-border"
                initial={{ height: 0 }}
                whileInView={{ height: 20 }}
                transition={{
                  duration: 0.2,
                  ease: 'easeOut',
                  delay: 1.8,
                }}
                viewport={{ once: true }}
              />

              <motion.div
                className="flex flex-row gap-2.5 pl-3 pr-3.5 items-center justify-center bg-muted text-muted-foreground py-2 border"
                initial={{ filter: 'blur(4px)', opacity: 0 }}
                whileInView={{
                  filter: 'blur(0px)',
                  opacity: 1,
                }}
                transition={{
                  duration: 0.2,
                  ease: 'easeOut',
                  delay: 2.2,
                }}
                viewport={{
                  once: true,
                }}
              >
                <Icons.file />
                <span>Response</span>
              </motion.div>
            </div>

            <div className="flex flex-col gap-2 items-start justify-start pt-3">
              <h3 className="text-base font-medium">
                Smart Contract Integration
              </h3>
              <p className="text-sm text-muted-foreground max-w-lg leading-[1.5] tracking-[-0.2]">
                Easy smart contract calls.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full">
          <div className="flex flex-col w-full sm:w-2/3 h-[13.75em] border-b border-l sm:border-r-0 border-r p-4">
            <DefiPriceFeedsSVG />

            <div className="flex flex-col gap-2 items-start justify-start">
              <h3 className="text-base font-medium">DeFi price feeds</h3>
              <p className="text-sm text-muted-foreground max-w-lg leading-[1.5] tracking-[-0.2]">
                Access real-time market data.
              </p>
            </div>
          </div>

          <BlockAndEventMonitoring />
        </div>
      </motion.div>
    </section>
  )
}
