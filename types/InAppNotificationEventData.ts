import { MessageSentBy } from './MessageSentBy'

export type InAppNotificationEventData = {
  notificationName: string
} & {
  notificationName: 'new message'
  patientId: string
  sentBy: MessageSentBy
}

export type InAppNotificationEventName = InAppNotificationEventData['notificationName']
