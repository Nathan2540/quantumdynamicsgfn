import React, { useState } from 'react';

const initialReviews = [
  {
    id: 1,
    name: "Emeka Okafor",
    role: "Founder, Lifestyle Community",
    rating: 5,
    comment: "Quantum Dynamics GFN delivered an exceptional landing page for Lifestyle Community. The precision, smooth navigation, and dark aesthetics perfectly matched our luxury visual identity. Top-tier engineering!"
  },
  {
    id: 2,
    name: "Anietie 'Annie' Bassey",
    role: "Owner, Annie's Store",
    rating: 5,
    comment: "The custom website they built for Annie's Store transformed our online sales. Lightning fast, beautiful layout, and super reliable integration. Highly recommended for any growing brand!"
  },
  {
    id: 3,
    name: "Marcus Vance",
    role: "Creative Director, Cairn Brand",
    rating: 5,
    comment: "Their graphic design expertise is unmatched. The brand cover photo and primary logo Quantum Dynamics crafted for Cairn Brand set us apart from competitors immediately."
  },
  {
    id: 4,
    name: "Amina Yusuf",
    role: "Product Lead, TechHub West Africa",
    rating: 5,
    comment: "A power-house team! From security audits to tailored web apps, Quantum Dynamics operates with real precision and global excellence."
  }
];

// Helper to generate initials (e.g. "Emeka Okafor" -> "EO")
const getInitials = (fullName) => {
  if (!fullName) return "QD";
  const names = fullName.trim().split(" ");
  if (names.length === 1) return names[0].charAt(0).toUpperCase();
  return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
};

const TestimonialsSection = () => {
  // Load initial state from localStorage if present, otherwise fallback to initialReviews
  const [reviews, setReviews] = useState(() => {
    try {
      const savedReviews = localStorage.getItem('qd_gfn_reviews');
      return savedReviews ? JSON.parse(savedReviews) : initialReviews;
    } catch (e) {
      console.error("Could not load reviews from localStorage", e);
      return initialReviews;
    }
  });

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      role: brand.trim() ? brand.trim() : 'Verified Client',
      rating: rating,
      comment: comment.trim()
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);

    // Save updated reviews list to localStorage
    try {
      localStorage.setItem('qd_gfn_reviews', JSON.stringify(updatedReviews));
    } catch (e) {
      console.error("Could not save review to localStorage", e);
    }

    setName('');
    setBrand('');
    setComment('');
    setRating(5);
    setShowModal(true);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="sub-heading">— CLIENT SUCCESS & REVIEWS</span>
          <h2 className="main-heading">Trusted by Brands & Visionaries</h2>
          <p className="description">
            See what founders, innovators, and industry partners say about working with Quantum Dynamics GFN.
          </p>
        </div>

        {/* Scrollable Reviews Grid Container */}
        <div className="reviews-scroll-container">
          <div className="reviews-grid">
            {reviews.map((rev) => (
              <div key={rev.id} className="review-card">
                <div className="card-top">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`star ${i < rev.rating ? 'filled' : ''}`}>★</span>
                    ))}
                  </div>
                  <span className="rating-num">{rev.rating}.0</span>
                </div>
                <p className="comment">"{rev.comment}"</p>
                <div className="client-info">
                  {/* Initials Avatar Badge */}
                  <div className="avatar-initials">
                    {getInitials(rev.name)}
                  </div>
                  <div>
                    <h4 className="client-name">{rev.name}</h4>
                    <span className="client-role">{rev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leave a Review Form Box */}
        <div className="review-form-container">
          <div className="form-header">
            <h3>Worked with us? Leave a Review</h3>
            <p>Your feedback helps us continuously drive engineering excellence.</p>
          </div>

          <form onSubmit={handleSubmit} className="review-form">
            <div className="form-group-inline">
              <div className="form-group">
                <label>Your Name *</label>
                <input 
                  type="text" 
                  placeholder="e.g. Nathan Onyedikachi" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Company / Brand (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Lifestyle Community" 
                  value={brand} 
                  onChange={(e) => setBrand(e.target.value)} 
                />
              </div>
            </div>

            {/* Interactive Star Picker */}
            <div className="form-group">
              <label>Select Your Rating</label>
              <div className="star-picker">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`picker-star ${(hoverRating || rating) >= star ? 'active' : ''}`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    ★
                  </span>
                ))}
                <span className="rating-text">({rating} / 5 Stars)</span>
              </div>
            </div>

            <div className="form-group">
              <label>Your Experience / Review *</label>
              <textarea 
                rows="4" 
                placeholder="Share your experience working with Quantum Dynamics GFN..." 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-review-btn">
              Submit Review ★
            </button>
          </form>
        </div>
      </div>

      {/* Confirmation Popup Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">✓</div>
            <h3>Thank You for Your Review!</h3>
            <p>Your feedback has been submitted successfully and posted to the page.</p>
            <button className="modal-close-btn" onClick={() => setShowModal(false)}>
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;