'use client'

import { motion } from 'motion/react'

import { BlockAndEventMonitoring } from './bentos/block-and-event-monitoring'
import { DefiPriceFeeds } from './bentos/defi-price-feeds'
import { IpfsBuiltIn } from './bentos/ipfs-built-in'
import { SmartContractIntegration } from './bentos/smart-contract-integration'

export function FeaturesBentoBox() {
  return (
    <section className="z-10 flex flex-col items-center justify-center gap-16 pt-32">
      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [20, 0],
        }}
        transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1], delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-6 text-center"
      >
        <h1 className="max-w-xs font-medium text-4xl leading-[1.1] tracking-[-0.4] md:max-w-3xl md:text-5xl">
          Powerful features, ready to build with
        </h1>
        <p className="max-w-xs text-base text-muted-foreground md:max-w-lg md:text-lg">
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
        className="-z-10 relative flex max-w-md flex-col items-center justify-center sm:min-w-3xl sm:max-w-3xl lg:max-w-4xl"
      >
        <div className="absolute left-0 h-full w-[50vw] translate-x-[-100%] rotate-180 overflow-hidden border-t border-r border-b bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px] bg-transparent dark:bg-[linear-gradient(-45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)]" />
        <div className="absolute right-0 h-full w-[50vw] translate-x-[100%] overflow-hidden border-t border-b border-l bg-[linear-gradient(45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px] bg-transparent dark:bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)]" />

        <div className="flex w-full flex-col sm:flex-row">
          <IpfsBuiltIn />
          <SmartContractIntegration />
        </div>

        <div className="flex w-full flex-col sm:flex-row">
          <DefiPriceFeeds />
          <BlockAndEventMonitoring />
        </div>
      </motion.div>
    </section>
  )
}
