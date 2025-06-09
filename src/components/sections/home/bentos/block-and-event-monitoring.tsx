'use client'

import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { useEffect, useState } from 'react'

export function BlockAndEventMonitoring() {
  const [transactions, setTransactions] = useState<
    Array<{ id: number; type: string }>
  >([])

  useEffect(() => {
    setTransactions([
      { id: 1, type: 'Transaction' },
      { id: 2, type: 'Smart Contract' },
      { id: 3, type: 'Transaction' },
      { id: 4, type: 'Smart Contract' },
    ])

    const interval = setInterval(() => {
      setTransactions(prev => {
        const newTransactions = [...prev]
        if (newTransactions.length >= 4) {
          newTransactions.pop()
        }

        const newTransaction = {
          id: Date.now(),
          type: Math.random() > 0.5 ? 'Transaction' : 'Smart Contract',
        }

        newTransactions.unshift(newTransaction)
        return newTransactions
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex h-[18em] w-full flex-col border-r border-b border-l p-4 sm:border-r-0">
      <div className="flex h-full w-full select-none flex-col items-center justify-center overflow-hidden">
        <LayoutGroup>
          <AnimatePresence mode="popLayout">
            {transactions.map(transaction => (
              <motion.div
                layout
                layoutId={`transaction-${transaction.id}`}
                key={transaction.id}
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  layout: {
                    duration: 0.4,
                    ease: [0.165, 0.84, 0.44, 1],
                  },
                }}
                className="flex h-[2em] w-full flex-row items-center justify-between border-b last:border-b-0"
              >
                <motion.span
                  layout
                  className="w-[80px] text-[6px] text-muted-foreground sm:text-[8px] md:text-[10px]"
                >
                  {transaction.type}
                </motion.span>

                {transaction.type === 'Transaction' ? (
                  <motion.div
                    layout
                    className="flex flex-row items-center justify-end gap-2"
                  >
                    <span className="w-[30px] text-center text-[5px] text-muted-foreground sm:text-[7px] md:text-[9px]">
                      from
                    </span>

                    <div className="flex w-[90px] items-center justify-center bg-primary p-0.5 text-primary-foreground md:p-1">
                      <span className="font-mono text-[5px] sm:text-[7px] md:text-[9px]">
                        {generateRandomAddress()}
                      </span>
                    </div>

                    <span className="w-[30px] text-center text-[5px] text-muted-foreground sm:text-[7px] md:text-[9px]">
                      to
                    </span>

                    <div className="flex w-[90px] items-center justify-center bg-primary p-0.5 text-primary-foreground md:p-1">
                      <span className="font-mono text-[5px] sm:text-[7px] md:text-[9px]">
                        {generateRandomAddress()}
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    layout
                    className="flex flex-row items-center justify-end gap-2"
                  >
                    <span className="w-[30px] text-center text-[5px] text-muted-foreground sm:text-[7px] md:text-[9px]">
                      address
                    </span>

                    <div className="flex w-[90px] items-center justify-center bg-primary p-0.5 text-primary-foreground md:p-1">
                      <span className="font-mono text-[5px] sm:text-[7px] md:text-[9px]">
                        {generateRandomAddress()}
                      </span>
                    </div>

                    <span className="w-[30px] text-center text-[5px] text-muted-foreground sm:text-[7px] md:text-[9px]">
                      method
                    </span>

                    <div className="flex w-[90px] items-center justify-center bg-primary p-0.5 text-primary-foreground md:p-1">
                      <span className="font-mono text-[5px] sm:text-[7px] md:text-[9px]">
                        {generateRandomFunction()}
                      </span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </LayoutGroup>
      </div>

      <div className="z-10 flex flex-col items-start justify-start gap-2 bg-background">
        <h3 className="font-medium text-base">Block and Event Monitoring</h3>
        <p className="max-w-lg text-muted-foreground text-sm leading-[1.5] tracking-[-0.2]">
          Track blocks and events in real time.
        </p>
      </div>
    </div>
  )
}

function generateRandomAddress() {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < 4; i++) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }
  return `${result}...${chars[Math.floor(Math.random() * chars.length)]}${chars[Math.floor(Math.random() * chars.length)]}${chars[Math.floor(Math.random() * chars.length)]}${chars[Math.floor(Math.random() * chars.length)]}`
}

function generateRandomFunction() {
  const functions = [
    'transfer()',
    'mint()',
    'approve()',
    'stake()',
    'swap()',
    'claim()',
    'vote()',
    'deploy()',
    'execute()',
    'withdraw()',
  ]
  return functions[Math.floor(Math.random() * functions.length)]
}
