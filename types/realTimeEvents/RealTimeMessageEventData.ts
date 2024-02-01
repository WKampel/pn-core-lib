import { MessageSentBy } from '../MessageSentBy'
import { RealTimeEventData } from './RealTimeEventData'

export type RealTimeMessageEventData = RealTimeEventData & {
  socketEventName: 'new message'
  id: number
  body: string
  createdAt: Date
  sentBy: MessageSentBy
  adminUserId: string | null
  patientId: string
  practiceId: number
  adminFullName: string | null
  patientFullName: string | null
}
