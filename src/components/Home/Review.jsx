import React from 'react'
import ReviewCard from '../cards/ReviewCard'
import reviews from '../../data/Review'

const Review = () => {
  return (
    <section
      id="reviews"
      className="cinemathic-bg-soft"
    >
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-2 py-20">

        <div>
          <h2 className="cinemathic-text text-[48px] sm:text-[40px] lg:text-[48px] leading-none">
            From Goal to Growth: Their Stories
          </h2>
        </div>

        <div
          className="mt-8 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory p-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              review={review}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Review