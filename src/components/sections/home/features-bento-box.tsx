'use client'

import { motion } from 'motion/react'

import { BlockAndEventMonitoring } from './bentos/block-and-event-monitoring'
import { DefiPriceFeeds } from './bentos/defi-price-feeds'
import { IPFSBuiltIn } from './bentos/ipfs-built-in'
import { SmartContractIntegration } from './bentos/smart-contract-integration'

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
          <IPFSBuiltIn />
          <SmartContractIntegration />
        </div>

        <div className="flex flex-col sm:flex-row w-full">
          <DefiPriceFeeds />
          <BlockAndEventMonitoring />
        </div>
      </motion.div>
    </section>
  )
}
