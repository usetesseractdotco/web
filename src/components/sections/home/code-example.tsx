'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { createHighlighter } from 'shiki'

import { icons } from '@/components/icons'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

const techs = [
  {
    label: 'NodeJs',
    icon: <icons.nodejs className="size-4" />,
    codeExamples: [
      {
        title: 'events.ts',
        code: `import { Tesseract } from '@usetesseract/sdk'

const tesseract = new Tesseract(process.env.TESSERACT_API_KEY)

tesseract.onEvent({
 contractAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
 eventName: 'Transfer',
 chain: 'solana',
}, (eventData) => {
 console.log('Transfer event detected:', eventData);
});`,
      },
      {
        title: 'transaction-preview.ts',
        code: `import { Tesseract } from '@usetesseract/sdk'

const tesseract = new Tesseract(process.env.TESSERACT_API_KEY)

tesseract.transactions.preview({
  to: '69tvyALkYV5m9RckJEK5MsjGeqPUK5GAfK4cK74WJQ9P',
  from: 'H2m3WMrZMhJ9S5TYm4mqJ3y9j9rT6EqWBn2MszK32DJY',
  value: '1000000', // in lamports
  chain: 'solana',
  fee: 'auto',
}).then(console.log)
`,
      },
      {
        title: 'gas-estimative.ts',
        code: `import { Tesseract } from '@usetesseract/sdk'

const tesseract = new Tesseract(process.env.TESSERACT_API_KEY)

tesseract.transactions.preview({
  to: '69tvyALkYV5m9RckJEK5MsjGeqPUK5GAfK4cK74WJQ9P',
  from: 'H2m3WMrZMhJ9S5TYm4mqJ3y9j9rT6EqWBn2MszK32DJY',
  value: '1000000', // in lamports
  chain: 'solana',
  priority: 'high',
}).then(res => {
  console.log('Estimated fee (lamports):', res.fee)
})
`,
      },
      {
        title: 'create-wallet.ts',
        code: `import { Tesseract } from '@usetesseract/sdk'

const tesseract = new Tesseract(process.env.TESSERACT_API_KEY)

tesseract.wallets.create({
  chain: 'solana',
}).then(wallet => {
  console.log('New wallet address:', wallet.address)
})`,
      },
    ],
  },
  {
    label: 'ReactJs',
    icon: <icons.reactjs className="size-4" />,
    codeExamples: [
      {
        title: 'sign-in.tsx',
        code: ``,
      },
      {
        title: 'connect-wallet.tsx',
        code: ``,
      },
      {
        title: 'transaction-form.tsx',
        code: ``,
      },
      {
        title: 'price-feed.tsx',
        code: ``,
      },
    ],
  },
  {
    label: 'Vue.js',
    icon: <icons.vuejs className="size-4" />,
    codeExamples: [
      {
        title: 'sign-in.vue',
        code: ``,
      },
      {
        title: 'connect-wallet.vue',
        code: ``,
      },
      {
        title: 'transaction-form.vue',
        code: ``,
      },
      {
        title: 'price-feed.vue',
        code: ``,
      },
    ],
  },
]

function getLanguageFromTitle(title: string): string {
  if (title.endsWith('.ts') || title.endsWith('.tsx')) return 'typescript'
  if (title.endsWith('.js') || title.endsWith('.jsx')) return 'javascript'
  if (title.endsWith('.vue')) return 'vue'

  return 'typescript'
}

