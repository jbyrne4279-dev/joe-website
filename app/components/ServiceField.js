'use client'
import { useSearchParams } from 'next/navigation'

const SERVICE_MAP = {
  desktop: 'Desktop Reinstatement Cost Assessment',
  onsite: 'On-Site Survey',
  '3year': '3-Year Reinstatement Cost Assessment',
}

export default function ServiceField() {
  const service = SERVICE_MAP[useSearchParams().get('service')]
  return service ? <input type="hidden" name="service" value={service} /> : null
}
