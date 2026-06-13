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
    <header className="sticky top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <nav aria-label="Main navigation" className="flex items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" onClick={() => setOpen(false)} className="flex-1 flex items-center gap-2.5">
          <span className="logo-shine">
            <Image
              src="/rca-logo-reinstatement-cost-assessment.png"
              alt="RCA Ltd – Reinstatement Cost Assessment specialists"
              width={80}
              height={64}
              priority
              className="h-10 w-auto object-contain logo-levitate"
            />
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
                    ? 'text-gray-900 font-medium text-sm tracking-wide'
                    : 'text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm tracking-wide'
                }
              >
                {label}
              </Link>
            )
          })}
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center">
          <Image
            src="/rics-logo.png"
            alt="Regulated by RICS"
            width={900}
            height={600}
            className="h-10 w-auto object-contain opacity-60"
          />
        </div>

        <div className="md:hidden flex flex-1 justify-end items-center gap-3">
          <Image
            src="/rics-logo.png"
            alt="Regulated by RICS"
            width={900}
            height={600}
            className="h-8 w-auto object-contain opacity-50"
          />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1.4rem' }}>
              {open ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-gray-50">
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
                      ? 'text-gray-900 font-medium text-sm py-3 px-3 border-l-2 border-[#1A6B4A] bg-gray-50'
                      : 'text-gray-500 hover:text-gray-900 font-medium text-sm py-3 px-3 border-l-2 border-transparent hover:border-gray-200 transition-colors'
                  }
                >
                  {label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
