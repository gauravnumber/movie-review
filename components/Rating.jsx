"use client";

import { Rating as ReactRating } from "@smastrom/react-rating";
import { useState } from "react";

function Rating({ value }) {
  const [rating, setRating] = useState(value);

  return (
    <ReactRating
      readOnly
      style={{ maxWidth: 100 }}
      value={rating}
      onChange={setRating}
    />
  );
}

export default Rating;