export function CodeExample() {
  const [activeTech, setActiveTech] = useState<(typeof techs)[number]>(techs[0])
  const [activeCodeExampleIndex, setActiveCodeExampleIndex] =
    useState<number>(0)
  const [highlightedCode, setHighlightedCode] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (activeTech.codeExamples.length === 0) return

    setActiveCodeExampleIndex(0)
  }, [activeTech])

  useEffect(() => {
    let cancelled = false

    async function highlight() {
      setLoading(true)
      const highlighter = await createHighlighter({
        langs: ['typescript', 'javascript', 'vue'],
        themes: ['github-dark', 'github-light'],
      })

      const lang = getLanguageFromTitle(
        activeTech.codeExamples[activeCodeExampleIndex].title
      )
      const html = highlighter.codeToHtml(
        activeTech.codeExamples[activeCodeExampleIndex].code,
        {
          lang,
          themes: {
            dark: 'github-dark',
            light: 'github-light',
          },
          defaultColor: false,
          cssVariablePrefix: '--_s-',
        }
      )

      if (!cancelled) {
        setHighlightedCode(html)
        setLoading(false)
      }
    }
    highlight()
    return () => {
      cancelled = true
    }
  }, [activeTech, activeCodeExampleIndex])

  return (
    <section className="z-10 flex flex-col items-center justify-center gap-16 pt-32">
      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [20, 0],
        }}
        transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1], delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-6 text-center"
      >
        <h1 className="max-w-xs font-medium text-4xl leading-[1.1] tracking-[-0.4] md:max-w-3xl md:text-5xl">
          Integrate now, <br className="sm:hidden" />
          see it in action
        </h1>
        <p className="max-w-xs text-base text-muted-foreground md:max-w-lg md:text-lg">
          Start building in minutes with powerful <br className="sm:hidden" />{' '}
          APIs, clear docs, and instant access to your{' '}
          <br className="sm:hidden" /> Web3 backend.
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
        className="-z-10 relative flex max-w-md flex-col items-center justify-center sm:min-w-3xl sm:max-w-3xl lg:max-w-4xl"
      >
        <div className="absolute left-0 h-full w-[50vw] translate-x-[-100%] rotate-180 overflow-hidden border-t border-r border-b bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px] bg-transparent dark:bg-[linear-gradient(-45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)]" />
        <div className="absolute right-0 h-full w-[50vw] translate-x-[100%] overflow-hidden border-t border-b border-l bg-[linear-gradient(45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px] bg-transparent dark:bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)]" />

        <div className="flex w-full flex-col">
          <div className="flex w-full flex-row border">
            {techs.map((tech, i) => (
              <div
                key={tech.label}
                onKeyDown={() => setActiveTech(tech)}
                onClick={() => setActiveTech(tech)}
                className={cn(
                  'flex cursor-pointer flex-row items-center justify-center gap-2 border-l px-5 py-2 transition-colors first:border-l-0 last:border-r hover:bg-muted/50',
                  activeTech.label === tech.label &&
                    'bg-[linear-gradient(45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:4px_4px] bg-transparent dark:bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)]'
                )}
              >
                {tech.icon}
                <p className="text-muted-foreground text-sm">{tech.label}</p>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-row border-b">
            {activeTech.codeExamples.map(({ title }, i) => (
              <div
                key={title}
                onKeyDown={() => setActiveCodeExampleIndex(i)}
                onClick={() => setActiveCodeExampleIndex(i)}
                className={cn(
                  'flex cursor-pointer flex-row items-center justify-center gap-2 border-l px-5 py-2 transition-colors last:border-r hover:bg-muted/50',
                  activeCodeExampleIndex === i &&
                    'bg-[linear-gradient(45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:4px_4px] bg-transparent dark:bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0.15)_40%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.01)_45%,rgba(255,255,255,0.01)_90%,rgba(255,255,255,0.15)_90%,rgba(255,255,255,0.01)_95%)]'
                )}
              >
                <p className="text-muted-foreground text-sm">{title}</p>
              </div>
            ))}
          </div>

          <div className="flex h-72 flex-row p-6">
            <AnimatePresence mode="popLayout" initial={false}>
              {loading ? (
                <motion.div
                  key={`${activeTech.label}-${activeCodeExampleIndex.toString()}`}
                  className="w-full space-y-2"
                  initial={{
                    opacity: 0,
                    filter: 'blur(4px)',
                  }}
                  animate={{
                    opacity: 1,
                    filter: 'blur(0px)',
                  }}
                >
                  <Skeleton className="h-4 w-[90%]" />
                  <Skeleton className="h-4 w-[80%]" />
                  <Skeleton className="h-4 w-[85%]" />
                  <Skeleton className="h-4 w-[75%]" />
                  <Skeleton className="h-4 w-[95%]" />
                  <Skeleton className="h-4 w-[70%]" />
                  <Skeleton className="h-4 w-[88%]" />
                </motion.div>
              ) : (
                <motion.div
                  key={`${activeTech.label}-${activeCodeExampleIndex.toString()}`}
                  initial={{
                    opacity: 0,
                    filter: 'blur(4px)',
                  }}
                  animate={{
                    opacity: 1,
                    filter: 'blur(0px)',
                  }}
                  transition={{
                    duration: 0.2,
                    ease: 'spring',
                    bounce: 0,
                  }}
                  className="shiki w-full overflow-x-auto text-muted-foreground text-sm"
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: shiki needs this
                  dangerouslySetInnerHTML={{ __html: highlightedCode }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
