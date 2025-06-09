'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import { icons } from './icons'
import { Button } from './ui/button'
import { TextScramble } from './ui/text-scramble'

export function Header() {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [isTrigger, setIsTrigger] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  function handleScroll() {
    if (window.scrollY > 0) return setIsScrolled(true)

    return setIsScrolled(false)
  }

  useEffect(() => {
    setIsMounted(true)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  }, [handleScroll])

  if (!isMounted) return null

  return (
    <header
      className={cn(
        'sticky top-0 z-[999] mx-auto flex w-full items-center justify-between px-8 py-6',
        {
          'border-border/5 border-b bg-background/10 backdrop-blur-sm':
            isScrolled,
        }
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <icons.tesseract className="size-10 fill-black dark:fill-white" />

        <Button
          size="default"
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
      </div>
    </header>
  )
}
