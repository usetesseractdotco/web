import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen pt-25 gap-4 text-center relative overflow-hidden">
      <div className="flex flex-col gap-12 items-center justify-center px-40 mb-[400px] z-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-7xl font-medium text-[#171717] dark:text-white leading-[1.1] tracking-[-0.4]">
            Simplified Backend for
            <br /> Blockchain Apps
          </h1>
          <p className="text-lg text-[#797979] dark:text-[#E1E1E1] max-w-lg leading-[1.4] tracking-[-0.1]">
            Tesseract is an open-source, self-hostable platform that removes the
            complexity of blockchain infrastructure.
          </p>
        </div>

        <div className="flex gap-4">
          <Button>Start Building Now</Button>
          <Button variant="link">Use Cases</Button>
        </div>
      </div>
    </main>
  )
}
