'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const sectorLinks = [
  { href: '/residential-reinstatement-cost-assessments', label: 'Residential Properties' },
  { href: '/commercial-reinstatement-costs', label: 'Commercial Properties' },
  { href: '/managing-agents-insurance-valuations', label: 'Managing Agents' },
  { href: '/block-managers-reinstatement-cost-assessments', label: 'Block Managers' },
]

const serviceLinks = [
  { href: '/desktop-reinstatement-cost-assessment-uk', label: 'Desktop Assessment' },
  { href: '/on-site-reinstatement-cost-assessment-london', label: 'On‑Site Survey' },
  { href: '/three-year-reinstatement-cost-assessment-london', label: '3‑Year Protection Plan' },
]

const links = [
  { href: '/', label: 'Home', children: sectorLinks },
  { href: '/services', label: 'Services', children: serviceLinks },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 w-full bg-white z-50 border-b border-zinc-200">
      <nav aria-label="Main navigation" className="flex items-center px-6 md:px-8 py-4 max-w-full mx-auto">
        <Link href="/" onClick={() => setOpen(false)} className="flex-1 flex items-center gap-2.5">
          <span className="logo-shine">
            <Image
              src="/rca-logo-reinstatement-cost-assessment.webp"
              alt="RCA Ltd – Reinstatement Cost Assessment specialists"
              width={80}
              height={64}
              priority
              className="h-12 w-auto object-contain logo-levitate"
            />
          </span>
        </Link>

        <div className="hidden md:flex items-center justify-center gap-8">
          {links.map(({ href, label, children }) => {
            const isActive = pathname === href
            const linkEl = (
              <Link
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

            if (!children) {
              return <div key={href}>{linkEl}</div>
            }

            return (
              <div key={href} className="relative group">
                {linkEl}
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200 z-50">
                  <div className="min-w-[15rem] rounded-2xl bg-white border border-zinc-200 shadow-xl p-2">
                    {children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={
                          pathname === child.href
                            ? 'block rounded-xl px-4 py-2.5 text-sm font-semibold text-emerald-700 bg-emerald-50'
                            : 'block rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 transition-colors'
                        }
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center">
          <Image
            src="/rics-logo.webp"
            alt="Regulated by RICS"
            width={900}
            height={600}
            className="h-11 lg:h-12 w-auto object-contain"
          />
        </div>

        <div className="md:hidden flex flex-1 justify-end items-center gap-3">
          <Image
            src="/rics-logo.webp"
            alt="Regulated by RICS"
            width={900}
            height={600}
            className="h-9 w-auto object-contain"
          />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1.6rem' }}>
              {open ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[#1A6B4A]" style={{ backgroundColor: '#1A6B4A' }}>
          <div className="flex flex-col px-6 py-4 gap-1">
            {links.map(({ href, label, children }) => {
              const isActive = pathname === href
              return (
                <div key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={
                      isActive
                        ? 'text-white font-semibold tracking-tight py-3 px-2 border-l-4 border-white bg-white/10 block'
                        : 'text-white/80 hover:text-white font-semibold tracking-tight py-3 px-2 border-l-4 border-transparent hover:border-white/40 block'
                    }
                  >
                    {label}
                  </Link>
                  {children && (
                    <div className="flex flex-col pl-4">
                      {children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={
                            pathname === child.href
                              ? 'text-white font-medium text-sm tracking-tight py-2.5 px-2 border-l-4 border-white bg-white/10'
                              : 'text-white/70 hover:text-white font-medium text-sm tracking-tight py-2.5 px-2 border-l-4 border-transparent hover:border-white/40'
                          }
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
