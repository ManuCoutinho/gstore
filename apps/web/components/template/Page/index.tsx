import { Footer } from "../Footer";
import { Header } from "../Header";
import type { TemplatePageProps } from './types'

export default function Page({ children, className, noFooter = false, noHeader = false }: TemplatePageProps) {
  return (
    <div
      className='flex flex-col min-h-screen'
      style={{
        background: "radial-gradient(50% 50% at 50% 50%, #2d0064 0%, #0d001c 100%)"
      }}
    >
      <div
        className='flex-1 flex flex-col w-screen'
        style={{ background: 'url("/background.png")' }}
      >
        {!noHeader && <Header />}
        <main className={`flex-1 flex flex-col ${className ?? ""}`}>
          {children}
        </main>
        {!noFooter && <Footer />}
      </div>
    </div>
  )
}