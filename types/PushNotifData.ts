type PushNotifCommonData = {}

export type PushNotifData = PushNotifCommonData &
  (
    | {
        type: 'ANNOUNCEMENT_CREATED'
        announcementId: number
        practiceUrl: string
      }
    | {
        type: 'FORM_ASSIGNED'
      }
    | {
        type: 'PROMOTION_ACTIVATED'
        promotionId: number
        practiceUrl: string
      }
    | {
        type: 'APPOINTMENT_REMINDER'
        appointmentId: string
        practiceUrl: string
      }
    | {
        type: 'NEW_MESSAGE'
        practiceUrl: string
      }
  )

type ExtractType<T> = T extends { type: infer U } ? U : never

export type PushNotifType = ExtractType<PushNotifData>
