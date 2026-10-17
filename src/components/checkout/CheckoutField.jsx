import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function CheckoutField({ field, value, error, onChange }) {
  const errorId = `${field.name}-error`

  return (
    <div className="space-y-2">
      <Label htmlFor={field.name}>{field.label}</Label>
      <Input
        id={field.name}
        name={field.name}
        type={field.type ?? 'text'}
        value={value}
        onChange={onChange}
        autoComplete={field.autoComplete}
        inputMode={field.inputMode}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error && <p id={errorId} className="text-sm text-destructive">{error}</p>}
    </div>
  )
}
