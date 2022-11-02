import { report } from '@/api/mock'

export function getReportDetail(id: string) {
  return JSON.parse(JSON.stringify(report))
}
