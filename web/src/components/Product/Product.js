import { Link, routes } from '@redwoodjs/router'

import { useState, useEffect } from 'react'
import { useCart } from 'src/components/Cart'

const MAX_STRING_LENGTH = 20

const truncate = (text) => {
  let output = text
  if (text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const Product = ({ product }) => {
  const { name, description, imgUrl, price, tag } = product
  const { addItem } = useCart()
  const [carting, setCarting] = useState(false)
  const [extenddesc, setExtenddesc] = useState(false)

  let timer

  const onClick = () => {
    setCarting(true)
    timer = setTimeout(() => setCarting(false), 1000)
    addItem({ item: { ...product, price: price * 100 } })
  }

  useEffect(() => {
    return () => clearTimeout(timer)
  }, [timer])
  return (
    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
      <div className="p-6 flex flex-col items-center">
        <Link to={routes.productdetail({ id: product.id })}>
          <h2 className="mb-4 text-center font-semibold">{name}</h2>

          <img src={imgUrl} alt={tag} className=" w-80 h-40 object-cover" />
        </Link>
        <p className="text-center my-4 font-semibold">${price}</p>

        <button onClick={() => setExtenddesc(!extenddesc)}>
          {extenddesc ? description : truncate(description)}
        </button>

        <div className="w-full p-3 flex flex-row flex-wrap justify-between items-stretch">
          {tag && tag.split(/,\s*/).map((tag, i) => <p key={i}>#{tag}</p>)}
        </div>

        <button
          className="bg-ntst-purple text-ntst-white font-semibold p-3 rounded-md hover:bg-ntst-white hover:text-ntst-blue"
          disabled={carting}
          onClick={() => onClick()}
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default Product
