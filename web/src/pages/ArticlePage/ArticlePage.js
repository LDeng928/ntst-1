import { Form, TextField, Submit } from '@redwoodjs/forms'
import { useState } from 'react'
import KnowledgeBasicsCell from 'src/components/KnowledgeBasicsCell'
import SearchtagCell from 'src/components/SearchtagCell'

const ArticlePage = () => {
  const [search, setSearch] = useState('')
  const onSubmit = ({ search }) => {
    console.log(search)
    setSearch(search)
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <TextField
          name="search"
          placeholder="input tags, only letters allowed"
          validation={{ required: true, patter: { value: /[a-zA-Z]/ } }}
        />
        <Submit>Search</Submit>
      </Form>
      {search && <SearchtagCell tag={search} />}
      <KnowledgeBasicsCell tag={search} />
    </>
  )
}

export default ArticlePage
