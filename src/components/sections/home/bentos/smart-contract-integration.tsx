'use client'

import { motion } from 'motion/react'

import { Icons } from '@/components/icons'
import { ClipPathButton } from '@/components/ui/clip-path-button'

export function SmartContractIntegration() {
  return (
    <div className="flex flex-col w-full h-[18em] items-start justify-between border-b border-l sm:border-t p-4">
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
          <ClipPathButton initialDelay={0.6}>transferFunds()</ClipPathButton>
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
        <h3 className="text-base font-medium">Smart Contract Integration</h3>
        <p className="text-sm text-muted-foreground max-w-lg leading-[1.5] tracking-[-0.2]">
          Easy smart contract calls.
        </p>
      </div>
    </div>
  )
}
