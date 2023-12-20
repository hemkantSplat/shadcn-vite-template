import { ThemeProvider } from "@/components/theme-provider"
import Layout from "./components/Layout"
import { TailwindIndicator } from "./components/tailwind-indicator"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative flex min-h-screen flex-col">
        <Layout />
      </div>
      <TailwindIndicator />
    </ThemeProvider>
  )
}

export default App
