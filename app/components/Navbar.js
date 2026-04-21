'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 w-full bg-white/55 dark:bg-neutral-900/55 backdrop-blur-[24px] saturate-[180%] z-50 transition-colors duration-300">
      <nav className="flex items-center px-8 py-4 max-w-full mx-auto">
        <div className="flex-1 text-xl font-bold text-zinc-900 dark:text-white tracking-tighter">
          RCA-LTD
        </div>
        <div className="hidden md:flex items-center justify-center gap-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={
                  isActive
                    ? 'text-emerald-700 dark:text-emerald-400 border-b-2 border-emerald-700 dark:border-emerald-400 pb-1 font-semibold tracking-tight'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all font-semibold tracking-tight'
                }
              >
                {label}
              </Link>
            )
          })}
        </div>
        <div className="flex-1 flex justify-end">
          <Link
            href="/contact"
            className="bg-[#1A6B4A] text-white px-8 py-2.5 rounded-full font-semibold active:scale-[0.97] transition-transform"
          >
            Get a Quote
          </Link>
        </div>
      </nav>
    </header>
  )
}
