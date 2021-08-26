import {
  articles,
  article,
  createArticle,
  updateArticle,
  deleteArticle,
} from './articles'

describe('articles', () => {
  scenario('returns all articles', async (scenario) => {
    const result = await articles()

    expect(result.length).toEqual(Object.keys(scenario.article).length)
  })

  scenario('returns a single article', async (scenario) => {
    const result = await article({ id: scenario.article.one.id })

    expect(result).toEqual(scenario.article.one)
  })

  scenario('creates a article', async () => {
    const result = await createArticle({
      input: { title: 'String9601431', description: 'String' },
    })

    expect(result.title).toEqual('String9601431')
    expect(result.description).toEqual('String')
  })

  scenario('updates a article', async (scenario) => {
    const original = await article({ id: scenario.article.one.id })
    const result = await updateArticle({
      id: original.id,
      input: { title: 'String72386312' },
    })

    expect(result.title).toEqual('String72386312')
  })

  scenario('deletes a article', async (scenario) => {
    const original = await deleteArticle({ id: scenario.article.one.id })
    const result = await article({ id: original.id })

    expect(result).toEqual(null)
  })
})
