import { MessageSentBy } from './MessageSentBy'

export type InAppNotificationEventData = {
  notificationName: string
} & (
  | {
      notificationName: 'new message'
      patientId: string
      sentBy: MessageSentBy
    }
  | {
      notificationName: 'form assigned'
      patientFormId: number
    }
)
export type InAppNotificationEventName = InAppNotificationEventData['notificationName']
