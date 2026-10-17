import { AcademicNotice } from '@/components/AcademicNotice'
import { LegalPageLayout } from '@/components/legal/LegalPageLayout'

export default function LegalNotice() {
  return (
    <LegalPageLayout title="Legal Notice">
      <AcademicNotice />
      <p>Legal information for this academic project will be provided here.</p>
    </LegalPageLayout>
  )
}
