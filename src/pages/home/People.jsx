import React from "react";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure className="card border p-3 mb-3 shadow-sm rounded bg-info">
      <div className="d-flex align-items-center gap-2">
        <img className="rounded-circle" width="32" height="32" alt="" src={img} />
        <div className="d-flex flex-column">
          <figcaption className="font-weight-bold text-dark">{name}</figcaption>
          <p className="small text-muted">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 small">{body}</blockquote>
    </figure>
  );
};

const People = () => {
  return (
    <div className="position-relative d-flex flex-column align-items-center justify-content-center overflow-hidden rounded bg- shadow-lg marquee-container" style={{ height: "20rem", width: "100%", margin: "20px 0" }}>
      <div className="marquee">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </div>
      <div className="marquee reverse">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </div>
      {/* Adjusted gradient divs to ensure no overflow */}
      <div className="position-absolute top-0 bottom-0 start-0 w-25 bg-gradient" />
      <div className="position-absolute top-0 bottom-0 end-0 w-25 bg-gradient" />
    </div>
  );
};

export default People;
