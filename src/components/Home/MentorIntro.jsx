import React from 'react'
import founder from '../../assets/images/Founder.png'
import mentorStats from '../../data/Mentor'

const MentorIntro = () => {
  return (
    <section
      id="mentor"
      className="cinemathic-bg"
    >
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-2 py-14 sm:py-16 lg:py-20 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-center">

        {/* Founder Image */}
        <div className="relative">
          <div className="aspect-square bg-[var(--background-soft)] rounded-3xl border cinemathic-border relative overflow-hidden">

            <div className="absolute inset-0 opacity-40 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="absolute inset-8 sm:inset-10 rounded-2xl overflow-hidden bg-[var(--card-soft)]">
              <img
                src={founder}
                alt="Ritik Kunwal"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute bottom-[-1px] left-4 sm:left-6 bg-[var(--card)] rounded-t-2xl px-4 sm:px-5 py-3 border cinemathic-border shadow-[var(--shadow-small)]">
              <div className="text-[9px] uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                Founder & Math Mentor
              </div>

              <div className="mt-1 text-[12px] sm:text-[13px] text-[var(--text)] font-medium">
                4+ Years · Mathematics Educator
              </div>
            </div>

            <button className="absolute bottom-4 right-4 w-9 h-9 rounded-full cinemathic-button text-white text-sm grid place-items-center">
              ↗
            </button>

          </div>
        </div>

        {/* Mentor Content */}
        <div>

          <div className="flex flex-wrap items-center gap-3">
            <h2 className="cinemathic-text text-[48px] text-[var(--text)] sm:text-[58px] lg:text-[60px] leading-none ">
              Ritik Kunwal
            </h2>

            <span className="text-[var(--secondary)] font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.15em] border cinemathic-border rounded-full px-3 py-1.5">
              IIT Graduate
            </span>
          </div>

          <p className="mt-8 text-[16px] sm:text-[17px] leading-7 text-[var(--text-secondary)] max-w-[620px]">
            I’m Ritik Kunwal(Badal), a mathematics educator and IIT Patna graduate in
            Computer Science and Data Analytics. I teach Classes 9–12, helping
            students build strong foundations and prepare for exams like JEE
            and NDA.
          </p>

          <p className="mt-5 text-[16px] sm:text-[17px] leading-7 text-[var(--text-secondary)] max-w-[620px]">
            My approach is simple: understand the{' '}
            <span className="text-[var(--secondary)]">“why”</span> before
            memorising the{' '}
            <span className="text-[var(--secondary)]">“how”</span>. I focus on
            clear concepts, logical thinking, and problem-solving so students
            can approach even challenging problems with confidence.
          </p>

          <blockquote className="mt-9 border-l-2 border-[var(--primary)] pl-5">
            <div className="serif italic text-[21px] sm:text-[23px] text-[var(--secondary)]">
              “I don’t teach tricks, I teach thinking.”
            </div>

            <div className="mt-2 text-[9px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
              — Classroom principle, since 2023
            </div>
          </blockquote>

          {/* Mentor Stats */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {mentorStats.map((stat, index) => (
              <div
                key={index}
                className="bg-[var(--card)] border cinemathic-border rounded-2xl p-4"
              >
                <div className="text-[13px] text-[var(--text)] font-medium leading-5">
                  {stat.title}
                </div>

                <div className="mt-2 text-[11px] text-[var(--text-muted)]">
                  {stat.details}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default MentorIntro