import React, { useState } from "react"
import { SiteHeader } from "./site-header"

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div
        // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
        className={`absolute inset-y-0 left-0 flex transform flex-col ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-10 w-64 bg-gray-800 transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar content */}
      </div>

      {/* Main Content */}
      <div
        className={`flex flex-1 flex-col transition-all duration-300 ease-in-out ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Header */}
        <div className="h-12 ">
          <SiteHeader
            setSidebarOpen={setSidebarOpen}
            sidebarOpen={sidebarOpen}
          />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4">{/* Main content goes here */}</div>
      </div>
    </div>
  )
}

export default Layout
