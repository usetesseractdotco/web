'use client'

import { motion } from 'motion/react'
import { useState } from 'react'

import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'

interface TechTabProps {
  icon: React.ReactNode
  label: string
  isActive: boolean
  onClick: () => void
  className?: string
}

function TechTab({ icon, label, isActive, onClick, className }: TechTabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex flex-row items-center gap-1.5 px-3 border-t border-b py-2 transition-all duration-200 hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset',
        isActive &&
          `bg-muted bg-[linear-gradient(45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] dark:bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)] bg-[size:4px_4px]`,
        className,
      )}
      role="tab"
      aria-selected={isActive}
    >
      <span className="flex-shrink-0 w-4 h-4">{icon}</span>
      <span
        className={cn(
          'text-xs',
          isActive ? 'text-foreground' : 'text-muted-foreground',
        )}
      >
        {label}
      </span>
    </button>
  )
}

interface FileTabProps {
  filename: string
  isActive: boolean
  onClick: () => void
  className?: string
}

function FileTab({ filename, isActive, onClick, className }: FileTabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex flex-row items-center gap-1.5 w-max flex-shrink-0 py-1.5 px-4 border-b transition-all duration-200 hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset',
        isActive &&
          `bg-muted bg-[linear-gradient(45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] dark:bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)] bg-[size:4px_4px]`,
        className,
      )}
      role="tab"
      aria-selected={isActive}
    >
      <span
        className={cn(
          'text-xs',
          isActive ? 'text-foreground' : 'text-muted-foreground',
        )}
      >
        {filename}
      </span>
    </button>
  )
}

const techTabs = [
  { id: 'nodejs', icon: <Icons.nodejs />, label: 'NodeJS' },
  { id: 'reactjs', icon: <Icons.reactjs />, label: 'ReactJS' },
  { id: 'vuejs', icon: <Icons.vuejs />, label: 'Vue.js' },
]

const fileTabs = [
  { id: 'events', filename: 'events.ts' },
  { id: 'transaction', filename: 'transaction-preview.ts' },
  { id: 'gas-estimative', filename: 'gas-estimative.ts' },
  { id: 'create-wallet', filename: 'create-wallet.ts' },
]

export function CodeExample() {
  const [activeTechTab, setActiveTechTab] = useState('nodejs')
  const [activeFileTab, setActiveFileTab] = useState('events')

  return (
    <section className="flex flex-col gap-16 items-center justify-center pt-32">
      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [20, 0],
        }}
        transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1], delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col gap-6 items-center justify-center text-center"
      >
        <h1 className="font-medium text-4xl leading-[1.1] tracking-[-0.4] max-w-xs md:text-5xl md:max-w-3xl">
          Integrate now, <br className="block sm:hidden" />
          see it in action
        </h1>
        <p className="text-base text-muted-foreground max-w-xs md:max-w-lg md:text-lg">
          Start building in minutes with powerful APIs, clear docs, and instant
          access to your Web3 backend.
        </p>
      </motion.div>

      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [20, 0],
        }}
        transition={{
          duration: 0.6,
          ease: [0.165, 0.84, 0.44, 1],
          delay: 0.4,
        }}
        viewport={{ once: true }}
        className="relative flex flex-col max-w-md sm:max-w-3xl sm:min-w-3xl lg:max-w-4xl items-center justify-center"
      >
        <div className="absolute h-full left-0 w-[50vw] translate-x-[-100%] rotate-180 overflow-hidden border-t border-b border-r bg-transparent bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] dark:bg-[linear-gradient(-45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)] bg-[size:15px_15px] -z-10" />
        <div className="absolute h-full right-0 w-[50vw] translate-x-[100%] overflow-hidden border-t border-b border-l bg-transparent bg-[linear-gradient(45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] dark:bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)] bg-[size:15px_15px] -z-10" />

        <div className="absolute size-[2.5em] hidden sm:block sm:size-[4.25em] lg:size-[6.25em] -left-[2.5em] sm:left-[-4.2em] lg:left-[-6.2em] -top-[2.5em] sm:top-[-4.2em] lg:top-[-6.2em] border-r bg-transparent -z-10" />
        <div className="absolute size-[2.5em] hidden sm:block sm:size-[4.25em] lg:size-[6.25em] -right-[2.5em] sm:right-[-4.2em] lg:right-[-6.25em] -top-[2.5em] sm:top-[-4.2em] lg:top-[-6.2em] border-l bg-transparent -z-10" />
        <div className="absolute size-[2.5em] hidden sm:block sm:size-[4.25em] lg:size-[6.25em] -left-[2.5em] sm:left-[-4.2em] lg:left-[-6.2em] -bottom-[2.5em] sm:bottom-[-4.2em] lg:bottom-[-6.2em] border-r bg-transparent -z-10" />
        <div className="absolute size-[2.5em] hidden sm:block sm:size-[4.25em] lg:size-[6.25em] -right-[2.5em] sm:right-[-4.2em] lg:right-[-6.25em] -bottom-[2.5em] sm:bottom-[-4.2em] lg:bottom-[-6.2em] border-l bg-transparent -z-10" />

        <div className="flex flex-col sm:flex-row w-full bg-background/50 backdrop-blur-sm overflow-hidden relative z-10">
          <div className="flex flex-col w-full">
            <div
              className="flex flex-row"
              role="tablist"
              aria-label="Technology selection"
            >
              {techTabs.map((tab, index) => (
                <TechTab
                  key={tab.id}
                  icon={tab.icon}
                  label={tab.label}
                  isActive={activeTechTab === tab.id}
                  onClick={() => setActiveTechTab(tab.id)}
                  className={index > 0 ? 'border-l' : ''}
                />
              ))}
              <div className="flex-row w-full border-t border-b border-l hidden sm:flex" />
            </div>

            <div
              className="flex flex-row w-full"
              role="tablist"
              aria-label="File selection"
            >
              <div className="flex sm:hidden w-full">
                <FileTab
                  key={fileTabs[0].id}
                  filename={fileTabs[0].filename}
                  isActive={activeFileTab === fileTabs[0].id}
                  onClick={() => setActiveFileTab(fileTabs[0].id)}
                />

                <FileTab
                  key="mobile-more"
                  filename={`+${fileTabs.length - 1}`}
                  isActive={false}
                  onClick={() => {}}
                  className="border-l"
                />
                <div className="flex-row w-full border-b border-l" />
              </div>

              <div className="hidden sm:flex w-full">
                {fileTabs.map((tab, index) => (
                  <FileTab
                    key={tab.id}
                    filename={tab.filename}
                    isActive={activeFileTab === tab.id}
                    onClick={() => setActiveFileTab(tab.id)}
                    className={index > 0 ? 'border-l' : ''}
                  />
                ))}
                <div className="flex-row w-full border-b border-l" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
