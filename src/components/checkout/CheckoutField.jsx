import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function CheckoutField({ field, value, error, onChange }) {
  const { label, ...props } = field
  return <div className="space-y-2"><Label htmlFor={field.name}>{label}</Label><Input {...props} id={field.name} value={value} onChange={onChange} required aria-invalid={Boolean(error)} aria-describedby={error ? `${field.name}-error` : undefined} />{error && <p id={`${field.name}-error`} className="text-sm text-destructive">{error}</p>}</div>
}
