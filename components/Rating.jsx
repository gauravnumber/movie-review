"use client";

import { createRating } from "@/lib/crud";
// import prisma from "@/lib/db";
import { Rating as ReactRating } from "@smastrom/react-rating";
import { useState } from "react";

// function Rating({ value }) {
function Rating({ movieId }) {
  const [rating, setRating] = useState(0);
  const [isReadOnly, setIsReadOnly] = useState(false);

  const handleAsyncSubmission = async (submittedValue) => {
    try {
      setIsReadOnly(true);
      setRating(submittedValue);
      // console.log("movieId", movieId);

      await createRating(submittedValue, movieId)
    } catch (error) {
      setIsReadOnly(false);
      setRating(0)
    }
  };

  return (
    <ReactRating
      // readOnly
      readOnly={isReadOnly}
      style={{ maxWidth: 100 }}
      value={rating}
      onChange={handleAsyncSubmission}
    // onChange={setRating}
    />
  );
}

export default Rating;
