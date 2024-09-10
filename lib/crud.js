"use server"

import { revalidatePath } from "next/cache"
import prisma from "./db"

export const createRating = async (submittedValue, movieId) => {
  await prisma.rating.create({
    data: {
      movieId,
      rating: submittedValue
    }
  })

  revalidatePath("/")
}