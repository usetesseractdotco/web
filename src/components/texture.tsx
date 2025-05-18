'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function Texture() {
  const { resolvedTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <Image
      src={`/${resolvedTheme}-dots.png`}
      alt="Texture"
      fill
      className="object-cover opacity-50"
      priority
    />
  )
}
