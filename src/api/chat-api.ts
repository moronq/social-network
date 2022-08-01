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

const cleanUp = () => {
  ws?.removeEventListener('close', closeHandler)
  ws?.addEventListener('message', messageHandler)
}

function createChannel() {
  cleanUp()
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
    cleanUp()
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
