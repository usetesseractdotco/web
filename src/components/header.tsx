import Image from 'next/image'
import Link from 'next/link'

import { Button } from './ui/button'

export function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 flex w-full px-40 py-6 justify-between items-center bg-background/10 backdrop-blur-sm border-b border-border/10">
      <Image
        src="/logo.svg"
        alt="logo"
        width={48}
        height={56}
        className="invert dark:invert-0"
      />

      <nav className="absolute left-1/2 transform -translate-x-1/2">
        <div className="flex gap-8">
          <Link href="/" className="font-medium text-lg text-foreground">
            Home
          </Link>
          <Link href="/pricing" className="font-medium text-lg text-foreground">
            Pricing
          </Link>
          <Link
            href="/features"
            className="font-medium text-lg text-foreground"
          >
            Features
          </Link>
        </div>
      </nav>

      <Button>Join Waitlist</Button>
    </header>
  )
}
