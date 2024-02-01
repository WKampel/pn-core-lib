import { InAppNotificationEventData } from './InAppNotificationEventData'
import { MessageSentBy } from './MessageSentBy'

export type SocketEvent = {
  socketEventName: string
} & (
  | {
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
  | {
      socketEventName: 'notification'
      title: string
      body: string
      data: InAppNotificationEventData
    }
)

export type SocketEventName = SocketEvent['socketEventName']
export type SocketEventMap = {
  [K in SocketEvent['socketEventName']]: Extract<SocketEvent, { socketEventName: K }>
}
