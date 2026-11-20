"use client";

import { useState } from "react";

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  helpfulCount: number;
  verified: boolean;
}

const mockReviewsByProduct: Record<string, Review[]> = {
  "wave-runner": [
    {
      id: "r1",
      author: "Alex Morgan",
      rating: 5,
      date: "2 days ago",
      title: "Best running shoes I've owned",
      comment: "Logged over 60 miles this week. The foam bounce is incredible and zero blisters right out of the box.",
      helpfulCount: 24,
      verified: true,
    },
    {
      id: "r2",
      author: "Jordan Lee",
      rating: 5,
      date: "1 week ago",
      title: "Extremely lightweight and breathable",
      comment: "Living in a warm climate, airflow is everything. These stay cool even on humid 10k morning runs.",
      helpfulCount: 15,
      verified: true,
    },
    {
      id: "r3",
      author: "Samantha Ray",
      rating: 4,
      date: "3 weeks ago",
      title: "Great cushioning, runs slightly snug",
      comment: "If you have wider feet, consider going half a size up. Once broken in, they feel like clouds.",
      helpfulCount: 8,
      verified: true,
    },
  ],
  "pulse-buds": [
    {
      id: "r4",
      author: "David Chen",
      rating: 5,
      date: "3 days ago",
      title: "ANC punches way above its price point",
      comment: "Commuting on the subway went from overwhelming to serene. Bass is tight and impactful without muddying vocals.",
      helpfulCount: 31,
      verified: true,
    },
    {
      id: "r5",
      author: "Elena Rostova",
      rating: 5,
      date: "2 weeks ago",
      title: "Battery life easily hits 8 hours",
      comment: "Wore them through a full workday of Zoom calls and Spotify playlists without needing a recharge.",
      helpfulCount: 19,
      verified: true,
    },
  ],
  "aero-track": [
    {
      id: "r6",
      author: "Marcus Brody",
      rating: 5,
      date: "4 days ago",
      title: "Sleek biometric tracking with zero distractions",
      comment: "The AMOLED display is crisp in direct sunlight. Heart rate and sleep tracking accuracy match dedicated chest straps.",
      helpfulCount: 28,
      verified: true,
    },
    {
      id: "r7",
      author: "Chloe Bennett",
      rating: 4,
      date: "1 week ago",
      title: "Battery lasts a full week as promised",
      comment: "Charged it on Sunday, still had 18% remaining by the following Sunday night. Love the minimalist aluminum chassis.",
      helpfulCount: 12,
      verified: true,
    },
  ],
};

const defaultReviews: Review[] = [
  {
    id: "d1",
    author: "Taylor Swift",
    rating: 5,
    date: "5 days ago",
    title: "Exceptional build quality",
    comment: "Exceeded my expectations in every way. The materials feel premium and the engineering is top notch.",
    helpfulCount: 18,
    verified: true,
  },
  {
    id: "d2",
    author: "Chris Evans",
    rating: 5,
    date: "2 weeks ago",
    title: "Worth every penny",
    comment: "Shipped quickly and arrived in immaculate packaging. Performs flawlessly day in and day out.",
    helpfulCount: 11,
    verified: true,
  },
  {
    id: "d3",
    author: "Morgan Freeman",
    rating: 4,
    date: "1 month ago",
    title: "Solid piece of gear",
    comment: "Very pleased with the performance and durability so far. Would gladly recommend to friends.",
    helpfulCount: 6,
    verified: true,
  },
];

export default function Reviews({ productId }: { productId: string }) {
  const reviews = mockReviewsByProduct[productId] || defaultReviews;
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({});

  const handleHelpful = (id: string, currentCount: number) => {
    setHelpfulVotes((prev) => ({
      ...prev,
      [id]: (prev[id] ?? currentCount) + 1,
    }));
  };

  const avgRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-header">
        <div>
          <h2 className="reviews-title">Customer Reviews</h2>
          <p className="reviews-subtitle">
            Real feedback from verified ShipYard shoppers.
          </p>
        </div>
        <div className="reviews-score-card">
          <div className="reviews-score-num">{avgRating}</div>
          <div className="reviews-score-stars">★★★★★</div>
          <div className="reviews-score-count">{reviews.length} reviews</div>
        </div>
      </div>

      {/* Ratings distribution breakdown */}
      <div className="ratings-breakdown">
        <div className="breakdown-row">
          <span className="breakdown-label">5 stars</span>
          <div className="breakdown-bar">
            <div className="breakdown-fill" style={{ width: "85%" }} />
          </div>
          <span className="breakdown-pct">85%</span>
        </div>
        <div className="breakdown-row">
          <span className="breakdown-label">4 stars</span>
          <div className="breakdown-bar">
            <div className="breakdown-fill" style={{ width: "12%" }} />
          </div>
          <span className="breakdown-pct">12%</span>
        </div>
        <div className="breakdown-row">
          <span className="breakdown-label">3 stars</span>
          <div className="breakdown-bar">
            <div className="breakdown-fill" style={{ width: "3%" }} />
          </div>
          <span className="breakdown-pct">3%</span>
        </div>
      </div>

      {/* Review cards list */}
      <div className="reviews-list">
        {reviews.map((review) => {
          const count = helpfulVotes[review.id] ?? review.helpfulCount;
          return (
            <article key={review.id} className="review-card">
              <div className="review-meta">
                <div className="review-author-wrap">
                  <span className="review-author">{review.author}</span>
                  {review.verified && (
                    <span className="review-badge">Verified Buyer</span>
                  )}
                </div>
                <span className="review-date">{review.date}</span>
              </div>
              <div className="review-rating">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
              <h3 className="review-headline">{review.title}</h3>
              <p className="review-body">{review.comment}</p>
              <div className="review-footer">
                <button
                  type="button"
                  className="review-helpful-btn"
                  onClick={() => handleHelpful(review.id, review.helpfulCount)}
                >
                  Helpful ({count})
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
