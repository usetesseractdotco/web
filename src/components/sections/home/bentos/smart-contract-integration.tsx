'use client'

import { motion } from 'motion/react'

import { icons } from '@/components/icons'
import { ClipPathButton } from '@/components/ui/clip-path-button'

export function SmartContractIntegration() {
  return (
    <div className="flex h-[18em] w-full flex-col items-start justify-between border-b border-l p-4 sm:border-t">
      <div
        className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-center bg-cover"
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
          className="flex flex-row items-center justify-center gap-2.5 overflow-hidden border bg-muted py-2 pr-3.5 pl-3 text-muted-foreground"
        >
          <icons.connection />
          <span>API</span>
        </motion.div>

        <motion.div
          aria-hidden
          className="h-5 w-px bg-border"
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
          <ClipPathButton initialDelay={0.6}>transferFunds()</ClipPathButton>
        </motion.div>

        <motion.div
          aria-hidden
          className="h-5 w-px bg-border"
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
          className="flex flex-row items-center justify-center gap-2.5 border bg-muted py-2 pr-3.5 pl-3 text-muted-foreground"
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
          <icons.file />
          <span>Response</span>
        </motion.div>
      </div>

      <div className="flex flex-col items-start justify-start gap-2 pt-3">
        <h3 className="font-medium text-base">Smart Contract Integration</h3>
        <p className="max-w-lg text-muted-foreground text-sm leading-[1.5] tracking-[-0.2]">
          Easy smart contract calls.
        </p>
      </div>
    </div>
  )
}
