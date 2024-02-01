import { MessageSentBy } from './MessageSentBy'

export type InAppNotificationEventData = {
  notificationName: string
  body: string
  title: string
} & {
  notificationName: 'new message'
  patientId: string
  sentBy: MessageSentBy
  title: string
  body: string
}

export type InAppNotificationEventName = InAppNotificationEventData['notificationName']
