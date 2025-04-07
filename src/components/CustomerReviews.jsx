import React, { useState } from "react";
import "./CustomerReviews.css"; // Import CSS file

const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    review: "Amazing quality! The shirts are stylish and comfortable.",
    rating: 5,
    avatar: "/public/images/shirt-hero.jpg",
  },
  {
    id: 2,
    name: "Sarah Lee",
    review: "Great customer service and fast shipping. Highly recommend!",
    rating: 4,
    avatar: "/public/images/shirt-hero3.jpg",
  },
  {
    id: 3,
    name: "Michael Smith",
    review: "Loved the customization options. Will order again!",
    rating: 5,
    avatar: "/public/images/shirt-hero2.jpg",
  },
];

const CustomerReviews = () => {
  const [reviews, setReviews] = useState(reviewsData);
  const [newReview, setNewReview] = useState({
    name: "",
    review: "",
    rating: 5,
    avatar: "/images/default-avatar.jpg", // Default avatar
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const submitReview = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.review) {
      setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
      setNewReview({ name: "", review: "", rating: 5, avatar: "/images/default-avatar.jpg" });
    }
  };

  const deleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  return (
    <section className="customer-reviews">
      <h2 className="reviews-title">Customer Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.avatar} alt={review.name} className="review-avatar" />
            <h3 className="reviewer">{review.name}</h3>
            <p className="review-text">"{review.review}"</p>
            <div className="stars">{"⭐".repeat(review.rating)}</div>
            <button className="delete-btn" onClick={() => deleteReview(review.id)}>Delete</button>
          </div>
        ))}
      </div>

      <form onSubmit={submitReview} className="review-form">
        <h3>Leave a Review</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newReview.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="review"
          placeholder="Write your review..."
          value={newReview.review}
          onChange={handleInputChange}
          required
        ></textarea>
        <label>Rating:</label>
        <select name="rating" value={newReview.rating} onChange={handleInputChange}>
          {[5, 4, 3, 2, 1].map((num) => (
            <option key={num} value={num}>
              {num} Stars
            </option>
          ))}
        </select>
        <button type="submit" className="submit-btn">Submit Review</button>
      </form>
    </section>
  );
};

export default CustomerReviews;
