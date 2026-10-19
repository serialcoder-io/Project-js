import { useState } from 'react'
import { Link } from 'react-router'

import { AcademicNotice } from '@/components/AcademicNotice'
import { CheckoutField } from '@/components/checkout/CheckoutField'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/context/CartContext'
import { CURRENCY } from '@/lib/config'

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  cardholderName: '',
  cardNumber: '',
  expiryDate: '',
  securityCode: '',
}

const personalFields = [
  { name: 'firstName', label: 'First name', autoComplete: 'given-name' },
  { name: 'lastName', label: 'Last name', autoComplete: 'family-name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', inputMode: 'tel', autoComplete: 'tel' },
  { name: 'address', label: 'Address', autoComplete: 'street-address' },
]

const paymentFields = [
  { name: 'cardholderName', label: 'Cardholder name', autoComplete: 'off' },
  { name: 'cardNumber', label: 'Card number', inputMode: 'numeric', autoComplete: 'off' },
  { name: 'expiryDate', label: 'Expiry date (MM/YY)', inputMode: 'numeric', autoComplete: 'off' },
  { name: 'securityCode', label: 'Security code', inputMode: 'numeric', autoComplete: 'off' },
]

function formatPrice(price) {
  return `${CURRENCY} ${price.toLocaleString('en-IN')}`
}

function validateForm(values) {
  const errors = {}

  Object.entries(values).forEach(([field, value]) => {
    if (!value.trim()) errors[field] = 'This field is required.'
  })

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  const phoneDigits = values.phone.replace(/\D/g, '')
  if (values.phone && (!/^[0-9\s+()-]+$/.test(values.phone) || phoneDigits.length < 7 || phoneDigits.length > 15)) {
    errors.phone = 'Enter a valid phone number with 7 to 15 digits.'
  }

  const cardNumber = values.cardNumber.replace(/\s/g, '')
  if (values.cardNumber && !/^\d{16}$/.test(cardNumber)) {
    errors.cardNumber = 'Enter a 16-digit card number. Spaces are allowed.'
  }

  if (values.expiryDate && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(values.expiryDate)) {
    errors.expiryDate = 'Use MM/YY with a month from 01 to 12.'
  }

  if (values.securityCode && !/^\d{3}$/.test(values.securityCode)) {
    errors.securityCode = 'Enter the 3-digit security code.'
  }

  return errors
}

export default function Checkout() {
  const { lines, total, clearCart } = useCart()
  const [values, setValues] = useState(initialFormValues)
  const [errors, setErrors] = useState({})
  const [confirmationName, setConfirmationName] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setValues((currentValues) => ({ ...currentValues, [name]: value }))
    setErrors((currentErrors) => {
      if (!currentErrors[name]) return currentErrors

      const nextErrors = { ...currentErrors }
      delete nextErrors[name]
      return nextErrors
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (lines.length === 0) return

    const nextErrors = validateForm(values)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setConfirmationName(values.firstName.trim())
    clearCart()
    setValues(initialFormValues)
  }

  if (confirmationName) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Alert>
          <AlertTitle>Thank you, {confirmationName}</AlertTitle>
          <AlertDescription className="mt-2">This was a simulated order. Nothing was charged and nothing was saved.</AlertDescription>
        </Alert>
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-primary">
          <Link className="hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/catalog">Catalog</Link>
        </div>
      </div>
    )
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h1 className="font-heading text-3xl font-semibold tracking-tight">Your cart is empty</h1>
        <p className="mt-3 text-muted-foreground">Add products to your cart before continuing to checkout.</p>
        <Link className="mt-5 inline-block text-primary hover:underline" to="/catalog">Browse the catalog</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <p className="text-sm font-medium tracking-wide text-primary uppercase">Simulated checkout</p>
          <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Complete your order</h1>
        </div>
        <Link className="text-sm font-medium text-primary hover:underline" to="/cart">Back to cart</Link>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
        <form noValidate onSubmit={handleSubmit} className="space-y-8">
          <section aria-labelledby="personal-details-heading">
            <h2 id="personal-details-heading" className="font-heading text-xl font-semibold">Personal details</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {personalFields.map((field) => <CheckoutField key={field.name} field={field} value={values[field.name]} error={errors[field.name]} onChange={handleChange} />)}
            </div>
          </section>

          <Separator />

          <section aria-labelledby="payment-details-heading">
            <h2 id="payment-details-heading" className="font-heading text-xl font-semibold">Payment details</h2>
            <div className="mt-5">
              <AcademicNotice />
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {paymentFields.map((field) => <CheckoutField key={field.name} field={field} value={values[field.name]} error={errors[field.name]} onChange={handleChange} />)}
            </div>
          </section>

          <div className="space-y-3">
            <Button type="submit" size="lg">Place simulated order</Button>
            <p className="text-sm text-muted-foreground">By continuing, you agree to the <Link className="text-primary hover:underline" to="/terms">Terms of Use</Link>.</p>
          </div>
        </form>

        <aside className="rounded-xl border bg-card p-5 lg:sticky lg:top-6" aria-labelledby="order-summary-heading">
          <h2 id="order-summary-heading" className="font-heading text-xl font-semibold">Order summary</h2>
          <div className="mt-5 space-y-4">
            {lines.map(({ product, quantity, subtotal }) => (
              <div key={product.id} className="flex gap-3">
                <img className="size-16 rounded-md bg-muted object-cover" src={product.image} alt={product.name} />
                <div className="min-w-0 flex-1">
                  <p className="font-medium leading-5">{product.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{quantity} x {formatPrice(product.price)}</p>
                </div>
                <p className="shrink-0 text-sm font-medium">{formatPrice(subtotal)}</p>
              </div>
            ))}
          </div>
          <Separator className="my-5" />
          <div className="flex items-center justify-between text-base font-semibold">
            <span>Total</span>
            <span className="text-primary">{formatPrice(total)}</span>
          </div>
        </aside>
      </div>
    </div>
  )
}
