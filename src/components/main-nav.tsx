import { siteConfig } from "@/config/site"
import { Link } from "react-router-dom"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link to="/" className="flex items-center space-x-2">
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
    </div>
  )
}
