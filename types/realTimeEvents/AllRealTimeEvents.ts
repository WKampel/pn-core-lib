import { RealTimeMessageEventData } from './RealTimeMessageEventData'

export type RealTimeEventDatas = RealTimeMessageEventData
export type socketEventNames = RealTimeEventDatas['socketEventName']
export type RealTimeEventMap = {
  [K in RealTimeEventDatas['socketEventName']]: Extract<RealTimeEventDatas, { socketEventName: K }>
}
