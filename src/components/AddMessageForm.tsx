import { Field, Form, Formik } from 'formik'
import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { sendMessage } from '../store/slices/messagesSlice/messageAction'

const AddMessageForm: FC = () => {
  const dispatch = useAppDispatch()
  // const { status } = useAppSelector((state) => state.messages)

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
      <Form className="flex items-center">
        <Field
          className="grow  p-2"
          as="textarea"
          name="message"
          type="text"
          placeholder="Начните набирать ваше сообщение"
        />
        <button className="h-full" type="submit">
          Отправить
        </button>
      </Form>
    </Formik>
  )
}

export default AddMessageForm
