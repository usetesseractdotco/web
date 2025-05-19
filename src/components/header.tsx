'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

import { Button } from './ui/button'

export function Header() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <header className="sticky top-0 items-center justify-between flex w-full mx-auto px-8 py-6 bg-background/10 backdrop-blur-sm border-b border-border/10">
      <Image
        src="/logo.svg"
        alt="logo"
        width={48}
        height={56}
        className="invert dark:invert-0"
      />

      <Button size={isDesktop ? 'default' : 'sm'}>Join Waitlist</Button>
    </header>
  )
}
