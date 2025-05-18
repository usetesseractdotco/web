'use client'

import { MailIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export default function Home() {
  const [email, setEmail] = useState<string>('')

  return (
    <main className="flex flex-col items-center justify-start gap-40 pt-24 w-full text-center relative overflow-hidden">
      <div className="flex flex-col gap-32">
        <div className="flex flex-col gap-12 items-center justify-center max-w-3xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-7xl font-medium text-[#171717] dark:text-white leading-[1.1] tracking-[-0.4]">
              Simplified Backend for
              <br /> Blockchain Apps
            </h1>
            <p className="text-2xl text-[#797979] dark:text-[#E1E1E1] max-w-xl leading-[1.4] tracking-[-0.1]">
              Tesseract is an open-source, self-hostable platform that removes
              the complexity of blockchain infrastructure.
            </p>
          </div>

          <div className="flex gap-4 h-fit items-center justify-center">
            <div className="relative flex-1 min-w-xs">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={cn(
                  'placeholder:text-neutral-400/70 text-neutral-400/70 flex-1 pl-12 w-full',
                )}
              />
              <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-neutral-400/70 pointer-events-none" />
            </div>
            <Button>Join Waitlist</Button>
          </div>
        </div>

        <div className="relative w-full max-w-[846px] min-h-[240px] h-[50vw] max-h-[480px] border mx-auto">
          {/* Vertical gradient borders, responsive */}
          <div className="absolute h-full w-5 -left-5 rotate-180 overflow-hidden border-r bg-transparent bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px] hidden sm:block" />
          <div className="absolute h-full w-5 -right-5 overflow-hidden border-r bg-transparent bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px] hidden sm:block" />
          {/* Horizontal gradient borders, responsive */}
          <div className="absolute w-full h-5 -top-5 overflow-hidden border-b bg-transparent bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px] hidden sm:block" />
          <div className="absolute w-full h-5 -bottom-5 overflow-hidden border-t bg-transparent bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px] hidden sm:block" />

          {/* Corner decorations, responsive */}
          <div className="absolute size-[60px] sm:size-[100px] -left-[calc(2.5rem+2px)] sm:-left-[calc(6rem+4px)] -top-[calc(2.5rem+2px)] sm:-top-[calc(6rem+4px)] border-b border-r bg-transparent" />
          <div className="absolute size-[60px] sm:size-[100px] -right-[calc(2.5rem+2px)] sm:-right-[calc(6rem+4px)] -top-[calc(2.5rem+2px)] sm:-top-[calc(6rem+4px)] border-b border-l bg-transparent" />
          <div className="absolute size-[60px] sm:size-[100px] -left-[calc(2.5rem+2px)] sm:-left-[calc(6rem+4px)] -bottom-[calc(2.5rem+2px)] sm:-bottom-[calc(6rem+4px)] border-t border-r bg-transparent" />
          <div className="absolute size-[60px] sm:size-[100px] -right-[calc(2.5rem+2px)] sm:-right-[calc(6rem+4px)] -bottom-[calc(2.5rem+2px)] sm:-bottom-[calc(6rem+4px)] border-t border-l bg-transparent" />

          <div className="bg-white w-[846px] h-[481px]" />
        </div>
      </div>

      <div className="flex flex-col gap-32 mt-40 min-h-screen">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-medium text-[#171717] dark:text-white leading-[1.1] tracking-[-0.4]">
            Powerful features, ready to build with
          </h1>
          <p className="text-xl text-[#797979] dark:text-[#E1E1E1] max-w-lg leading-[1.4] tracking-[-0.1]">
            Everything you need to launch, scale, and manage modern <br />
            blockchain apps — without the complexity.
          </p>
        </div>

        <div className="relative w-full max-w-[846px] min-h-[572px] h-[50vw] max-h-[480px] border mx-auto">
          <div className="absolute h-full w-[382.8px] -left-96 overflow-hidden border-r bg-transparent bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(196,213,247,0.5)_40%,rgba(196,213,247,0.5)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(196,213,247,0.5)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px]" />
          <div className="absolute h-full w-[382.8px] -right-96 overflow-hidden border-l bg-transparent bg-[linear-gradient(45deg,rgba(0,0,0,0.01)_40%,rgba(196,213,247,0.5)_40%,rgba(196,213,247,0.5)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(196,213,247,0.5)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px]" />
          <div className="flex flex-row">
            <div className="absolute size-[100px] -left-[calc(6rem+4px)] -top-[calc(6rem+4px)] border-b border-r bg-transparent" />
            <div className="absolute size-[100px] -left-[calc(12rem+4px)] -top-[calc(6rem+4px)] border-b bg-transparent" />
            <div className="absolute size-[100px] -left-[calc(18rem+4px)] -top-[calc(6rem+4px)] border-b bg-transparent" />
            <div className="absolute size-[100px] -left-[calc(24rem+4px)] -top-[calc(6rem+4px)] border-b bg-transparent" />
          </div>
          <div className="flex flex-row">
            <div className="absolute size-[100px] -right-[calc(6rem+4px)] -top-[calc(6rem+4px)] border-b border-l bg-transparent" />
            <div className="absolute size-[100px] -right-[calc(12rem+4px)] -top-[calc(6rem+4px)] border-b bg-transparent" />
            <div className="absolute size-[100px] -right-[calc(18rem+4px)] -top-[calc(6rem+4px)] border-b bg-transparent" />
            <div className="absolute size-[100px] -right-[calc(24rem+4px)] -top-[calc(6rem+4px)] border-b bg-transparent" />
          </div>
          <div className="flex flex-row">
            <div className="absolute size-[100px] -left-[calc(6rem+4px)] -bottom-[calc(6rem+4px)] border-t border-r bg-transparent" />
            <div className="absolute size-[100px] -left-[calc(12rem+4px)] -bottom-[calc(6rem+4px)] border-t bg-transparent" />
            <div className="absolute size-[100px] -left-[calc(18rem+4px)] -bottom-[calc(6rem+4px)] border-t bg-transparent" />
            <div className="absolute size-[100px] -left-[calc(24rem+4px)] -bottom-[calc(6rem+4px)] border-t bg-transparent" />
          </div>
          <div className="flex flex-row">
            <div className="absolute size-[100px] -right-[calc(6rem+4px)] -bottom-[calc(6rem+4px)] border-t border-l bg-transparent" />
            <div className="absolute size-[100px] -right-[calc(12rem+4px)] -bottom-[calc(6rem+4px)] border-t bg-transparent" />
            <div className="absolute size-[100px] -right-[calc(18rem+4px)] -bottom-[calc(6rem+4px)] border-t bg-transparent" />
            <div className="absolute size-[100px] -right-[calc(24rem+4px)] -bottom-[calc(6rem+4px)] border-t bg-transparent" />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="flex flex-col items-start justify-center gap-4 h-[286px] w-[430px] border-r border-b p-6">
                <div className="w-full h-full" />

                <div className="flex flex-col gap-2 items-start justify-start">
                  <h3 className="text-2xl font-medium">IPFS built-in</h3>
                  <p className="text-xl text-[#797979] dark:text-[#E1E1E1] max-w-lg leading-[1.4] tracking-[-0.1]">
                    Decentralized storage, out of the box.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start justify-center gap-4 h-[286px] w-[430px] border-b p-6">
                <div className="w-full h-full" />

                <div className="flex flex-col gap-2 items-start justify-start">
                  <h3 className="text-2xl font-medium">
                    Smart Contract Integration
                  </h3>
                  <p className="text-xl text-[#797979] dark:text-[#E1E1E1] max-w-lg leading-[1.4] tracking-[-0.1]">
                    Easy smart contract calls.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col items-start justify-center gap-4 h-[286px] w-[342px] border-r border-b p-6">
                <div className="w-full h-full" />

                <div className="flex flex-col gap-2 items-start justify-start">
                  <h3 className="text-2xl font-medium">DeFi price feeds </h3>
                  <p className="text-xl text-[#797979] dark:text-[#E1E1E1] max-w-lg leading-[1.4] tracking-[-0.1]">
                    Access real-time market data.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start justify-center gap-4 h-[286px] w-[504px] border-b p-6">
                <div className="w-full h-full" />

                <div className="flex flex-col gap-2 items-start justify-start">
                  <h3 className="text-2xl font-medium">
                    Block and Event Monitoring
                  </h3>
                  <p className="text-xl text-[#797979] dark:text-[#E1E1E1] max-w-lg leading-[1.4] tracking-[-0.1]">
                    Track blocks and events in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
