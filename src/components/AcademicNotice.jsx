import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function AcademicNotice() {
  return (
    <Alert>
      <AlertTitle>Educational project notice</AlertTitle>
      <AlertDescription className="mt-2 space-y-2">
        <p>This website is an educational project made for academic purposes. Nothing is sold and no payment is processed.</p>
        <p>Please enter fictitious information only.</p>
        <p>Do not enter any real bank card information: not the account holder name, card number, expiry date, or 3-digit security code. None of the values should match a real card.</p>
      </AlertDescription>
    </Alert>
  )
}
