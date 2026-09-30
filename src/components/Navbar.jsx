import React, { useState } from 'react'
import logo from '../assets/images/cm.png'

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Mentor', id: 'mentor' },
  { name: 'Courses', id: 'courses' },
  { name: 'Scholarship', id: 'scholarship', badge: '75%' },
  { name: 'Features', id: 'features' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'Reviews', id: 'reviews' },
  { name: 'FAQ', id: 'faq' }
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

    setMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-[var(--background)]/90 backdrop-blur-xl border-b border-[var(--border)]">

      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 h-16 sm:h-[72px] flex items-center justify-between gap-4">

        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollToSection('about')}
          className="flex items-center gap-1 font-bold text-[22px] sm:text-[26px] lg:text-[28px] tracking-tight text-[var(--text)] shrink-0 cursor-pointer"
        >
          <img
            src={logo}
            alt="Cinemathic"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl shrink-0"
          />

          Cine

          <span className="text-green-700">
            math
          </span>

          ic
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-[11px] xl:text-[12px] uppercase tracking-[0.14em]">

          {navLinks.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`relative text-[14px] whitespace-nowrap tracking-wider font-semibold cursor-pointer ${
                item.badge
                  ? 'text-[#FFE45C]'
                  : 'cinemathic-link'
              }`}
            >
              {item.name}

              {item.badge && (
                <span className="absolute -top-4 -right-3 text-[7px] tracking-normal font-bold bg-[#FFE45C] text-[#111111] px-1.5 py-0.5 rounded-full animate-pulse">
                  {item.badge}
                </span>
              )}
            </button>
          ))}

          {/* Contact */}
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="cinemathic-button px-4 xl:px-5 py-2.5 rounded-full whitespace-nowrap tracking-wider font-semibold cursor-pointer"
          >
            Contact
          </button>

        </div>

        {/* Mobile / Tablet Button */}
        <div className="lg:hidden flex items-center shrink-0">

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border cinemathic-border flex items-center justify-center text-lg text-[var(--text)] hover:border-[var(--primary)] transition cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? '×' : '☰'}
          </button>

        </div>

      </div>

      {/* Mobile / Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t cinemathic-border bg-[var(--background)]">

          <div className="max-w-[1220px] mx-auto px-4 sm:px-6 py-3 sm:py-4">

            <div className="flex flex-col text-[12px] sm:text-[13px] uppercase tracking-widest">

              {navLinks.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`py-3 sm:py-3.5 cinemathic-border tracking-wider font-semibold flex items-center gap-2 text-left cursor-pointer ${
                    index !== navLinks.length - 1
                      ? 'border-b'
                      : ''
                  } ${
                    item.badge
                      ? 'text-[#FFE45C]'
                      : 'cinemathic-link'
                  }`}
                >
                  {item.name}

                  {item.badge && (
                    <span className="text-[7px] tracking-normal font-bold bg-[#FFE45C] text-[#111111] px-1.5 py-0.5 rounded-full animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}

              {/* Contact */}
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="mt-3 cinemathic-button text-center py-3 rounded-full tracking-wider font-semibold cursor-pointer"
              >
                Contact
              </button>

            </div>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar