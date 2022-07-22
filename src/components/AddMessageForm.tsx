import { FC, useState } from 'react'

type AddMessageFormType = {
  ws: WebSocket
}

const AddMessageForm: FC<AddMessageFormType> = ({ ws }) => {
  const [value, setValue] = useState('')

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const onClickHandler = () => {
    if (value) {
      ws.send(value)
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
