import type { Metadata } from "next"
import ProfilePageClient from "./ProfilePageClient"

// Metadata for the profile page (will be overridden by client component if needed)
export const metadata: Metadata = {
  title: "User Profile - BookerShepherds",
  description: "Manage your BookerShepherds account details and preferences.",
}

export default function ProfilePage() {
  return <ProfilePageClient />
}
