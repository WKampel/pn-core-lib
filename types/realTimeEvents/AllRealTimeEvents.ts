import { RealTimeMessageEventData } from './RealTimeMessageEventData'

export type RealTimeEventDatas = RealTimeMessageEventData
export type RealTimeEventNames = RealTimeEventDatas['realTimeEventName']
export type RealTimeEventMap = {
  [K in RealTimeEventDatas['realTimeEventName']]: Extract<RealTimeEventDatas, { realTimeEventName: K }>
}
