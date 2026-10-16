import { BrowserRouter, Route, Routes } from 'react-router'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Home from '@/pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-svh flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
