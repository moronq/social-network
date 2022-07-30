import { ChateMessageType } from '../models/messages'

type SubscriberType = (messages: Array<ChateMessageType>) => void

let subscribers = [] as Array<SubscriberType>

let ws: WebSocket | null

const closeHandler = () => {
  console.log('close ws')
  setTimeout(createChannel, 3000)
}

const messageHandler = (e: MessageEvent) => {
  const newMessage = JSON.parse(e.data)
  subscribers.forEach((s) => s(newMessage))
}

function createChannel() {
  ws?.removeEventListener('close', closeHandler)
  ws?.close()
  ws = new WebSocket(
    'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
  )
  ws.addEventListener('close', closeHandler)
  ws.addEventListener('message', messageHandler)
}

export const chatAPI = {
  start() {
    createChannel()
  },
  stop() {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.close()
    subscribers = []
  },
  subscribe(callback: SubscriberType) {
    subscribers.push(callback)
    return () => {
      subscribers = subscribers.filter((s) => s !== callback)
    }
  },
  unsubscribe(callback: SubscriberType) {
    subscribers = subscribers.filter((s) => s !== callback)
  },
  sendMessage(message: string) {
    ws?.send(message)
  },
}
