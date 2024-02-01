export type PushNotifData =
  | {
      type: 'ANNOUNCEMENT_CREATED'
      announcementId: number
    }
  | {
      type: 'FORM_ASSIGNED'
    }
