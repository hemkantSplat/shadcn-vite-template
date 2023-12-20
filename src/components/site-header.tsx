import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import React from "react"
import { LoginIndicator } from "./login-indicator"
import { Button } from "./ui/button"

export const SiteHeader: React.FC<{
  sidebarOpen: boolean
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className=" border-b ">
      <div className="flex h-12 items-center sm:justify-between sm:space-x-0">
        <div className="flex items-center space-x-1">
          <Button onClick={() => setSidebarOpen(!sidebarOpen)} size={"icon"}>
            {sidebarOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
          </Button>
        </div>

        <div className="pl-8">
          <MainNav />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1 pr-8">
            <ModeToggle />
            <LoginIndicator />
          </nav>
        </div>
      </div>
    </header>
  )
}
