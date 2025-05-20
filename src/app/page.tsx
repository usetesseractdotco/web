'use client'

import { useEffect, useState } from 'react'

import { FeaturesBentoBox } from '@/components/sections/home/features-bento-box'
import { FeaturesWithPreview } from '@/components/sections/home/features-with-preview'
import { Hero } from '@/components/sections/home/hero'

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <main className="flex flex-col items-center justify-center py-20 overflow-x-hidden">
      <Hero />
      <FeaturesBentoBox />
      <FeaturesWithPreview />
    </main>
  )
}
