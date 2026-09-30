import React, { useState } from 'react';
import logo from "../assets/images/cm.png";

const navLinks = [
  { name: 'About', link: '#about' },
  { name: 'Mentor', link: '#mentor' },
  { name: 'Courses', link: '#courses' },
  { name: 'Scholarship', link: '#scholarship' },
  { name: 'Features', link: '#features' },
  { name: 'Gallery', link: '#gallery' },
  { name: 'Reviews', link: '#reviews' },
  { name: 'FAQ', link: '#faq' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Fixed scroll function configured to only run on larger displays
  const scrollToSection = (e, targetId) => {
    // 1024px matches Tailwind's 'lg' breakpoint for laptops and large screens
    if (window.innerWidth < 1024) {
      closeMenu(); 
      return; // Do nothing else, let native HTML anchor scrolling take over on mobile
    }

    e.preventDefault(); // Prevents the URL hash from changing (Desktop only)

    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[var(--background)]/90 backdrop-blur-xl border-b border-[var(--border)]">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 h-16 sm:h-[72px] flex items-center justify-between gap-4">
        
        {/* Logo */}
        <a 
          href="#about" 
          onClick={(e) => scrollToSection(e, '#about')}
          className="flex items-center gap-1 font-bold text-[22px] sm:text-[26px] lg:text-[28px] cinemathic-text tracking-tight text-[var(--text)] shrink-0"
        >
          <img src={logo} alt="Cinemathic" className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl shrink-0" />
          Cine <span className="text-green-700"> math </span> ic
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-[11px] xl:text-[12px] uppercase tracking-[0.14em]">
          {navLinks.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              onClick={(e) => scrollToSection(e, item.link)}
              className={`relative whitespace-nowrap tracking-wider font-semibold ${
                item.name === 'Scholarship' ? 'text-[#FFE45C]' : 'cinemathic-link'
              }`}
            >
              {item.name}
              {item.name === 'Scholarship' && (
                <span className="absolute -top-4 -right-3 text-[7px] tracking-normal font-bold bg-[#FFE45C] text-[#111111] px-1.5 py-0.5 rounded-full animate-pulse">
                  75%
                </span>
              )}
            </a>
          ))}
          
          {/* Contact */}
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, '#contact')}
            className="cinemathic-button px-4 xl:px-5 py-2.5 rounded-full whitespace-nowrap tracking-wider font-semibold"
          >
            Contact
          </a>
        </div>

        {/* Mobile / Tablet Buttons */}
        <div className="lg:hidden flex items-center gap-2 shrink-0">
          {/* Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border cinemathic-border flex items-center justify-center text-lg text-[var(--text)] hover:border-[var(--primary)] transition" 
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
                <a 
                  key={index} 
                  href={item.link} 
                  onClick={(e) => scrollToSection(e, item.link)} 
                  className={`py-3 sm:py-3.5 cinemathic-link cinemathic-border tracking-wider font-semibold flex items-center gap-2 ${
                    index !== navLinks.length - 1 ? 'border-b' : ''
                  } ${
                    item.name === 'Scholarship' ? 'text-[#FFE45C]' : ''
                  }`}
                >
                  {item.name}
                  {item.name === 'Scholarship' && (
                    <span className="text-[7px] tracking-normal font-bold bg-[#FFE45C] text-[#111111] px-1.5 py-0.5 rounded-full animate-pulse">
                      75%
                    </span>
                  )}
                </a>
              ))}
              
              {/* Contact */}
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')} 
                className="mt-3 cinemathic-button text-center py-3 rounded-full tracking-wider font-semibold"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
