import { BrowserRouter, Route, Routes } from 'react-router'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Catalog from '@/pages/Catalog'
import Checkout from '@/pages/Checkout'
import Home from '@/pages/Home'
import LegalNotice from '@/pages/LegalNotice'
import NotFound from '@/pages/NotFound'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import ProductDetail from '@/pages/ProductDetail'
import TermsOfUse from '@/pages/TermsOfUse'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-svh flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
