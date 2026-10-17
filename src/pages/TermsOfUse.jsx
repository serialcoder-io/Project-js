import { AcademicNotice } from '@/components/AcademicNotice'
import { LegalPageLayout } from '@/components/legal/LegalPageLayout'

export default function TermsOfUse() {
  return (
    <LegalPageLayout title="Terms of Use">
      <AcademicNotice />
      <p>The terms for this academic project will be provided here.</p>
    </LegalPageLayout>
  )
}
