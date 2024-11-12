import React from "react";
import njeri from '../../assets/images/njeri.jpeg'

const reviews = [
  {
    name: "Njeri",
    username: "@Njeri",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: njeri,
  },
  {
    name: "Njeri",
    username: "@Njeri",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: njeri,
    className: 'ms-3'
  },
  {
    name: "Kemunto",
    username: "@kemu",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Joy",
    username: "@kemu",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
    className: 'ms-3'
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body, className }) => {
  return (
    <figure className={`card border p-2 my-2 shadow-sm rounded bg-info ${className || ""}`}>
      <div className="d-flex align-items-center g-3">
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
    <div className="position-relative d-flex flex-column  align-items-center justify-content-center overflow-hidden rounded bg- shadow-lg marquee-container" style={{ height: "20rem", width: "100%", margin: "20px 0" }}>
      <div className="marquee">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </div>
      <div className="marquee reverse g-3 m-2">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </div>
      {/* Adjusted gradient divs to ensure no overflow */}
      <div className="position-absolute top-0 bottom-0 start-0 w-25 bg-gradient" />
      <div className="position-absolute top-0 bottom-0 end-0 w-25 bg-gradient" />
      <div className="position-absolute top-0 bottom-0 end-0 w-25 bg-gradient" />
    </div>
  );
};

export default People;
