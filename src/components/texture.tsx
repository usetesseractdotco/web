'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function Texture() {
  const { resolvedTheme } = useTheme()
  const [image, setImage] = useState<string | null>(null)

  useEffect(() => {
    setImage(`/${resolvedTheme}-dots.png`)
  }, [resolvedTheme])

  if (!image) return null

  return (
    <Image
      src={image}
      alt="Texture"
      fill
      className="object-cover opacity-50"
      priority
    />
  )
}
