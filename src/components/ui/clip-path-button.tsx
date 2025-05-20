'use client'

import { motion } from 'motion/react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

type ClipPathButtonProps = {
  initialDelay?: number
} & React.ComponentProps<'div'>

export function ClipPathButton({
  children,
  initialDelay = 0,
  ...props
}: ClipPathButtonProps) {
  const [isAnimationEnded, setIsAnimationEnded] = useState<boolean>(false)

  return (
    <div
      {...props}
      className={cn(
        'group z-[999] font-mono relative h-12 flex items-center justify-center gap-2 px-3.5 select-none',
        'border bg-muted text-muted-foreground',
        {
          'border-accent': isAnimationEnded,
        },
      )}
    >
      <motion.div
        onAnimationComplete={() => setIsAnimationEnded(true)}
        aria-hidden="true"
        className={cn(
          'absolute bg-primary inset-0 flex items-center justify-center gap-2 text-primary-foreground',
        )}
        initial={{
          clipPath: 'inset(0px 100% 0px 0px)',
        }}
        whileInView={{
          clipPath: 'inset(0px 0px 0px 0px)',
        }}
        transition={{
          duration: 1.5,
          ease: [0.55, 0.055, 0.675, 0.19],
          delay: initialDelay,
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
      {children}
    </div>
  )
}
