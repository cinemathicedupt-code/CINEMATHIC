import React from 'react'
import ContactCard from '../cards/ContactCard'
import contacts from '../../data/Contacts'

const Contact = () => {
  return (
    <footer
      id="contact"
      className="bg-[var(--background)] text-[var(--text)] border-t-2 cinemathic-border"
    >
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-2 py-10 sm:py-12 lg:py-14">

        <div className="flex flex-col lg:flex-row justify-between gap-8">

          {/* Intro */}
          <div className=''>
            <h2 className="cinemathic-text text-[56px] sm:text-[70px] leading-[0.9]">
              Let's talk
              <br />
              <span className="cinemathic-text">maths.</span>
            </h2>

            <p className="mt-6 max-w-[470px] text-[15px] sm:text-[16px] leading-6 text-[var(--text-secondary)]">
              For admissions, batches, or a quick doubt — message directly.
              <br className="hidden sm:block" />
              Response within 2 hours, 9 AM to 9 PM IST.
            </p>
          </div>

          {/* Current Batch */}
          <div className="w-full lg:w-[250px] h-fit rounded-2xl border cinemathic-border bg-[var(--card)] p-6">
            <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
              Current Batch
            </div>

            <div className="serif text-[17px] leading-5 mt-4">
              JEE 2026 + Boards
              <br />
              Mon–Sat · 3 PM IST
            </div>

            <div className="mt-4 text-[11px] text-[var(--text-muted)]">
              Live Class on Meet 
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map((contact, index) => (
            <ContactCard
              key={index}
              contact={contact}
            />
          ))}
        </div>

        {/* Branding */}
        <div className="mt-8 flex justify-end">
          <div className="text-right">
            <div className="serif text-[18px] tracking-wider font-bold">
              cinemathic<span className="text-[var(--primary)]">.</span>
            </div>

            <div className="mt-2 text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Maths, taught like a story — Est. 7<sup>th</sup> October, 2025
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-5 border-t cinemathic-border flex flex-col sm:flex-row justify-between gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.13em] text-[var(--text-muted)]">
          <span>© 2026 Cinemathic · All rights reserved</span>
          <span>Kota · Online</span>
        </div>

      </div>
    </footer>
  )
}

export default Contact