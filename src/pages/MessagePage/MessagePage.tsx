import { useEffect } from 'react'
import Chat from '../../components/Chat'
import DialogList from '../../components/DialogList/DialogList'
import { useAppDispatch } from '../../hooks/redux'
import { fetchDialogs } from '../../store/slices/dialogsSlice/dialogsAction'

const MessagePage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchDialogs())
  }, [])

  return (
    <main className="flex gap-10 h-[calc(100vh-5rem)] w-full">
      <DialogList />
      <Chat />
    </main>
  )
}

export default MessagePage
