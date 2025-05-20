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
      setTransactions((prev) => {
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
    <div className="flex flex-col w-full h-[13.75em] border-b border-l sm:border-r-0 border-r p-4">
      <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden select-none">
        <LayoutGroup>
          <AnimatePresence mode="popLayout">
            {transactions.map((transaction) => (
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
                className="flex flex-row items-center h-[2em] justify-between w-full border-b"
              >
                <motion.span
                  layout
                  className="text-muted-foreground text-[6px] sm:text-[8px] md:text-[10px] w-[80px]"
                >
                  {transaction.type}
                </motion.span>

                {transaction.type === 'Transaction' ? (
                  <motion.div
                    layout
                    className="flex flex-row gap-2 items-center justify-end"
                  >
                    <span className="text-muted-foreground text-[5px] sm:text-[7px] md:text-[9px] w-[30px] text-center">
                      from
                    </span>

                    <div className="bg-primary w-[90px] p-0.5 md:p-1 text-primary-foreground flex items-center justify-center">
                      <span className="text-[5px] sm:text-[7px] md:text-[9px] font-mono">
                        {generateRandomAddress()}
                      </span>
                    </div>

                    <span className="text-muted-foreground text-[5px] sm:text-[7px] md:text-[9px] w-[30px] text-center">
                      to
                    </span>

                    <div className="bg-primary w-[90px] p-0.5 md:p-1 text-primary-foreground flex items-center justify-center">
                      <span className="text-[5px] sm:text-[7px] md:text-[9px] font-mono">
                        {generateRandomAddress()}
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    layout
                    className="flex flex-row gap-2 items-center justify-end"
                  >
                    <span className="text-muted-foreground text-[5px] sm:text-[7px] md:text-[9px] w-[30px] text-center">
                      address
                    </span>

                    <div className="bg-primary w-[90px] p-0.5 md:p-1 text-primary-foreground flex items-center justify-center">
                      <span className="text-[5px] sm:text-[7px] md:text-[9px] font-mono">
                        {generateRandomAddress()}
                      </span>
                    </div>

                    <span className="text-muted-foreground text-[5px] sm:text-[7px] md:text-[9px] w-[30px] text-center">
                      method
                    </span>

                    <div className="bg-primary w-[90px] p-0.5 md:p-1 text-primary-foreground flex items-center justify-center">
                      <span className="text-[5px] sm:text-[7px] md:text-[9px] font-mono">
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

      <div className="flex flex-col gap-2 items-start justify-start z-10 bg-background">
        <h3 className="text-base font-medium">Block and Event Monitoring</h3>
        <p className="text-sm text-muted-foreground max-w-lg leading-[1.5] tracking-[-0.2]">
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
