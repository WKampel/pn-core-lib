import { MessageSentBy } from './MessageSentBy'

export type InAppNotificationEventData = {
  notificationName: string
} & {
  notificationName: 'new message'
  patientId: string
  sentBy: MessageSentBy
  body: string
}

export type InAppNotificationEventName = InAppNotificationEventData['notificationName']
