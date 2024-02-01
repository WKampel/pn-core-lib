type PushNotifCommonData = {}

export type PushNotifData = PushNotifCommonData &
  (
    | {
        type: 'ANNOUNCEMENT_CREATED'
        announcementId: number
      }
    | {
        type: 'FORM_ASSIGNED'
      }
  )

type ExtractType<T> = T extends { type: infer U } ? U : never

export type PushNotifType = ExtractType<PushNotifData>
