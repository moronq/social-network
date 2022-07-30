import { FC, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { sendMessage } from '../store/slices/messagesSlice/messageAction'

const AddMessageForm: FC = () => {
  const [value, setValue] = useState('')
  // const [isReady, setIsReady] = useState<'pending' | 'ready'>('pending')
  const dispatch = useAppDispatch()

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const onClickHandler = () => {
    if (value) {
      dispatch(sendMessage(value))
      setValue('')
    }
  }

  return (
    <div className="flex">
      <textarea
        value={value}
        onChange={(e) => onChangeHandler(e)}
        className="grow p-2"
        name="message"
        placeholder="Начните набирать ваше сообщение"
      />
      <button onClick={onClickHandler}>Отправить</button>
    </div>
  )
}

export default AddMessageForm
