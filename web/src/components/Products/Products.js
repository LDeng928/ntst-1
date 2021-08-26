import ProductCard from 'src/components/ProductCard'

const groupBy = (list, keyGetter) => {
  const map = new Map()
  list.forEach((item) => {
    const key = keyGetter(item)
    const collection = map.get(key)
    if (!collection) {
      map.set(key, [item])
    } else {
      collection.push(item)
    }
  })
  return map
}

const Products = ({ products }) => {
  const grouped = groupBy(products, (item) => item.type)
  const categories = [...grouped.keys()]
  return (
    <>
      {categories.map((cat, i) => (
        <div key={i}>
          <h2 className="p-9 text-center text-2xl text-ntst-blue underline font-bold">
            {cat}
          </h2>

          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-10">
            {grouped.get(cat).map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default Products
