'use client'

import { MailIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { useMediaQuery } from 'usehooks-ts'

import { cn } from '@/lib/utils'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { icons } from './icons'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { TextScramble } from './ui/text-scramble'

export function Footer() {
  const isMediumScreen = useMediaQuery('(min-width: 768px)')
  const [isTrigger, setIsTrigger] = useState<boolean>(false)

  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <footer className="flex flex-col gap-12 border-t px-8 py-20 md:gap-36 md:px-40">
      <div className="flex flex-col gap-12 md:flex-row md:justify-between">
        <div className="flex flex-col gap-12">
          <icons.tesseract className="size-10 fill-black md:size-18 dark:fill-white" />

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
              <div className="relative flex max-w-sm flex-1 flex-row items-center justify-center gap-2">
                <MailIcon className="absolute left-3 size-4 text-muted-foreground" />

                <Input
                  className={cn(
                    'h-10 w-full flex-1 pl-10 text-muted-foreground placeholder:text-muted-foreground'
                  )}
                  placeholder="Enter your email"
                />
              </div>
            )}
            <Button
              onMouseEnter={() => setIsTrigger(true)}
              onMouseLeave={() => setIsTrigger(false)}
              className="px-6 py-5"
            >
              <TextScramble
                as="span"
                speed={0.03}
                trigger={isTrigger}
                className="text-lg"
                onScrambleComplete={() => setIsTrigger(false)}
              >
                Join Waitlist
              </TextScramble>
            </Button>
          </motion.div>
        </div>

        <div className="flex flex-col gap-12 md:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Link
                className="font-medium text-lg text-muted-foreground"
                href="/"
              >
                Home
              </Link>
              <Link
                className="font-medium text-lg text-muted-foreground"
                href="/"
              >
                Features
              </Link>
              <Link
                className="font-medium text-lg text-muted-foreground"
                href="/"
              >
                Integrations
              </Link>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <icons.twitter className="size-6" />
            <icons.github className="size-6" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 md:flex-row md:justify-between">
        <ul className="order-1 flex flex-col items-center justify-center gap-2 md:order-2 md:flex-row">
          <li className="text-accent-foreground text-lg">Privacy Policy</li>
          <li className="text-accent-foreground text-lg">Terms of Service</li>
        </ul>

        <p className="text-muted-foreground text-sm">
          2025 Tesseract © All rights reserved
        </p>
      </div>
    </footer>
  )
}
