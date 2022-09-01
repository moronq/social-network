import { Formik } from 'formik'
import { FC } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { sendMessage } from '../../store/slices/messagesSlice/messageAction'

const AddMessageForm: FC = () => {
  const dispatch = useAppDispatch()

  return (
    <Formik
      initialValues={{
        message: '',
      }}
      onSubmit={(values, actions) => {
        if (values.message) {
          dispatch(sendMessage(values.message))
          actions.setSubmitting(false)
          values.message = ''
        }
      }}
    >
      {(props) => (
        <form className="flex items-center">
          <textarea
            className="grow p-2"
            name="message"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.message}
            placeholder="Начните писать сообщение..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                props.handleSubmit()
              }
            }}
          ></textarea>
          <button
            disabled={!props.values.message}
            className="h-full disabled:text-slate-300"
            type="submit"
          >
            Отправить
          </button>
        </form>
      )}
    </Formik>
  )
}

export default AddMessageForm
