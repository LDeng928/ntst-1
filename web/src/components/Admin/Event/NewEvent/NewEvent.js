import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import EventForm from 'src/components/Admin/Event/EventForm'

const CREATE_EVENT_MUTATION = gql`
  mutation CreateEventMutation($input: CreateEventInput!) {
    createEvent(input: $input) {
      id
    }
  }
`

const NewEvent = () => {
  const [createEvent, { loading, error }] = useMutation(CREATE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event created')
      navigate(routes.adminEvents())
    },
  })

  const onSave = (input) => {
    createEvent({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Event</h2>
      </header>
      <div className="rw-segment-main">
        <EventForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEvent
