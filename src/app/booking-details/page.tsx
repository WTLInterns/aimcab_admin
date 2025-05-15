"use client"

import BookingDetailsPage from "../booking-details-page"
import { useSearchParams } from "next/navigation"

export default function Page() {
  const searchParams = useSearchParams()
  const bookingId = searchParams.get('id')
  
  return <BookingDetailsPage />
}
