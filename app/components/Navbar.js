'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 w-full bg-white z-50 border-b border-zinc-200">
      <nav className="flex items-center px-6 md:px-8 py-4 max-w-full mx-auto">
        <Link href="/" onClick={() => setOpen(false)} className="flex-1 flex items-center gap-2.5">
          <span className="logo-shine">
            <Image
              src="/rca_logo.png"
              alt="RCA-LTD logo"
              width={80}
              height={64}
              priority
              className="h-8 w-auto object-contain logo-levitate"
            />
          </span>
          <span className="text-xl font-bold text-zinc-900 tracking-tighter">
            RCA-LTD
          </span>
        </Link>

        <div className="hidden md:flex items-center justify-center gap-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={
                  isActive
                    ? 'text-emerald-700 border-b-2 border-emerald-700 pb-1 font-semibold tracking-tight'
                    : 'text-zinc-600 hover:text-zinc-900 transition-all font-semibold tracking-tight'
                }
              >
                {label}
              </Link>
            )
          })}
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center gap-4">
          <Image
            src="/rics-logo.png"
            alt="Regulated by RICS"
            width={900}
            height={600}
            className="h-11 lg:h-12 w-auto object-contain"
          />
          <span className="h-7 w-px bg-zinc-300" aria-hidden="true" />
          <Link
            href="/contact"
            className="btn-shine text-white px-8 py-2.5 rounded-full font-semibold active:scale-[0.97] transition-transform"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-zinc-900 hover:bg-zinc-100 transition-colors"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '1.6rem' }}>
            {open ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-zinc-200">
          <div className="flex flex-col px-6 py-4 gap-1">
            {links.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={
                    isActive
                      ? 'text-emerald-700 font-semibold tracking-tight py-3 px-2 border-l-4 border-emerald-700 bg-emerald-50'
                      : 'text-zinc-700 hover:text-zinc-900 font-semibold tracking-tight py-3 px-2 border-l-4 border-transparent'
                  }
                >
                  {label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 btn-shine text-white text-center px-8 py-3 rounded-full font-semibold active:scale-[0.97] transition-transform"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
