'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

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
  }, [])

  if (!isMounted) return null

  return (
    <header
      className={cn(
        'sticky top-0 items-center justify-between flex w-full mx-auto px-8 py-6',
        {
          'bg-background/10 backdrop-blur-sm border-b border-border/5':
            isScrolled,
        },
      )}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between w-full">
        <Image
          src="/logo.svg"
          alt="logo"
          width={48}
          height={56}
          className="invert dark:invert-0"
        />

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
