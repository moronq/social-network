import Chat from '../../components/Chat'

const MessagePage = () => {
  return (
    <main className="flex gap-10 h-[calc(100vh-5rem)] w-full">
      <ul>
        <li>список диалогов</li>
        <li>список диалогов</li>
        <li>список диалогов</li>
        <li>список диалогов</li>
      </ul>
      <Chat />
    </main>
  )
}

export default MessagePage
