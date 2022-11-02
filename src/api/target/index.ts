import request from '@/api/request'
import { tabs, cards } from '@/api/mock'

export function getTargetList() {
  // return request.get(`/target/list`)
  return JSON.parse(JSON.stringify(cards))
}

export function getTabList() {
  return JSON.parse(JSON.stringify(tabs))
}
